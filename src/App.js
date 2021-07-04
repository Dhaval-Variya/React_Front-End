import React from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./Child Components/AppBar.js";
import NavDrawer from "./Child Components/Drawer";
import {Route, HashRouter } from "react-router-dom";
import Category3 from "./Pages/Category3Grid";
import Category1 from "./Pages/Category1Grid.js";
import Category2 from "./Pages/Category2Grid.js";
import Category4 from "./Pages/Category4Grid.js";
import PLCSetting from "./Pages/PLCSetting";
import { lightTheme, darkTheme } from "./Resources/Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const ThemeHandler = React.createContext(null);

export default function App() {
  const [drawer, setDrawer] = React.useState(false);
  const [PLCSet, setPLCSet] = React.useState(false);
  const [themes, setThemes] = React.useState(darkTheme);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  const handlePLC = () => {
    setPLCSet(!PLCSet);
  };

  const handleTheme = () => {
    if (themes === lightTheme) setThemes(darkTheme);
    else setThemes(lightTheme);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <MuiThemeProvider theme={themes}>
        <ThemeHandler.Provider value={handleTheme}>
          <CssBaseline />
          <AppBar
            drawer={drawer}
            drawerBool={handleDrawer}
            setPLCSet={handlePLC}
          />
          <div className={classes.root}>
            <NavDrawer drawer={drawer} />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <HashRouter>
                <Route path="/" component={Category1} exact />
                <Route path="/home" component={Category1} />
                <Route path="/Category3" component={Category3}/>
                <Route path="/Category2" component={Category2} />
                <Route path="/Category4" component={Category4} />
              </HashRouter>
              <PLCSetting close={handlePLC} state={PLCSet}/>
            </main>
          </div>
        </ThemeHandler.Provider>
      </MuiThemeProvider>
    </React.Fragment>
  );
}
