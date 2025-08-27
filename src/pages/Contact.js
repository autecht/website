import Heading from "../components/Heading";
import BodyBox from "../components/BodyBox";


function Contact() {
  return (<>

      <div className = "section column">
      <Heading h1={true} heading="Get In Touch" />
      

      <BodyBox>
          I'd love to talk! The best way to contact me is through my email: <a href="mailto: autecht@ucsd.edu"> autecht@ucsd.edu</a>.
        </BodyBox>
      </div>
  
  </>);
}

export default Contact;