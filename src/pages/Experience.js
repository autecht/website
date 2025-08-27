import { Section, Heading, BodyBox} from "../Components";

function Experience() {
  return (
    <>



      <Section>
        <Heading h1={true} heading="Experience" />
      </Section>

      <Section>
        <div class="rounded-box heading-box">
          <h2 class="heading">Tutor</h2>
          <div class="name">September 2023-June 2024 </div>
        </div>
        <BodyBox>
          As a tutor for Database System Principles and Operating Systems, two large upper division courses at UC San Diego, I helped 300+ students understand
          complex concepts and work through technical problems by leading office and lab hours.
          <br></br><br></br>
          I worked with Professors Deutsch and Vianu while tutoring for Database System Principles, helping students understand relational algebra, SQL, schema design, and database theory.
          I led biweekly/weekly office hours to help students debug complex SQL queries and understand course concepts and was active with detailed responses on the course forum.
          My interest in helping students led me to answer more Piazza questions than any other tutor in the course.
          <br></br><br></br>
          I worked with Professor Ousterhout while tutoring for Operating Systems, helping students understand concurrency, virtual memory, file systems, and other core operating systems concepts.
          During this last quarter, I held frequent lab hours to help students debug and understand their implementation of an educational operating system in Java.
          Every week, tutors met with the professor to discuss common issues and course decisions.
        </BodyBox>
      </Section>


      <Section reverse = {true}>
        <div className="rounded-box heading-box">
          <h2 className="heading">Student Worker</h2><div className="name">January 2023-November 2023 </div>
        </div>
        <div className="rounded-box body-box">
          <p>As a student worker at the UCSD dining hall, I worked with team in various roles to prepare food, wash dishes, provide pleasant customer service, and preserve smooth operation of the restaurant.
            I mostly worked as a food preparer, learning to efficiently and safely prepare food in an organized environment. During this time, I developed strong connections with my coworkers and learned to work well in a team.
          </p>
        </div>
      </Section>

      <Section>
        <div className="rounded-box heading-box">
          <h2 className="heading">Dishwasher/Delivery Driver</h2><div className="name">August 2021-September 2021 </div>
        </div>
        <BodyBox>
          My first job was at a local Italian restaurannt called DiCicco's the summer before college.
          I worked principally as a dishwasher and delivery driver, learning to work efficiently in a fast-paced environment and provide excellent customer service.
          At the time, the myriad miscellaneous tasks were unfamiliar to me, but I quickly learned and adapted to the environment.

        </BodyBox>
      </Section>


    </>
  );

}

export default Experience;