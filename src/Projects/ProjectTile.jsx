import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./Project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
const ProjectTiles = (props) => {
  return (
    <div data-aos="fade">
      <div className={"Projectcard2"}>
        <img
          onMouseEnter={props.imageSlider}
          className="scraperImage"
          src={props.imgSrc}
        />
        <div className={props.ProjectDesc}>
          <p className="greenText FeaturedProjects">Featured Project</p>
          <h2 className="ProjectName">
            <b>{props.title}</b>
          </h2>
          <div className="ProjectDesc">
            <p className="descproject">{props.discription}</p>
          </div>
          <p className="FrameWorks">{props.frameworks}</p>
          <a href={props.gitHubLink} target="_blank" className="icons">
            <GitHubIcon />
          </a>
        </div>
        <div
          className="ProjectImageCover1"
          onMouseEnter={props.imageSlider}
        ></div>
      </div>
    </div>
  );
};
export default ProjectTiles;
