import Image from "next/image";
import { MusicNotesSimple } from "../icons";
import Link from "next/link";
import LibraryItem from "@/app/types/library-item";

export default function Tile({
  item,
  isActive,
}: {
  item: LibraryItem;
  isActive: boolean;
}) {
  return (
    <Link
      className={`flex p-2 h-16 gap-2 rounded-md ${
        isActive
          ? "bg-neutral-800 hover:bg-neutral-700"
          : "hover:bg-neutral-900"
      }`}
      href={`/playlist/${item.id}`}
    >
      {item.images.length > 0 ? (
        <Image
          height={100}
          width={100}
          src={item.images[0].url.replace("*", "en")}
          className={`w-12 h-12 object-cover ${
            item.type == "artist" ? "rounded-full" : "rounded-md"
          }`}
          alt={`Playlist cover for ${item.name}`}
        ></Image>
      ) : (
        <div className="w-12 h-12 bg-neutral-800 text-neutral-400 flex items-center justify-center rounded-md">
          <MusicNotesSimple size={24} weight="bold" />
        </div>
      )}
      <div className="flex flex-col justify-between">
        <span className="font-normal">{item.name}</span>
        <span className="text-neutral-400 text-sm capitalize">
          {`${item.type} ${
            item.owner?.display_name ? `• ${item.owner.display_name}` : ""
          }`}
        </span>
      </div>
    </Link>
  );
}
