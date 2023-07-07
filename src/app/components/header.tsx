import { CaretLeft, CaretRight, DownloadSimple, User } from "./icons";
import LoginButton from "./login-button";

export default function Header() {
  return (
    <header className="bg-opacity-0 w-full h-16 absolute top-0 z-20 px-5 py-4 flex justify-between items-center">
      <div className="flex gap-2 text-white">
        <button className="w-8 h-8 bg-black bg-opacity-70 flex items-center justify-center rounded-full">
          <CaretLeft weight="bold" size={18} />
        </button>
        <button className="w-8 h-8 bg-black opacity-60 flex items-center justify-center rounded-full">
          <CaretRight weight="bold" size={18} />
        </button>
      </div>
      <div className="flex gap-2">
        <LoginButton></LoginButton>
        <button className="bg-white rounded-full h-8 text-black font-bold text-center text-sm px-4 py-1 hover:scale-105 transition ease-in-out">
          Explore Premium
        </button>
        <button className="flex items-center justify-center gap-1 bg-black bg-opacity-60 rounded-full h-8 text-white font-bold text-sm px-4 py-1 hover:scale-105 transition ease-in-out">
          <DownloadSimple weight="bold" size={16} />
          <span>Install App</span>
        </button>
        <button className="flex items-center justify-center bg-black bg-opacity-60 h-8 w-8 rounded-full">
          <User weight="bold" size={16} />
        </button>
      </div>
    </header>
  );
}
