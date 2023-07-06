export default function Chip(props: { text: string; onClick?: () => void }) {
  return (
    <button className="py-1 px-3 bg-neutral-800 rounded-full flex items-center justify-center h-8">
      <span className="text-sm">{props.text}</span>
    </button>
  );
}
