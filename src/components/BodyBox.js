export default function BodyBox({ children }) {
  return <div className="rounded-box body-box">
    <p className="body">
      {children}
    </p>
  </div>;
}