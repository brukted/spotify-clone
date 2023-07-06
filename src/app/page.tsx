import RowSection from "./components/home/row-section";
import TopSection from "./components/home/top-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <TopSection></TopSection>
      <RowSection></RowSection>
      <RowSection></RowSection>
      <RowSection></RowSection>
      <RowSection></RowSection>
      <RowSection></RowSection>
    </div>
  );
}
