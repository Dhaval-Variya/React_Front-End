import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logoDark from "../Resources/Logo_Dark.png";
import logoLight from "../Resources/Logo_Light.png";
import UserMenu from "./UserMenu";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.appBar,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const drawer = props.drawer;

  const handleDrawer = (event) => {
    props.drawerBool(drawer);
  };

  return (
    <React.Fragment>
      <AppBar elevation = "0" position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Drawer"
            onClick={handleDrawer}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
            {theme.palette.type === "light" ? (
              <img src={logoLight} alt="logo" width="90" />
            ) : (
              <img src={logoDark} alt="logo" width="90" />
            )}
          <div className={classes.title} />
          <div>
            <UserMenu setPLCSet={props.setPLCSet} />
          </div>
        </Toolbar>
        <Divider/>
      </AppBar>
    </React.Fragment>
  );
}
