import graduation from '../images/graduation.JPEG'
import computer_science from '../images/Computer_Science_and_Engineering.jpg'
import courtright from '../images/Courtright.jpg'
import { BodyBox, HeadingWithImage, HeadingWithImageAndCredit, Section} from '../Components';


function Home() {
  return (
    <>

      <Section>
        {HeadingWithImage({ heading: "About", image: graduation, h1: true })}
      </Section>

      <Section>
        {HeadingWithImageAndCredit({
          heading: "My Journey in CS",
          image: computer_science,
          creditName: "AndyrooP",
          creditUrl: "https://commons.wikimedia.org/wiki/File:Computer_Science_and_Engineering.jpg",
          creditLicense: "CC BY-SA 4.0",
          creditLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
        })}

        <BodyBox>
          I'm a recent Computer Science graduate from UC San Diego with strong academic foundations (4.0 GPA) and hands-on experience in software development.
          I've applied my skills in agile development, object-oriented programming, relational databases, and version control.
          By tutoring in relational databases and operating systems, I not only helped others succeed, but also strengthened my grasp of complex material.
          I'm excited to bring my passion for building reliable, impactful software in a collaborative setting to a full-time engineering role.
        </BodyBox>
      </Section>

      <Section reverse = {true}>
        <HeadingWithImage image={courtright} heading="More About Me" />

        <BodyBox>
          Outside of academics, I enjoy exploring new worlds and lives through reading, video games, and shows.
          In the world I live in, I love to exercise, play chess, and spend time with friends and family.
          I don't go on hikes often enough, but I love walking through nature when I can.
          In everyday life, I care about compassion and ethics — one way this shows up is being vegan.
        </BodyBox>
      </Section>
    </>
  );
}

export default Home;