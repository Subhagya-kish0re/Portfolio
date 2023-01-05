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
import { AMAZON, GLAMGRAM } from "./projectImage";
import ErrorIcon from '@mui/icons-material/Error';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(({
    root: {
        // borderRadius:"4rem !important"
    },
    paper: {
        backgroundColor: "#0A192F !important",
        borderRadius: "2rem !important"
    },
    textClass: {
        color: "#FFFFFF",
        fontWeight: "550",
        fontSize: "18px"
    },
    dialogroot: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center"
    },
    svg_icons: {
        transform: "scale(1.8)",
    }
}))

var ErrorDialog = (props) => {
    const [open, setOpen] = React.useState(props.state);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => props.handleErrorDialog(false)}
                classes={{
                    root: classes.root,
                    paper: classes.paper
                }}
            >
                <DialogContent classes={{ root: classes.dialogroot }}>
                    <div style={{
                        color: "#00F7BA",
                        // height:"4rem"
                    }}>

                        <ErrorIcon className={classes.svg_icons} />
                    </div>
                    <text className={classes.textClass}>
                        <p>
                            This project doesn't belong to the Open-Source. But, i can discuss my role with the demo of product.
                            <br />
                            Thank you.
                        </p>
                    </text>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ErrorDialog;
