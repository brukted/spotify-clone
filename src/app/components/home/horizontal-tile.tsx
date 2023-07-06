import Image from "next/image";
import { Pause } from "../icons";

export default function HorizontalTile() {
  return (
    <div className="flex items-center gap-4 h-20 w-full bg-white bg-opacity-10 hover:bg-opacity-20 duration-300 transition cursor-pointer rounded-md overflow-clip group">
      <Image
        height={100}
        width={100}
        src="https://picsum.photos/200/200"
        className="w-20 h-20 object-contain rounded-md shadow-lg"
        alt="album art"
      ></Image>
      <span className="font-bold">Taylor Swift</span>
      <div className="flex-grow justify-end pr-4 flex">
        <button className="h-12 aspect-square rounded-full bg-[#1CDF63] hidden opacity-0 group-hover:flex group-hover:opacity-100 transition items-center justify-center text-black shadow-xl hover:scale-105">
          <Pause size={24} weight="fill" />
        </button>
      </div>
    </div>
  );
}
