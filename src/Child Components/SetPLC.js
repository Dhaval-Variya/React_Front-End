import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {},

  title: {
    marginTop: theme.spacing(3),
    fontWeight: 550,
    fontStyle: "italic",
  },

  margin: {
    margin: theme.spacing(1, 1),
    width: "30%",
  },

  div: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

export default function Setting(props) {
  const classes = useStyles();
  const title = props.title;
  const [values, setValues] = React.useState({
    timing: 0,
    duration1: props.duration1,
    duration2: props.duration2,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <React.Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.div}>
          <Typography className={classes.title}>{title}</Typography>
          <TextField
            label="Timing"
            type="number"
            helperText="Purge after # formers"
            color="secondary"
            variant="outlined"
            className={classes.margin}
            value={values.timing}
            onChange={handleChange("timing")}
          />
          <TextField
            label="Duration 1"
            type="number"
            helperText="Control duration for first purger"
            color="secondary"
            variant="outlined"
            className={classes.margin}
            value={values.duration1}
            onChange={handleChange("duration1")}
          />
          <TextField
            label="Duration 2"
            type="number"
            helperText="Control duration for second purger"
            color="secondary"
            variant="outlined"
            className={classes.margin}
            value={values.duration2}
            onChange={handleChange("duration2")}
          />
        </div>
      </form>
    </React.Fragment>
  );
}
