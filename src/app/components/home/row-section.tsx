import Link from "next/link";
import Card from "./card";

export default function RowSection() {
  return (
    <div className="w-full px-5 flex flex-col gap-4 mb-4">
      <div className="flex justify-between items-end">
        <Link href="#" className="text-2xl font-bold hover:underline">
          Your top mixes
        </Link>
        <Link
          href="#"
          className="font-bold text-sm text-neutral-400 hover:underline"
        >
          Show All
        </Link>
      </div>
      <div className="grid grid-rows-1 grid-cols-5 gap-5 overflow-scroll">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
