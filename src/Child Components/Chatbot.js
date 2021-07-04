import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Chat from "@material-ui/icons/Chat";

const useStyles = makeStyles((theme) => ({
  chat: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(4),
  },
}));
export default function Chatbot() {
  const classes = useStyles();
  return (
    <Fab color="secondary" className={classes.chat}>
      <Chat />
    </Fab>
  );
}
