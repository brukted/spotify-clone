import Image from "next/image";
import { Play } from "../icons";

export default function Card() {
  return (
    <div className="p-4 bg-neutral-900 w-full rounded-md flex flex-col gap-3 group">
      <div className="w-full aspect-square relative">
        <Image
          height={100}
          width={100}
          src="https://picsum.photos/200/200"
          className="w-full aspect-square object-contain rounded-md shadow-lg"
          alt="album art"
        ></Image>
        <button className="absolute bottom-2 translate-y-2 group-hover:translate-y-0 right-2 group-hover:flex opacity-0 flex group-hover:opacity-100 transition delay-75 duration-300 hover:scale-105 h-12 w-12 rounded-full bg-[#1CDF63] items-center justify-center text-black shadow-xl ">
          <Play size={24} weight="fill" />
        </button>
      </div>
      <h2 className="font-bold">Daily Mix 1</h2>
      <span className="text-neutral-400 text-sm font-normal text-ellipsis line-clamp-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      </span>
    </div>
  );
}
