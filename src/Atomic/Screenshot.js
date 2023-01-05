import { makeStyles } from "@material-ui/core";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CancelIcon from '@mui/icons-material/Cancel';
import { IMAGES } from "./projectImage";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(({
    root: {

    },
    paper: {
        backgroundColor: "#0A192F !important",
        borderRadius: "2rem !important",
        height: "80vh",
        minWidth: "80vw"
    },
    imgDiv: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #00F7BA",
        borderRadius: "2rem",
        marginBottom: "1rem"
    },
    img: {
        height: "80%",
        width: "80%"
    },
    dialogroot: {
    },
    cancelIcon: {
        position: "absolute",
        top: "0%",
        right: "1rem",
        color: "#00F7BA",
        cursor: "pointer"
    }
}))

const ImageContainer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.imgDiv}>
            <img
                className={classes.img}
                src={process.env.PUBLIC_URL + props.imgSrc}
            />
        </div>
    )
}

var ScreenshotDialog = (props) => {
    const [open, setOpen] = React.useState(props.state);
    // const [imageType,setImageType] = React.useState()
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => props.handleDialogState(false)}
                classes={{
                    root: classes.root,
                    paper: classes.paper
                }}
            >
                <DialogTitle style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "32px",
                    fontFamily: "mulish",
                    fontWeight: "800",
                    color: "#FFFFFF"
                }}>{"Preview of the project"}
                    <div className={classes.cancelIcon}
                        onClick={() => props.handleDialogState(false)}
                    >
                        <CancelIcon />
                    </div>
                </DialogTitle>
                <DialogContent classes={{ root: classes.dialogroot }}>
                    {
                        IMAGES[props?.dialogProjectName]?.map((elem) => {
                            return (
                                <ImageContainer imgSrc={elem.img} />
                            )
                        })
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ScreenshotDialog;
