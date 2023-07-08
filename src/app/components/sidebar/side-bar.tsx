import TopBar from "./top-bar";
import YourLibrary from "./your-library";

export default function SideBar() {
  return (
    <section className="w-80 h-full grid grid-cols-1 grid-rows-[auto_1fr] gap-2">
      <TopBar></TopBar>
      <YourLibrary></YourLibrary>
    </section>
  );
}
