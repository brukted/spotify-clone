import { House, ListDashes, MagnifyingGlass, Plus } from "./components/icons";
import SideBar from "./components/sidebar/side-bar";

export default function Home() {
  return (
    <main className="flex h-screen items-stretch justify-between p-2 gap-2">
      <SideBar></SideBar>
      <section className="bg-[#121212] max-h-full min-h-full flex-grow rounded-lg overflow-scroll"></section>
    </main>
  );
}
