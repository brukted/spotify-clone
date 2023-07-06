import { House, MagnifyingGlass } from "../icons";

export default function TopBar() {
  return (
    <div className="bg-[#121212] rounded-lg flex flex-col py-2 px-3 text-neutral-400">
      <div className="my-1 px-3 hover:text-neutral-100 cursor-pointer flex items-center gap-5 h-10">
        <House size={24} weight="bold" />
        <span className="font-bold">Home</span>
      </div>

      <div className="my-1 px-3 hover:text-neutral-100 cursor-pointer flex items-center gap-5 h-10">
        <MagnifyingGlass size={24} weight="bold" />
        <span className="font-bold">Search</span>
      </div>
    </div>
  );
}
