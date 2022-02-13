import React from "react";
import AOS from "aos";
import "./Org.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "flex-start",
    color: "white",
    paddingLeft: "3rem",
  },
  indicator: {
    backgroundColor: "aquamarine",
    position: "absolute",
    left: 0,
  },
  Tab: {
    textTransform: "none",
    borderLeft: "0.16rem solid grey",
    "&:focus": {
      backgroundColor: "#112240",
      color: "aquamarine",
    },
    "&:hover": {
      color: "aquamarine",
    },
  },
  panel: {
    height: "25rem",
    width: "40rem",
  },
  desc: {
    color: "#8892b0",
    fontSize: "1rem",
  },
}));

export default function Org() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div data-aos="fade">
      <div id="workMain" className="orgCont">
        <h1 className="works AboutMeHeading WorkHeading">Where I've Worked</h1>
        <div className={classes.root}>
          <Tabs
            classes={{ indicator: classes.indicator }}
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab
              disableRipple
              className={classes.Tab}
              label="Ernst & Young"
              {...a11yProps(0)}
            />
            <Tab
              disableRipple
              className={classes.Tab}
              label="Mvaro"
              {...a11yProps(1)}
            />
            <Tab
              disableRipple
              className={classes.Tab}
              label="The Grip Foundation"
              {...a11yProps(2)}
            />
          </Tabs>
          <TabPanel className={classes.panel} value={value} index={0}>
            <div>
              <Typography variant="h5" color="initial">
                WAM Developer (Intern)
                <span className="greenText"> @ E&Y India.</span>
              </Typography>
              <Typography variant="body2" color="initial">
                January 2022 - Present
              </Typography>
              <ul className="skillUl">
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Worked with a team of Java developers
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Working on Java Devlopment project with Java,Sql,JDBC
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Here i got to learn about Full Stack Java Devlopment in very deep understanding and how to create a industry level project.
                  </Typography>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className={classes.panel} value={value} index={1}>
            <div>
              <Typography variant="h5" color="initial">
                Data Science & Machine Learning Intern 
                <span className="greenText"> @Mvaro</span>
              </Typography>
              <Typography variant="body2" color="initial">
                June - July 2021
              </Typography>
              <ul className="skillUl">
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Worked with a very supportive team on Machine Learning, Data
                    Science, python libraries.
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Have done Data processing, Data cleaning & Data Analysis on the given Dataset
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Created a machine learning model for internal working of the
                    company.
                  </Typography>
                </li>
                <li>
                  <Typography
                    className={classes.desc}
                    variant="caption"
                    color="initial"
                  >
                    Completed my Project with 79% accuracy
                    {/* Created front end of the application with ReactJs and
                    Material UI and connected the ML model with flask and java
                    backend and made it fully functional app. */}
                  </Typography>
                </li>
              </ul>
            </div>
          </TabPanel>
          
        </div>
      </div>
    </div>
  );
}
