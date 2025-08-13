function Projects() {
  return (
    <>


      <div class="filler"></div>
      <h1 class="heading">Projects</h1>

      <h2 class="heading"> <a href="https://github.com/autecht/contextawareversioncontrol"> Context-Aware Version Control </a> </h2>
      <p class="body">
        This project was originally intended to be a design project showcasing information spaces and entities. 
        Informed by previous research and prototypes, we designed an application on top of version control to allow users to easily understand navigate repositories based on the context of their actions.

        <br></br><br></br>
        With a top grade in the class, we decided to redesign and implement the application as independent study with Professor Hollan.
        We created an extension to VSCode in Typescript, integrating Git shell commands to retrieve repository data and enable interactive exploration of commit history.
        Starting with our orignal design, we displayed previous, interactive commits based on relevance metrics as well as the lines deemed most relevant. 
        We included a hover provider to allow the user to see the commit responsible for each line and view and interact with the individual commit.
        With the VS Code WebView API, we designed a fully customized visualization of the relevance of commits responsible for each line in a file.
        <br></br><br></br>
        After the end of the quarter, I added a comment section to each commit, using a local PostgreSQL backend to store comments and adding clear documentation to allow users to set up the database.


      </p>


      <h2 class="heading"> Mock University Database </h2>
      <p class="body">
        I worked with a partner to design and implement a university database, then efficiently access it on a webpage.
        We implemented the database using PostreSQL and used the PostreSQL JDBC Driver to access it.
        We built our dynamic website to access, update, insert, and delete all data in the database with Java Server Pages on and Apache Tomcat server.
        <br /> <br />
        Following project specifications, my partner and I modeled the database with an entity-relationahip diagram, which we transferred to a relational database schema.
        We created webpages allow the user to view and update data about courses, classes, faculty, departments, students, scholarships, and their relationships.
        After implementing these entry forms, we designed forms to allow users to view more complex data about individual students, professors, and courses using parameterized queries.
        To efficiently run some of these queries, we created triggers to maintain materialized views. We also used triggers to enforce constraints on data.

      </p>
      <h2 class="heading">Custom Processor </h2>
      <p class="body">
        I used System Verilog to design a synthesizeable computer processor adhering to constraints and capable of carrying out three programs.
        The processor accepted fixed-length 9-bit machine code and had a byte-wide data path, byte-wide registers, and byte-wide memory locations.
        The ALU could only accept operations comparable in complexity to addition.
        It was able calculate and compare the hamming distance, arithmetic difference, and product of combinations of 32 signed 16-bit numbers.
        <br /><br />
        With the 3 programs and constraints in mind, I designed an initial ISA for the processor.
        I wrote syntehsizeable System Verilog code to implement a processor that could carry out this ISA and created an initial testbench
        for the processor.
        Using Java, I coded an assembler for the ISA. In the final Milestone, I wrote the assembly for each program and
        tested and debugged the processor and each program using ModelSim.
      </p>
      <h2 class="heading"> <a href="https://github.com/ucsd-cse110-fa23/cse-110-project-team-24">pantryPal</a></h2>
      <p class="body">
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


      </p>
      <h2 class="heading"> <a href="https://github.com/autecht/-quick-to-do">Quick To-Do</a></h2>
      <p class="body">
        Quick To-Do is a command-line task manager designed to be simple to use while providing the user easy-to-understand and
        optional features to organize and display tasks. Users can add, list, modify, and remove tasks with a label. They can optionally
        add a due date and time, priority level, description, and tag to each task to modify how tasks are displayed, sorted, and found. Detailed
        feedback and documentation for all options can be found within
        the application or on GitHub.
        <br /><br />
        I learned the picocli library to implement command-line functionality and provide feedback. I used GraalVM to compile the
        application into a stand-alone executable. To follow convention and use picocli, I researched and used the structure of typical
        command-line applications. In order to read data from local files to be represented as objects, I created a custom wrapper class.
      </p>


      <h2 class="heading">Enhancing Digital Planner Design</h2>
      <p class="body">
        As part of a Human-Computer Interaction class, three group members and I conducted a study
        to analyze university students' preference and use of physical and digital planners. We concluded university students largely use digital
        planners to for their functional convenience and physical planners for their emotional connection, frequently creating a system with both a physical and
        digital planner to combine these benefits.

        <br /><br />
        Once our project proposal, which included a plan for conducting the rest of the project and a specific goal, was accepted,
        we constructed a survey with qualitative and quantitative questions to gain insight into reasons behind university students' planner use.
        We also designed an interview outline and conducted 25-minute interviews with volunteers. We identified broad categories with which to observe trends
        in qualitative responses. Considering quantitative responses, qualitative trends, and qualitative responses, we identified prominent tools used as physical and digital planners, factors influencing planner choice, aspects students
        appreciated, problems encountered, potential design improvements, and situational preferences in
        a report with an abstract, an introduction, related work, methods, discussion, and a conclusion.

      </p>



      <h2 class="heading"> <a href="https://github.com/autecht/simple-chess">Simple Chess</a></h2>
      <p class="body">

        Simple Chess is an interface with which users can manipulate chess pieces on a board. It an HTML website with CSS
        and JavaScript. The site features original SVG piece models and uses HTML text validation to validate usernames. I created this website to solidify what I learned from an online front-end course.

      </p>
    </>
  );

}

export default Projects;