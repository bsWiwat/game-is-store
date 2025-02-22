"use client";
import { useEffect, useState } from "react";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  currency: string;
}
const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]); // กำหนดชนิดของ products เป็น array ของ Product

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/data/products.json");
      const data: Product[] = await res.json(); // กำหนดให้ data เป็นประเภท Product[]
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="">
        <Slider />
        <div className="mt-24">
          <CategoryList />
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-32">
          <h1 className="text-2xl mb-6 font-bold">Recommend Products</h1>
          <div className="flex flex-wrap gap-10 justify-start mx-5 ">
            {/* map ข้อมูลแต่ละ product และส่งไปยัง Card component */}
            {products.map((product) => (
              <ProductList key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-32">
          <h1 className="text-2xl  mb-6">New Products</h1>
          <div className="flex flex-wrap gap-10 justify-start mx-5">
            {/* map ข้อมูลแต่ละ product และส่งไปยัง Card component */}
            {products.map((product) => (
              <ProductList key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
