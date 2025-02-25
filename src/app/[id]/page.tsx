"use client";

import { useParams } from "next/navigation";
import ProductImages from "@/components/ProductImages";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import { Product } from "@/models/Product";

export default function ProductDetail() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/products.json"); // โหลด JSON
      const data: Product[] = await response.json();
      console.log(data);
      const foundProduct = data.find((p) => p.id === String(id));
      setProduct(foundProduct || null);
    };
    fetchData();
  }, [id]);

  if (!product) {
    return <h1 className="text-center text-red-500">Product Not Found</h1>;
  }

  return (
    <div className="container mx-auto p-8 bg-[#F2F4F6]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-8">
        {/* รูปสินค้า */}
        <div className="w-full">
          <ProductImages gallery={product.gallery} />
        </div>

        {/* รายละเอียดสินค้า */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold text-[#D99F2B] mt-4">
              {product.currency} {product.price}
            </p>
            <p className="text-gray-600 mt-2">{product.description}</p>
          </div>

          {/* ปุ่ม  Buy Add to cart */}
          <div>
            <button className="bg-[#D99F2B] text-white px-14 py-3  mt-4 self-start mr-8 ">
              Buy Now
            </button>
            <button className="bg-[#373435] text-white px-14 py-3  mt-4 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
