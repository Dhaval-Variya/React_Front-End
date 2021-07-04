import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";// eslint-disable-next-line
import Fab from "@material-ui/core/Fab";// eslint-disable-next-line
import Chat from "@material-ui/icons/Chat";
import GCard from "../Child Components/Card_Good";
import BCard from "../Child Components/Card_Bad";

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
  chat: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(4),
  },
}));

export default function StandardGridList() {
  const classes = useStyles();
  const [message, setMsg] = React.useState("");
  const data = [
    {
      title: "Left In",
      category: "Category3",
    },

    {
      title: "Left Out",
      category: "Category3",
    },

    {
      title: "Right In",
      category: "Category3",
    },

    {
      title: "Right Out",
      category: "Category3",
    },
  ];

  const statehandler = (msg) => {
    setMsg(msg);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={4}>
          <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
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
    </React.Fragment>
  );
}
