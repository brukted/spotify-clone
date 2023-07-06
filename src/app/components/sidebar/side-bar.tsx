import TopBar from "./top-bar";
import YourLibrary from "./your-library";

export default function SideBar() {
  return (
    <section className="w-80 h-full grid grid-cols-1 grid-flow-row gap-2">
      <TopBar></TopBar>
      <YourLibrary></YourLibrary>
    </section>
  );
}
