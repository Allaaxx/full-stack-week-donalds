import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import Stripe from "stripe";

import { db } from "@/lib/prisma";

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return new Response("Stripe secret key not found", { status: 500 });
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
  });

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.error();
  }
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET_KEY;
  if (!webhookSecret) {
    throw new Error("Stripe webhook secret key not found");
  }
  const text = await request.text();
  const event = stripe.webhooks.constructEvent(text, signature, webhookSecret);

  switch (event.type) {
    case "checkout.session.completed": {
      const paymentIsSuccessful = event.type === "checkout.session.completed";

      if (paymentIsSuccessful) {
        const orderId = event.data.object.metadata?.orderId;
        if (!orderId) {
          return NextResponse.error();
        }
        const order = await db.order.update({
          where: {
            id: Number(orderId),
          },
          data: {
            status: "PAYMENT_CONFIRMED",
          },
          include: {
            restaurant: {
              select: {
                slug: true,
              },
            },
          },
        });
        revalidatePath(`${order.restaurant.slug}/menu`);
        break;
      }
    }

    case "charge.failed": {
      const orderId = event.data.object.metadata?.orderId;
      if (!orderId) {
        return NextResponse.error();
      }
      const order = await db.order.update({
        where: {
          id: Number(orderId),
        },
        data: {
          status: "PAYMENT_FAILD",
        },
        include: {
          restaurant: {
            select: {
              slug: true,
            },
          },
        },
      });
      revalidatePath(`${order.restaurant.slug}/menu`);
      break;
    }
  }

  return NextResponse.json({
    received: true,
  });
}
