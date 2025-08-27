export default function ToggleButton({ onClick, text }) {
  return (
    <button className="rounded-box heading-box name" onClick={onClick}>{text}</button>
  );
}