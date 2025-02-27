"use client";
import { useEffect, useState } from "react";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Product } from "@/models/Product";

const ListPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // ข้อมูลสินค้าเต็ม
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // สินค้าหลังจากกรอง

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/data/products.json");
      const data: Product[] = await res.json();
      setProducts(data);
      setFilteredProducts(data); // เริ่มต้นให้ filteredProducts เท่ากับสินค้าทั้งหมด
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Slider />
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-32 relative">
        {/* ส่ง props ให้ Filter */}
        <Filter products={products} setFilteredProducts={setFilteredProducts} />

        {/* Products */}
        <h1 className="mt-12 text-xl font-semibold mb-4">All Product List!</h1>
        <div className="flex flex-wrap gap-10 justify-center mx-5">
          {filteredProducts.length > 0 ? (
            filteredProducts
              .slice(0, 12)
              .map((product) => (
                <ProductList key={product.id} product={product} />
              ))
          ) : (
            <p className="text-gray-500 col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ListPage;
