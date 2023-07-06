import Image from "next/image";

export default function Tile({
  text,
  icon,
  isActive,
}: {
  text: string;
  icon: string;
  isActive: boolean;
}) {
  return (
    <div
      className={`flex p-2 h-16 gap-2 rounded-md cursor-pointer ${
        isActive
          ? "bg-neutral-800 hover:bg-neutral-700"
          : "hover:bg-neutral-900"
      }`}
    >
      <Image
        height={100}
        width={100}
        src="https://picsum.photos/200/200"
        className="w-12 h-12 object-contain rounded-md bg-white"
        alt="album art"
      ></Image>
      <div className="flex flex-col justify-between">
        <span>AJR</span>
        <span className="text-neutral-400 text-sm">Artist</span>
      </div>
    </div>
  );
}
