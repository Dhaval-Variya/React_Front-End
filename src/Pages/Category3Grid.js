import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "../Child Components/Table";
import Chart from "../Child Components/Chart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    flex: 1,
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#FFFFFF",
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
    <div className={classes.root}>
      <Grid container lg={12} spacing={5}>
        <Grid item>
          <Table />
        </Grid>
        <Grid item>
          <Chart />
        </Grid>
      </Grid>
    </div>
    </React.Fragment>
  );
}
