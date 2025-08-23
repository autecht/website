import graduation from './images/graduation.JPEG'
import computer_science from './images/Computer_Science_and_Engineering.jpg'


export function ImageCredit(name, url, license, licenseUrl) {
  return (
    <p class="name no-spacing">Credit: <a href={url}>{name}</a>, <a href={licenseUrl}>{license}</a> </p>
  );
}

export function Heading ({ heading, h1=false }) {
  return <div class="rounded-box heading-box">
    {h1? <h1 class="heading">{heading}</h1> :  <h2 class="heading">{heading}</h2>}
  </div>
}
export function HeadingWithImage({ heading, image, alt = "", h1= false}) {
  return <div class="rounded-box heading-box">

    <img class="about-image" alt={alt} src={image}></img>
    {h1? <h1 class="heading">{heading}</h1> :  <h2 class="heading">{heading}</h2>}

  </div>
}

export function HeadingWithImageAndCredit({ heading, image, alt = "", creditName, creditUrl, creditLicense, creditLicenseUrl }) {
  return <div class="rounded-box heading-box">
          <img class="about-image" alt="" src={image}></img>
          {ImageCredit(creditName, creditUrl, creditLicense, creditLicenseUrl)}
          <h2 class="heading">{heading}</h2>
        </div>
}

export function BodyBox({ children }) {
  return <div class="rounded-box body-box">
            <p class="body">
            {children}
            </p>
        </div>
}

function Home() {
  return (
    <>
      <div class="filler"></div>

      <div class="section">
        {HeadingWithImage({ heading: "About", image: graduation, h1: true })}
      </div>




      <div class="section">
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
        </div>




      <div class="section reverse">
        <Heading heading = "More About Me"/>


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