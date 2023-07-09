import Category from "@/app/types/category";
import Image from "next/image";

export default async function Card({ category }: { category: Category }) {
  return (
    <div
      className="w-full aspect-square  rounded-md overflow-clip relative"
      style={{ backgroundColor: category.backgroundColor }}
    >
      <Image
        className="absolute w-1/2 aspect-square -right-3 -bottom-3 rotate-[30deg]"
        src={category.image}
        alt="Picture of the author"
        width={100}
        height={100}
        objectFit="cover"
        objectPosition="center"
      ></Image>
      <div className="absolute w-full h-full p-4">
        <div className="flex">
          <h1 className="font-semibold text-2xl w-full">{category.name}</h1>
        </div>
      </div>
    </div>
  );
}
