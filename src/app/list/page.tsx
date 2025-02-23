"use client";
import { useEffect, useState } from "react";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Filter from "@/components/Filter";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  currency: string;
}

const ListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/data/products.json");
      const data: Product[] = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        {/* Banner Slider */}
        <Slider />
        
        {/* Campaign Section */}
        <div className="hidden bg-[#e2d2b2] px-4 sm:flex justify-between h-64">
          <div className="w-2/3 flex flex-col items-center justify-center gap-8">
            <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
              Grab up to 50% off on
              <br /> Selected Products
            </h1>
            <button className="rounded-3xl bg-[#EA3737] text-white w-max py-3 px-5 text-sm">
              Buy Now
            </button>
          </div>
          <div className="relative w-1/3">
            <Image src="/logo.png" alt="" fill className="object-contain" />
          </div>
        </div>
        
        {/* Filter */}
        <Filter />
        
        {/* Product Section */}
        <h1 className="mt-12 text-xl font-semibold">For you!</h1>
        <ProductList />
      </div>
    </>
  );
};

export default ListPage;