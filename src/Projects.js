import { useState } from "react";
import { HeadingWithImageAndCredit, BodyBox, HeadingWithImage, Heading, Section, ToggleButton } from "./Components";
import postgresLogo from "./images/Logo_PostgreSQL.png";
import processor from "./images/Intel_pentium4_1.5ghz_willamette_socek423.jpg"
import planner from "./images/Personal_organizer_with_metallic_ring_binder.jpg"
import contextAwareVersionControl from "./images/resized-file.png"
import pantryPal from "./images/pantryPalLogin.png"
import quickToDo from "./images/quick-to-do.png"
import simpleChess from "./images/SimpleChess.png"
import carlsen from "./images/CarlsenTataSteel.jpg"
import layers from "./images/NetworkLayers.png"
import osRole from "./images/OSRole.png"
import MoreProjects from "./MoreProjects";


function Projects() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  return (
    <>
      <div class="filler"></div>

      <Section>
        <Heading heading="Projects" h1={true} />
      </Section>

      <Section reverse={true}>
        {HeadingWithImage({
          href: "https://github.com/autecht/contextawareversioncontrol",
          image: contextAwareVersionControl,
          heading: "Context-Aware Version Control",
        })}

        <BodyBox>
          Context-Aware Version Control started as a project for a Human-Computer Interaction class to showcase information entities and spaces.
          Informed by previous research and prototypes, my partner and I designed an application on top of version control to allow users to easily understand navigate repositories based on the context of their actions.

          <br></br><br></br>
          With a top grade in the class, we decided to redesign and implement the application as independent study with Professor Hollan.
          We created an extension to VS Code in Typescript, integrating Git shell commands to retrieve repository data and enable interactive exploration of commit history.
          Starting with our orignal design, we displayed previous, interactive commits based on relevance metrics as well as the lines deemed most relevant.
          We included a hover provider to allow the user to see the commit responsible for each line and view and interact with the individual commit.
          With the VS Code WebView API, we designed a fully customized visualization of the relevance of commits responsible for each line in a file.
          <br></br><br></br>
          After the end of the quarter, I added a comment section to each commit, using a local PostgreSQL backend to store comments and adding clear documentation to allow users to set up the database.

        </BodyBox>
      </Section>

      <Section>
        <HeadingWithImage image={pantryPal} heading="pantryPal" href="https://github.com/ucsd-cse110-fa23/cse-110-project-team-24" />

        <BodyBox>
          My group created a Java application to generate and store unique recipes given certain ingredients.
          We used JavaFX to implement a responsive user interface, the ChatGPT API to generate unique recipes,
          the Whisper API to recognize voice input, and MongoDB to store user recipes on the cloud. We created an
          HTTP server to separate backend logic.
          <br /><br />
          Throughout the project, we followed an Agile Development process. We created user stories from End-to-End scenarios, strove to eliminate ambiguity,
          wrote BDD scenarios for each user stories, separated user stories into tasks, made time estimates for tasks and user stories,
          accounted for velocity,
          planned iterations and Milestones, and tested features with unit and story tests. We also designed and refactored our
          code to follow Object-Oriented principles and design patterns, including the single responsibility principle, the Strategy Pattern, and the Model-View-Presenter pattern.

        </BodyBox>
      </Section>


      <Section reverse={true}>
        {HeadingWithImageAndCredit({
          heading: "Mock University Database",
          image: postgresLogo,
          creditName: "Daniel Lundin",
          creditLicense: "BSD",
          creditUrl: "https://commons.wikimedia.org/wiki/File:Logo_PostgreSQL.png",
          creditLicenseUrl: "http://opensource.org/licenses/bsd-license.php"

        })}

        <BodyBox>
          I worked with a partner to design and implement a university database, then efficiently access it on a webpage.
          We implemented the database using PostgreSQL and used the PostgreSQL JDBC Driver to access it.
          We built our dynamic website to access, update, insert, and delete all data in the database with Java Server Pages on and Apache Tomcat server.
          <br /> <br />
          Following project specifications, my partner and I modeled the database with an entity-relationahip diagram, which we transferred to a relational database schema.
          We created webpages allow the user to view and update data about courses, classes, faculty, departments, students, scholarships, and their relationships.
          After implementing these entry forms, we designed forms to allow users to view more complex data about individual students, professors, and courses using parameterized queries.
          To efficiently run some of these queries, we created triggers to maintain materialized views. We also used triggers to enforce constraints on data.

        </BodyBox>
      </Section>

      <Section reverse={false}>
        <HeadingWithImageAndCredit
          heading="Fine-Tuned Chess Transformer"
          image={carlsen}
          alt="Magnus Carlsen playing chess"
          credicName="Vysotsky"
          creditUrl="https://commons.wikimedia.org/wiki/File:TataSteelChess2018-33.jpg"
          creditLicense="CC BY-SA 4.0"
          creditLicenseUrl="https://creativecommons.org/licenses/by-sa/4.0"
        />

        <BodyBox>
          As the final project for a Deep Learning class, my team fine-tuned a pretrained PyTorch chess transformers using Magnus Carlsen’s games to improve win rate against Stockfish Level 6 by 11%.
          <br /><br />
          Since we were using a model trained using entire chess games, the most difficult part of this project was preprocessing the data to isolate Carlsen’s moves.
          Once I understood the preprocessing code of the repository we were using, I modified the code to parse PGN files of Carlsen's games and encode only positions where it was Carlsen's move into an H5 file.
          <br /><br />
          Otherwise, this project helped me to understand existing repositories based on documentation and the code itself.
        </BodyBox>
      </Section>



      {showMoreProjects && <MoreProjects />}
      <ToggleButton onClick={() => setShowMoreProjects(!showMoreProjects)} text={showMoreProjects ? "View Fewer Projects" : "View More Projects"}></ToggleButton>
      <div class="filler"></div>
    </>
  );

}

export default Projects;