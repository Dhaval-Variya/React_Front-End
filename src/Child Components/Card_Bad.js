import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover, &$focusVisible": {
      zIndex: 2,
    },
  },
  media: {
    height: "0",
    paddingTop: "42.97%",
  },
  focusVisible: {},
}));

const io = require("socket.io-client");
const socket = io("http://127.0.0.1:4000");
const intImg = require("../Resources/int.json");

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const title = props.title;
  const category = props.category;
  const msg = props.msg || category + title + ":true";
  const [pic, setPic] = React.useState(intImg.data);

  React.useEffect(() => {
    switch (msg) {
      case category + title + ":false": {
        socket.removeAllListeners(category + title + " Bad");
        break;
      }
      case category + title + ":true": {
        socket.on(category + title + " Bad", function (base64Img) {
          setPic(base64Img);
        });
        break;
      }
      default: {
        break;
      }
    }// eslint-disable-next-line
  }, [msg]); 

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        focusVisible={classes.focusVisible}
        image={`data:image/jpeg;base64,${pic}`}
        alt={title}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="p5" component="p1">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
