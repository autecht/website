import headshot from './headshot.jpg'

function Home() {
  return (
    <>
      <div class="filler"></div>
      <img class="image" src={headshot}></img>
      <h1 class="heading">About</h1>

      <p class="body">
      I'm a recent Computer Science graduate from UC San Diego with strong academic foundations (4.0 GPA) and hands-on experience in software development. I've applied my skills in agile development, object-oriented programming, relational databases, and version control. By tutoring in relational databases and operating systems, I not only helped others succeed, but also strengthened my grasp of complex material. I'm excited to bring my passion for building reliable, impactful software in a collaborative setting to a full-time engineering role.
      </p>
      
    </>
  );
}

export default Home;