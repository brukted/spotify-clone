import HorizontalTile from "./horizontal-tile";

export default function TopSection() {
  return (
    <div className="w-full px-5 pt-16 pb-4 bg-gradient-to-b from-[#876c56] to-transparent to-90%">
      <h1 className="text-3xl font-bold">Good morning</h1>
      <div className="grid grid-cols-3 grid-flow-row mt-5 gap-x-6 gap-y-4">
        <HorizontalTile></HorizontalTile>
        <HorizontalTile></HorizontalTile>
        <HorizontalTile></HorizontalTile>
        <HorizontalTile></HorizontalTile>
        <HorizontalTile></HorizontalTile>
      </div>
    </div>
  );
}
