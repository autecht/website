import { Section, Heading, BodyBox } from "./Components";

function Contact() {
  return (<>

    <div class="filler"></div>
    <Section>
      <Heading h1={true} heading="Get In Touch" />
      

      <BodyBox>
          I'd love to talk! The best way to contact me is through my email: <a href="mailto: autecht@ucsd.edu"> autecht@ucsd.edu</a>.
        </BodyBox>
    </Section>
  </>);
}

export default Contact;