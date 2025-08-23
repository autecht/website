import graduation from './graduation.JPEG'

function Home() {
  return (
    <>
      <div class="filler"></div>
      <img class="image" alt="" src={graduation}></img>

      <div class="rounded-box heading-box"> 
        <h1 class="heading">About</h1>
      </div>

      <div class="rounded-box heading-box"> 
      <h2 class="heading">My Studies</h2>
      </div>

      <div class="rounded-box body-box">
      <p class="body">
      I'm a recent Computer Science graduate from UC San Diego with strong academic foundations (4.0 GPA) and hands-on experience in software development. I've applied my skills in agile development, object-oriented programming, relational databases, and version control. By tutoring in relational databases and operating systems, I not only helped others succeed, but also strengthened my grasp of complex material. I'm excited to bring my passion for building reliable, impactful software in a collaborative setting to a full-time engineering role.
      </p>
      </div>

      <div class="rounded-box heading-box"> 
      <h2 class = "heading">More About Me</h2>
      </div>

      <div class="rounded-box body-box">
      <p class="body">
        Outside of academics, I enjoy exploring new worlds and lives through reading, video games, and shows. 
        In the world I live in, I love to exercise, play chess, and spend time with friends and family. 
        I don't go on hikes often enough, but I love walking through nature when I can.
        In everyday life, I care deeply about compassion and ethics — one way this shows up is being vegan.
      </p>
      </div>
      
    </>
  );
}

export default Home;