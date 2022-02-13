import "./Footer.css";
var Footer = () => {
  var color = () => {
    var [icon] = document.getElementsByClassName("MergeIcon");
    icon.style.filter = "grayscale(0%)";
  };
  var decolor = () => {
    var [icon] = document.getElementsByClassName("MergeIcon");
    icon.style.filter = "grayscale(100%)";
  };
  return (
    <div
      onMouseLeave={decolor}
      onMouseEnter={color}
      className="Footer FooterText"
    >
      <a
        className="noUnderLine"
        href="https://github.com/Acexhat/portfolio-revise"
        target="_blank"
      >
        <p className="FooterText bottomlink">
          Subhagya Kishore
        </p>
        <img className="MergeIcon" src={process.env.PUBLIC_URL + "merge.svg"} />
      </a>
    </div>
  );
};
export default Footer;
