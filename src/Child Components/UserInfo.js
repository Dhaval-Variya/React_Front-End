import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  avatar: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));
export default function User(props) {
  const name = props.name;
  const imgSrc = props.img;
  const role = props.role;
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar alt={name} img={imgSrc} className={classes.avatar} />
          </Grid>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="header2" className={classes.text}>
                {name}
              </Typography>
              <Typography variant="subtitle1">{role}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
