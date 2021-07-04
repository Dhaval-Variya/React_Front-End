import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import GCard from "../Child Components/Card_Good";
import BCard from "../Child Components/Card_Bad";
import Chatbot from "../Child Components/Chatbot";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  gridList: {
    flexWrap: "wrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  seperator: {
    paddingTop: 20,
  },
}));

export default function StandardGridList() {
  const classes = useStyles();
  const [message, setMsg] = React.useState("");
  const data = [
    {
      title: "Left In",
      category: "",
    },

    {
      title: "Left Out",
      category: "",
    },

    {
      title: "Right In",
      category: "",
    },

    {
      title: "Right Out",
      category: "",
    },
  ];

  const statehandler = (msg) => {
    setMsg(msg);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={4}>
          <GridListTile key="Header" cols={4} style={{ height: "auto" }}>
            <ListSubheader component="div">Current Detection</ListSubheader>
          </GridListTile>
          {data.map((data) => (
            <GridListTile key={data.title} style={{ height: "auto" }}>
              <GCard
                title={data.title}
                category={data.category}
                statehandler={statehandler}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <div className={classes.seperator}>
        <GridList className={classes.gridList} cols={4}>
          <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
            <ListSubheader component="div">Last NG Detected</ListSubheader>
          </GridListTile>
          {data.map((data) => (
            <GridListTile key={data.title} style={{ height: "auto" }}>
              <BCard
                title={data.title}
                category={data.category}
                msg={message}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <Chatbot />
    </React.Fragment>
  );
}
