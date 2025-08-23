import graduation from './graduation.JPEG'
import computer_science from './Computer_Science_and_Engineering.jpg'

function Home() {
  return (
    <>
      <div class="filler"></div>
      <div class="section">
        <div class="about">
          <h1 class="about-heading">About</h1>
          <img class="about-image" alt="" src={graduation}></img>
          
        </div>
        
      </div>


      <div class="section">
        <div class="rounded-box heading-box">
          <img class="about-image" alt="" src={computer_science}></img>
          <div class="image-credit">
          <p class = "name no-spacing">Credit: <a href="https://commons.wikimedia.org/wiki/File:Computer_Science_and_Engineering.jpg">AndyrooP</a>
          , <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a> </p>
          </div>
          <h2 class="heading">My Journey in CS</h2>
          
        </div>

        <div class="rounded-box body-box">
          <p class="body">
            I'm a recent Computer Science graduate from UC San Diego with strong academic foundations (4.0 GPA) and hands-on experience in software development. 
            I've applied my skills in agile development, object-oriented programming, relational databases, and version control. 
            By tutoring in relational databases and operating systems, I not only helped others succeed, but also strengthened my grasp of complex material. 
            I'm excited to bring my passion for building reliable, impactful software in a collaborative setting to a full-time engineering role.
          </p>
        </div>
      </div>


      <div class="section reverse">
        <div class="rounded-box heading-box">
          <h2 class="heading">More About Me</h2>
        </div>

        <div class="rounded-box body-box">
          <p class="body">
            Outside of academics, I enjoy exploring new worlds and lives through reading, video games, and shows.
            In the world I live in, I love to exercise, play chess, and spend time with friends and family.
            I don't go on hikes often enough, but I love walking through nature when I can.
            In everyday life, I care about compassion and ethics — one way this shows up is being vegan.
          </p>
        </div>
      </div>

    </>
  );
}

export default Home;