export default function BodyBox({ children }) {
  return <div class="rounded-box body-box">
    <p class="body">
      {children}
    </p>
  </div>;
}