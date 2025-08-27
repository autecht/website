export default function Section({ children, reverse=false }) {
  return <div class={reverse?"section reverse":"section"}>
    {children}

    <div style= {{flex: 0.25}}></div>
  </div>;
}