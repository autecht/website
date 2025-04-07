import headshot from './headshot.jpg'

function Home() {
  return (
    <>
      <div class="filler"></div>
      <img class="image" src={headshot}></img>
      <h1 class="heading">About</h1>

      <p class="body">
        Throughout college, I have had to accept that I can't pursue every opportunity. Dozens of majors would provide a fascinating career path, I could spend a lifetime taking all of the courses I would like to, and there are so many student organizations it becomes tedious to read through them.
      </p>
      <p class="body">
        Thus the importance of taking advantage of the opportunities I can. I have pursued a fascination in Cognitive Science, a field I previously didn’t know existed. I found incredible people in classes, organizations, and working at a dining hall. I applied data structures and algorithms inside and out of the classroom, used agile development and object oriented programming, and practiced my understanding of relational databases.
      </p>
      <p class="body">
        Off campus, I've come to appreciate the simple opportunities. I don't need a degree to spend time with family, complete Cyberpunk 2077, or enjoy a game of chess, yet never before have these been more important to me.
      </p>
      <p class="body">
        As I finish my undergraduate education and transition to the next step of my career, I can’t wait to see what new opportunities present themselves.
      </p>
      
    </>
  );
}

export default Home;