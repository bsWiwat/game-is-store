import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">500 ฿</span>
          </div>
          <div className="text-sm text-gray-500">Description</div>
          <button className="rounded-2xl ring-1 ring-[#EA3737] text-[#EA3737] w-max py-2 px-4 text-xs hover:bg-[#EA3737] hover:text-white">
            Add to cart
          </button>
        </Link>

        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">500 ฿</span>
          </div>
          <div className="text-sm text-gray-500">Description</div>
          <button className="rounded-2xl ring-1 ring-[#EA3737] text-[#EA3737] w-max py-2 px-4 text-xs hover:bg-[#EA3737] hover:text-white">
            Add to cart
          </button>
        </Link>

        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">500 ฿</span>
          </div>
          <div className="text-sm text-gray-500">Description</div>
          <button className="rounded-2xl ring-1 ring-[#EA3737] text-[#EA3737] w-max py-2 px-4 text-xs hover:bg-[#EA3737] hover:text-white">
            Add to cart
          </button>
        </Link>

        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">500 ฿</span>
          </div>
          <div className="text-sm text-gray-500">Description</div>
          <button className="rounded-2xl ring-1 ring-[#EA3737] text-[#EA3737] w-max py-2 px-4 text-xs hover:bg-[#EA3737] hover:text-white">
            Add to cart
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductList;

