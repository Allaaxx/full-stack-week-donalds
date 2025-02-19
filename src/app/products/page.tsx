import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-500">
      <div className="flex flex-col items-center justify-center gap-5 rounded-xl border-white bg-white p-4 shadow-lg">
        <h1 className="text-4xl font-bold">Product Page</h1>
        <Input placeholder="Product Name" />
        <Button> Buy</Button>
      </div>
    </div>
  );
};

export default ProductPage;
