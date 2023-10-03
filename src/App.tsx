import "./App.css";

import karlOpera from "./assets/karlOperaen.jpg";
import karlHeadshot from "./assets/karlHeadshot.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <div className="mainContent">
        <div className="textSection">
          <h1>Karl Hanseth</h1>
          <h3>Technical Director</h3>
          <p>
            Experienced leader with strong change and innovation expertise from
            various industries. Proficient in strategy, organizational
            understanding, and sustainability. Operational and
            relationship-oriented approach in my leadership style while also
            enjoying working in a goal-oriented, decisive, and proactive manner.
          </p>
          <h4>Diverse leadership experience from: </h4>
          <p>The Norwegian Opera & Ballet </p>
          <p>Riksteatret - National touring theater </p>
          <p>Microsoft </p>
          <p>Scandinavian Airlines System </p>
          <p>Norwegian Armed Forces</p>
          <h4>Contact: </h4>
          <div className="contact">
            <p>
              <EmailIcon></EmailIcon>karlhanseth@gmail.com
            </p>
            <p>
              <PhoneIphoneIcon></PhoneIphoneIcon>91 91 73 76
            </p>
            <p>
              <HomeIcon></HomeIcon> Jacob Aalls gate 31a 0364 Oslo
            </p>
            <p>
              <CorporateFareIcon></CorporateFareIcon>orgnr 932 068 397
            </p>
          </div>
          <div className="buttonSection"></div>
          <Stack direction="row" spacing={2}>
            {
              <Button
                variant="outlined"
                href="CV Karl Hanseth.pdf"
                target="_blank"
              >
                Resume <DownloadIcon></DownloadIcon>
              </Button>
            }
            <Button
              variant="outlined"
              href="https://www.linkedin.com/in/karl-hanseth-0285264/"
              target="_blank"
            >
              LinkedIn<LinkedInIcon></LinkedInIcon>
            </Button>
          </Stack>
        </div>

        <div className="pictureSection">
          <img src={karlHeadshot} className="karlHeadshot"></img>
          <img src={karlOpera} className="karlOpera"></img>
        </div>
      </div>
    </Box>
  );
}

export default App;
