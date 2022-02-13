import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./LeftPanel.css";
var LeftPanel = () => {
  var iconClicked = (event) => {};
  return (
    <div className="leftCont">
      <div className="iconsCont">
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://github.com/Subhagya-kish0re"
          target="_blank"
        >
          <GitHubIcon />
        </a>
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://www.linkedin.com/in/subhagya-kishore-a096111b4/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://www.hackerrank.com/ace_xhat"
          target="_blank"
        >
          <img
            className="hackerrank"
            src={process.env.PUBLIC_URL + "/HackerRank_logo.svg"}
          />
        </a>
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://leetcode.com/bhaskar20inn/"
          target="_blank"
        >
          <img
           style={{
            height: "2rem",
            width: "2rem",
          }}
            src={process.env.PUBLIC_URL + "/leetcode_logo.svg"}
          />
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default LeftPanel;
