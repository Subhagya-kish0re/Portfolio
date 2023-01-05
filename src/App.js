import ReactLoading from "react-loading";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import "./App.css";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import AboutMe from "./AboutMe/AboutMe";
import Org from "./Organisations/Org";
import Projects from "./Projects/Projects";
import GetInTouch from "./GetInTouch/GetInTouch";
import Footer from "./Footer/Footer";
import Achievments from "./Achievments/achievements";
import { useEffect, useState } from "react";
import ScreenshotDialog from "./Atomic/Screenshot";

function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3670);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>
          <Header />
          <Intro />
          <LeftPanel />
          <RightPanel />
          <div className="mainContainer">
            <AboutMe />
            <Org />
            <Projects/>
            <Achievments />
            <GetInTouch />
            <Footer />
          </div>
          {/* {isScreenDialog ? <ScreenshotDialog handleDialogState={handleDialogState} state={isScreenDialog} projectName={dialogProjectName} /> : null} */}
        </div>
      ) : (
        <div className="loader">
          <ReactLoading type={"bars"} color={"aquamarine"} width={100} />
        </div>
      )}
    </div>
  );
}

export default App;
