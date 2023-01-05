import "./Intro.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btn: {
    color: "aquamarine",
    border: "0.1rem solid aquamarine",
    padding: "0.9rem 2rem",
    borderRadius: 0,
  },
});
var Intro = () => {
  let email = "subhagyakishor18@gmail.com";
  const classes = useStyles();
  return (
    <div className="IntroContainer">
      <h4 className="hi">Hi, my name is,</h4>
      <h1 className="name">
        Subhagya.
        <span className="buildthings"> I am a devloper.</span>
      </h1>
      <h4 className="works">
        I'm an Professional Developer who has a passion for software engineering
        and specializes in building (and occasionally designing) exceptional
        digital experiences. Currently, I'm an Full Stack Developer at Ernst & Young
        focused on building accessible, human-centered Skills.
      </h4>
      <a className="headerLinks" href={`mailto: ${email}`}>
        <Button className={classes.btn} variant="outlined" size="large">
          Get In Touch
        </Button>
      </a>
    </div>
  );
};
export default Intro;
