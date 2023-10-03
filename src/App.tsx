import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import karlOpera from "./assets/karlOperaen.jpg";
import karlHeadshot from "./assets/karlHeadshot.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import HomeIcon from "@mui/icons-material/Home";

import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="mainContent">
      <div className="textSection">
        <img src={karlHeadshot} className="karlHeadshot"></img>
        <h1>Karl Hanseth</h1>
        <h4>Technical Director</h4>
        <p>
          Experienced leader with strong change and innovation expertise from
          various industries. Proficient in strategy, organizational
          understanding, and sustainability. Operational and
          relationship-oriented approach in my leadership style while also
          enjoying working in a goal-oriented, decisive, and proactive manner.
        </p>
        <div className="experienceSection">
          <h5>Diverse leadership experience from: </h5>
          <p>The Norwegian Opera & Ballet </p>
          <p>Riksteatret - National touring theater </p>
          <p>Microsoft </p>
          <p>Scandinavian Airlines System </p>
          <p>Norwegian Armed Forces</p>
        </div>
        <h5>Contact: </h5>
        <div className="contact">
          <p>
            <EmailIcon></EmailIcon>karlhanseth@gmail.com
          </p>
          <p>
            <PhoneIphoneIcon></PhoneIphoneIcon>+47 91 91 73 76
          </p>
          <p>
            <HomeIcon></HomeIcon>Jacob Aalls gate 31a 0364 Oslo
          </p>
          <p>
            <CorporateFareIcon></CorporateFareIcon>orgnr 932 068 397
          </p>
        </div>

        <div className="buttonRow">
          <Button variant="dark" href="CV Karl Hanseth.pdf">
            Resume<DownloadIcon></DownloadIcon>
          </Button>{" "}
          <Button
            variant="dark"
            href="https://www.linkedin.com/in/karl-hanseth-0285264/"
          >
            Linkedin<LinkedInIcon></LinkedInIcon>
          </Button>
        </div>
      </div>

      <img src={karlOpera} className="karlOpera"></img>
    </div>
  );
}

export default App;
