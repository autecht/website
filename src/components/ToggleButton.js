export default function ToggleButton({ onClick, text }) {
  return (
    <button class="rounded-box heading-box name" onClick={onClick}>{text}</button>
  );
}