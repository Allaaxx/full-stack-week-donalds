import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-500">
      <div className=" border-white rounded-xl p-4 bg-white shadow-lg flex justify-center items-center flex-col gap-5">
        <h1 className="text-4xl font-bold text-lime-400">Product Page</h1>
        <Input placeholder="Product Name" />
        <Button> Buy</Button>
      </div>
    </div>
  );
};

export default ProductPage;
