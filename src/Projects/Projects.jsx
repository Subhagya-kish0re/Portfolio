import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "./Project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import ProjectTilesLeft from "./ProjectTile";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ImageIcon from "@material-ui/icons/Image";
import ScreenshotDialog from "../Atomic/Screenshot";
import ErrorDialog from "../Atomic/gitError";
let Projects = (props) => {
  const [isScreenDialog, setScreenDialog] = useState(false);
  const [dialogProjectName, setDialogProjectName] = useState(false);
  const [isErrorDialog, setIsErrorDialog] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  useEffect(() => {
    console.log(isScreenDialog);
  }, [isScreenDialog]);
  var imageSlider = (event) => {
    console.log("Hello");
  };
  var noGit = () => {
    alert("Not an open source project ");
  };
  const handleDialogState = (state, projectName) => {
    setScreenDialog(state);
    setDialogProjectName(projectName);
  };

  const handleErrorDialog = (state) => {
    setIsErrorDialog(state);
  };

  return (
    <div id="projectMain" className="sectionHeading">
      <h1 className="works AboutMeHeading WorkHeading">
        Some Things I've Built
      </h1>
      <div data-aos="fade">
        <div className="Projectcard1">
          <img
            style={{ height: "17rem" }}
            onMouseEnter={imageSlider}
            className="scraperImage"
            src={process.env.PUBLIC_URL + "ggm1.png"}
          />
          <div className="ProjectDescBlock1">
            <p className="greenText FeaturedProjects">Featured Project</p>
            <h2 className="ProjectName">
              <b>Verzeo Project</b>
            </h2>
            <div className="ProjectDesc">
              <p className="descproject">
                {/* This is a Full Stack Social media platform based upon
                decentralised concept where user can buy/sell and showcase their
                NFTs. Created the user Registration and Main Screens of the
                product. */}
                We will develop a model using Support Vector Machine which 
                should correctly classify the handwritten digits from 0-9 based 
                on the pixel values given as features.
              </p>
            </div>
            <p className="FrameWorks">
              Python DataScience ML-Model Jupyter-Notebook
            </p>
            <a onClick={() => handleErrorDialog(true)} className="icons">
              <GitHubIcon />
            </a>
            <div
              onClick={() => handleDialogState(true, "GLAMGRAM")}
              className="icons"
            >
              <ImageIcon />
            </div>
          </div>
          <div className="ProjectImageCover1" onMouseEnter={imageSlider}></div>
        </div>
      </div>
      <div data-aos="fade">
        <div className="Projectcard2">
          <img
            style={{
              height: "16.9rem",
            }}
            onMouseEnter={imageSlider}
            className="scraperImage"
            src={process.env.PUBLIC_URL + "callBoard.png"}
          />
          <div className="ProjectDescBlock2">
            <p className="greenText FeaturedProjects">Featured Project</p>
            <h2 className="ProjectName">
              <b>Mvaro Project</b>
            </h2>
            <div className="ProjectDesc">
              <p className="descproject">
              The objective of the dataset is to diagnostically predict 
              whether or not a patient has diabetes, based on certain 
              diagnostic measurements
              </p>
            </div>
            <p className="FrameWorks">
            Python DataScience ML-Model Jupyter-Notebook
            </p>
            <a
              href="https://github.com/Acexhat/callwork_Dashboard"
              target="_blank"
              className="icons"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://callboard.herokuapp.com/"
              target="_blank"
              className="icons"
            >
              <LanguageIcon />
            </a>
          </div>
          <div className="ProjectImageCover2" onMouseEnter={imageSlider}></div>
        </div>
      </div>
      <div data-aos="fade">
        <div className="Projectcard1">
          <img
            onMouseEnter={imageSlider}
            className="scraperImage"
            src={process.env.PUBLIC_URL + "delivery.png"}
          />
          <div className="ProjectDescBlock1">
            <p className="greenText FeaturedProjects">Featured Project</p>
            <h2 className="ProjectName">
              <b>Food Delivery Web-Page</b>
            </h2>
            <div className="ProjectDesc">
              <p className="descproject">
                This is a Online Food Delivery Website.This is 
                Single Face Interface.
              </p>
            </div>
            <p className="FrameWorks">HTML CSS JavaScript</p>
            <a onClick={() => handleErrorDialog(true)} className="icons">
              <GitHubIcon />
            </a>
          </div>
          <div className="ProjectImageCover1" onMouseEnter={imageSlider}></div>
        </div>
      </div>
      <div data-aos="fade">
        <div className="Projectcard2">
          <img
            onMouseEnter={imageSlider}
            className="scraperImage"
            style={{
              height: "17rem",
            }}
            src={process.env.PUBLIC_URL + "todo.jpg"}
          />
          <div className="ProjectDescBlock2">
            <p className="greenText FeaturedProjects">Featured Project</p>
            <h2 className="ProjectName">
              <b>Iris Detection System</b>
            </h2>
            <div className="ProjectDesc">
              <p className="descproject">
               
              </p>
            </div>
            <p className="FrameWorks">
              Python DataScience Jupyter-Notebook
            </p>
            <a
              href="https://github.com/Acexhat/ToDoApp"
              target="_blank"
              className="icons"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://drive.google.com/file/d/19TqWv2NRNF_UX-MesrSchfGo34TCdt9j/view?usp=sharing"
              target="_blank"
              className="icons"
            >
              <PhoneAndroidIcon />
            </a>
          </div>
          <div className="ProjectImageCover2" onMouseEnter={imageSlider}></div>
        </div>
      </div>
      {/* <div data-aos="fade">
        <div className="Projectcard1">
          <img
            style={{ height: "17rem" }}
            onMouseEnter={imageSlider}
            className="scraperImage"
            src={process.env.PUBLIC_URL + "screenshots/ss1.png"}
          />
          <div className="ProjectDescBlock1">
            <p className="greenText FeaturedProjects">Featured Project</p>
            <h2 className="ProjectName">
              <b>Amazon Clone Minor</b>
            </h2>
            <div className="ProjectDesc">
              <p className="descproject">
                This is a clone of Amazon created in a group as minor project. I
                have handled the whole frontend Part.
              </p>
            </div>
            <p className="FrameWorks">
              ReactJs Javascript NodeJS/ExpressJS MYSQL
            </p>
            <a
              href="https://github.com/Acexhat/minorProject"
              target="_blank"
              className="icons"
              className="icons"
            >
              <GitHubIcon />
            </a>
            <div
              onClick={() => handleDialogState(true, "AMAZON")}
              className="icons"
            >
              <ImageIcon />
            </div>
          </div>
          <div className="ProjectImageCover1" onMouseEnter={imageSlider}></div>
        </div>
      </div> */}
      {isScreenDialog ? (
        <ScreenshotDialog
          state={isScreenDialog}
          dialogProjectName={dialogProjectName}
          handleDialogState={handleDialogState}
        />
      ) : null}
      {isErrorDialog ? (
        <ErrorDialog
          state={isErrorDialog}
          handleErrorDialog={handleErrorDialog}
        />
      ) : null}
    </div>
  );
};
export default Projects;
