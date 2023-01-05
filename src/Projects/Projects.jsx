import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "./Project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import ss2 from "../assets/public/screenshots/ss2.png";
import ProjectTilesLeft from "./ProjectTile";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ImageIcon from "@material-ui/icons/Image";
import ScreenshotDialog from "../Atomic/Screenshot";
import ErrorDialog from "../Atomic/gitError";
let Projects = (props) => {
  const [isScreenDialog, setScreenDialog] = useState(false);
  const [dialogProjectName, setDialogProjectName] = useState('');
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
            src={process.env.PUBLIC_URL + "cal p1.jpeg"}
          />
          <div className="ProjectDescBlock1">
            <p className="greenText FeaturedProjects">Featured Project</p>
            <h2 className="ProjectName">
              <b>  Calculator (Mobile Application)</b>
            </h2>
            <div className="ProjectDesc">
              <p className="descproject">
                
              This is basically a Calculator made using React Native, all the arthmetic operations can be done using this app.
              </p>
            </div>
            <p className="FrameWorks">
              React-Native React Node
            </p>
            <a
              href="https://github.com/Subhagya-kish0re/calculator-react-native"
              target="_blank"
              className="icons"
            >
              <GitHubIcon />
            </a>
            <div
              onClick={() => handleDialogState(true, "Calculator")}
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
            src={process.env.PUBLIC_URL + "ey1.png"}
          />
          <div className="ProjectDescBlock2">
            <p className="greenText FeaturedProjects">Featured Project</p>
            <h2 className="ProjectName">
              <b>Ey Carrer Page</b>
            </h2>
            <div className="ProjectDesc">
              <p className="descproject">
              This web page developed in AngularJs,BootStrap. This Page designed for user to choose their carrer of their perfect match, same page is being used in  <a href="https://www.ey.com/en_gl/careers">EY Carrer Page</a> 
              </p>
            </div>
            <p className="FrameWorks">
            Angular HTML CSS BootStrap
            </p>
            <a
              href="https://github.com/Subhagya-kish0re/EY-carrer_page"
              target="_blank"
              className="icons"
            >
              <GitHubIcon />
            </a>
            
            <div
              onClick={() => handleDialogState(true, "Carrerpage")}
              className="icons"
            >
              <ImageIcon />
            </div>
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
            <a
              href="https://github.com/Subhagya-kish0re/food-delivery-site-"
              target="_blank"
              className="icons"
            >
              <GitHubIcon />
            </a>
            <div
              onClick={() => handleDialogState(true, "Delivery")}
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
            onMouseEnter={imageSlider}
            className="scraperImage"
            style={{
              height: "17rem",
            }}
            src={process.env.PUBLIC_URL + ss2}
          />
          <div className="ProjectDescBlock2">
            <p className="greenText FeaturedProjects">Featured Project</p>
            <h2 className="ProjectName">
              <b>Stock Screener</b>
            </h2>
            <div className="ProjectDesc">
              <p className="descproject">
               Stock Screener is a tool that allows investors and traders to sort through thousands of individual
securities to find those that fit their own methodologies. It can deliver alerts if certain user-defined parameters
have been met, drawing investor attention to key buying or selling. 
              </p>
            </div>
            <p className="FrameWorks">
              Angular Spring-Boot SQL Microservices BootStrap Material-UI
            </p>
            <a
              href="https://github.com/Subhagya-kish0re/Stock_Screener_EY"
              target="_blank"
              className="icons"
            >
              <GitHubIcon />
            </a>
            
            <div
              onClick={() => handleDialogState(true, "IRIS")}
              className="icons"
            >
              <ImageIcon />
            </div>
          </div>
          <div className="ProjectImageCover2" onMouseEnter={imageSlider}></div>
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
            Python Data cience ML-Model Jupyter-Notebook
            </p>
            <a
              href="https://github.com/Subhagya-kish0re/MLmodel-Diabetes-prediction_dataset"
              target="_blank"
              className="icons"
            >
              <GitHubIcon />
            </a>
            
            <div
              onClick={() => handleDialogState(true, "Diabeties")}
              className="icons"
            >
              <ImageIcon />
            </div>
          </div>
          <div className="ProjectImageCover2" onMouseEnter={imageSlider}></div>
        </div>
      </div>
      
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
