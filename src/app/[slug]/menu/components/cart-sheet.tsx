import { useContext } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../contexts/carts";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle> a</SheetTitle>
          <SheetDescription>b</SheetDescription>
        </SheetHeader>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.quantity}</p>
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
