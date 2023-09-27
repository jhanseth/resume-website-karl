import "./App.css";

import karlOpera from "./assets/karlOperaen.jpg";
import karlHeadshot from "./assets/karlHeadshot.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
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
            Experienced leader and technical director with strong change and
            innovation expertise from various industries. Proficient in
            strategy, organizational understanding, and sustainability.
            Operational and relationship-oriented approach in my leadership
            style while also enjoying working in a goal-oriented, decisive, and
            proactive manner.
          </p>
          <h4>Diverse leadership experience from: </h4>
          <p>The Norwegian Opera and Ballet </p>
          <p>Riksteatret</p>
          <p>Microsoft </p>
          <p>Scandinavian Airlines </p>
          <p>Norwegian Armed Forces</p>

          <div className="buttonSection"></div>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              href="CV Karl Hanseth.pdf"
              target="_blank"
            >
              Resume <DownloadIcon></DownloadIcon>
            </Button>
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
