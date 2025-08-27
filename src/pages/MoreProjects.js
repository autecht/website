import BodyBox from "../components/BodyBox";
import Heading from "../components/Heading";
import Section from "../components/Section";import processor from "../images/Intel_pentium4_1.5ghz_willamette_socek423.jpg"
import planner from "../images/Personal_organizer_with_metallic_ring_binder.jpg"
import quickToDo from "../images/quick-to-do.png"
import simpleChess from "../images/SimpleChess.png"
import layers from "../images/NetworkLayers.png"
import osRole from "../images/OSRole.png"




function MoreProjects() {
  return (
    <>
      <Section reverse={true}>
        <Heading image={quickToDo} heading="Quick To-Do" alt="A screenshot of Quick To-Do" href="//github.com/autecht/quick-to-do" />

        <BodyBox>
          Quick To-Do is a command-line task manager designed to be simple to use while providing the user easy-to-understand and
          optional features to organize and display tasks. Users can add, list, modify, and remove tasks with a label. They can optionally
          add a due date and time, priority level, description, and tag to each task to modify how tasks are displayed, sorted, and found. Detailed
          feedback and documentation for all options can be found within
          the application or on GitHub.
          <br /><br />
          I learned the picocli library to implement command-line functionality and provide feedback. I used GraalVM to compile the
          application into a stand-alone executable. To follow convention and use picocli, I researched and used the structure of typical
          command-line applications. In order to read data from local files to be represented as objects, I created a custom wrapper class.
        </BodyBox>
      </Section>


      <Section>
        <Heading
          heading="Nachos Operating System Extension"
          image={osRole}
          alt="A diagram showing the role of the operating system"
          creditName="Amila Ruwan 20"
          creditUrl="https://commons.wikimedia.org/wiki/File:Role_of_the_pc_operating_system.png"
          creditLicense="CC BY-SA 4.0"
          creditLicenseUrl="https://creativecommons.org/licenses/by-sa/4.0"
        />

        <BodyBox>
          I worked with two partners to extend the Nachos instructional operating system in Java on a remote Unix machine.
          Over the course of a courter, we implemented synchronization primitives to allow threads to run concurrently,
          system calls and an abstracted virtual memory using the file system so that processes could use arbitrarily many pages,
          and demand paging to optimize memory usage and capacity under load.
          <br /><br />
          This was project was an excellent opportunity to solidify the concepts introduced in my Operating Systems class.
          More than that, I learned to investigate and understand a large codebase and discuss concepts and implementation details unfamiliar to me with my partners.
        </BodyBox>
      </Section>

      <Section reverse={true}>

        <Heading
          heading="Computer Systems Messages"
          image={layers}
          alt="A diagram of the OSI and TCP/IP network models"
          creditName="Dave Braunschweig"
          creditUrl="https://commons.wikimedia.org/wiki/File:Internet_Protocol_Analysis.png"
          creditLicense="CC BY-SA 3.0"
          creditLicenseUrl="https://creativecommons.org/licenses/by-sa/3.0"
        />

        <BodyBox>
          In my Computer Systems class, I wrote essential logic in C in a containerized Unix environment to allow hosts to send messages to each other.
          First, I implemented network-layer functionality to allow hosts to send, receive, and combine packets -- this involved using the Sliding Window Protocol and then adding AIMD, Slow Start, Fast Retransmission, and Fast Recovery to improve throughput and avoid congestion.
          Later, I created IP routers to parse, appropriately modify, and forward packets between hosts on different networks.
          This included logic for ARP requests and replies and ICMP packets to notify hosts of adverse conditions.
          <br /><br />
          Aside from solidifying my understanding of computer systems concepts, I learned to work in a Docker environment. Due to the difficulty of identifying bugs inn a distributed system, I also learned to methodically test and debug code in a complex codebase.
        </BodyBox>
      </Section>


      <Section reverse={false}>
        {Heading({
          image: processor,
          heading: "Custom Processor",
          alt: "A computer processor",
        })}

        <BodyBox>

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

        </BodyBox>
      </Section>



      <Section reverse={true}>
        {Heading({
          heading: "Enhancing Digital Planner Design",
          image: planner,
          alt: "A personal planner with a metallic ring binder",
          creditName: "Old Photo Profile",
          creditUrl: "https://commons.wikimedia.org/wiki/File:Personal_organizer_with_metallic_ring_binder.jpg",
          creditLicense: "CC BY 2.0",
          creditLicenseUrl: "https://creativecommons.org/licenses/by/2.0"
        }
        )

        }
        <BodyBox>
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

        </BodyBox>
      </Section>



      <Section reverse={false}>
        <Heading image={simpleChess} heading="Simple Chess" alt="chess board" href="https://github.com/autecht/simple-chess" />

        <BodyBox>

          Simple Chess is an interface with which users can manipulate chess pieces on a board. It an HTML website with CSS
          and JavaScript. The site features original SVG piece models and uses HTML text validation to validate usernames. I created this website to solidify what I learned from an online front-end course.

        </BodyBox>
      </Section>
    </>
  );

}

export default MoreProjects;