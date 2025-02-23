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

const ListPage = () => {
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
        {/* Baner Silder*/}
        <Slider />
      </div>
    </>
  );
};

export default ListPage;
