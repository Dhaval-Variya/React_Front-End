import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Play from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover, &$focusVisible": {
      zIndex: 2,
      "& $imageBackdrop": {
        opacity: 0.5,
      },
      "& $imageButton": {
        opacity: 1,
      },
    },
  },
  media: {
    height: "0",
    paddingTop: "42.97%",
  },
  focusVisible: {},
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create("opacity"),
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    opacity: 0,
    transition: theme.transitions.create("opacity"),
  },
}));

const io = require("socket.io-client");
const socket = io("http://127.0.0.1:4000");
const intImg = require("../Resources/int.json");

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const title = props.title;
  const category = props.category;
  const [pic, setPic] = React.useState(intImg.data);
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    socket.on(category + title + " Good", function (base64Img) {
      setPic(base64Img);
    });
    return () => {
      socket.removeAllListeners(category + title + " Good");
    };
  }, [category, title]);

  const handleCard = () => {
    if (!state) {
      socket.removeAllListeners(category + title + " Good");
    } else {
      socket.on(category + title + " Good", function (base64Img) {
        setPic(base64Img);
      });
    }
    setState(!state);
    props.statehandler(category + title + ":" + state);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Card className={classes.root}>
        <CardActionArea onClick={handleCard}>
          <CardMedia
            className={classes.media}
            focusVisible={classes.focusVisible}
            image={`data:image/jpeg;base64,${pic}`}
            alt={title}
            title={title}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            {state ? <Start /> : <StopNow />}
          </span>
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="p5" component="p1">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

function Start() {
  return (
    <React.Fragment>
      <Play />
      <Typography variant="subtitle1" component="span">
        Resume
      </Typography>
    </React.Fragment>
  );
}

function StopNow() {
  return (
    <React.Fragment>
      <Pause />
      <Typography variant="subtitle1" component="span">
        Pause
      </Typography>
    </React.Fragment>
  );
}
