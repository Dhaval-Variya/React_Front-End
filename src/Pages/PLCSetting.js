import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typorgraphy from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Exit from "@material-ui/icons/Clear";
import SetPLC from "../Child Components/SetPLC";
import Data from "../Resources/settingPLCInit.json";

const useStyles = makeStyles((theme) => ({
  root: {},

  header: {
    fontSize: 18,
    fontWeight: "bold",
  },

  exit: {
    position: "absolute",
    bottom: "90%",
  },

  paper: {},

  ip: {
    marginTop: theme.spacing(1),
    width: "95%",
  },
}));

export default function PLC(props) {
  const classes = useStyles();
  const open = props.state;

  return (
    <React.Fragment>
        <Dialog
          disableBackdropClick
          open={open}
          fullWidth="true"
          maxWidth="md"
        >
          <Typorgraphy variant="header2" className={classes.header}>
            PLC Setting for Tearing (TR)
          </Typorgraphy>
          {Data.map((data) => (
            <SetPLC
              key={data.title}
              title={data.title}
              timing={data.timing}
              duration1={data.duration1}
              duration2={data.duration2}
            />
          ))}
          <DialogActions>
            <Button variant="contained" onClick={props.close} color="secondary">
              Save
            </Button>
            <IconButton className={classes.exit} onClick={props.close}>
              <Exit />
            </IconButton>
          </DialogActions>
        </Dialog>
      {props.children}
    </React.Fragment>
  );
}
