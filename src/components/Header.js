export default function Header() {
  return (<>
    <div className="header">

      <div className="menu-container">
        <span className="name"> Arthur Utecht </span>
      </div>
      <div className="menu-container">
        <a href="#/" className="menu">About</a>
        <a href="#/projects" className="menu">Projects</a>
        <a href="#/experience" className="menu">Experience</a>
        <a href="#/contact" className="menu">Contact</a>

      </div>
    </div>
    <div className="filler"></div>
  </>
  );
}