import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SettingIcon from "@material-ui/icons/Settings";
import MoonIcon from "@material-ui/icons/Brightness3";
import SunIcon from "@material-ui/icons/Brightness5";
import UserInfo from "./UserInfo";
import { ThemeHandler } from "../App";


const User = { Name: "Test User", Img: "", Role: "AIVC Engineer" };

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  icons: {
    marginLeft: 1,
    marginRight: 3,
    color: "inherit",
    transform: "rotate(180deg)",
  },
  menu: {
    paddingTop: 15,
    paddingBottom: 15,
    minWidth: 250,
  },
}));

export default function MenuListComposition(props) {
  const classes = useStyles();
  const context = React.useContext(ThemeHandler);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuopen = Boolean(anchorEl);
  const theme = useTheme();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTheme = () => {
    handleClose();
    context();
  };

  const handlePLC = () => {
    handleClose();
    props.setPLCSet();
  };

  return (
    <React.Fragment>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Avatar alt={User.Name} img={User.Image} className={classes.avatar} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={menuopen}
        onClose={handleClose}
      >
        <UserInfo name={User.Name} imgSrc={User.Img} role={User.Role} />
        <Divider />
        <MenuItem
          className={classes.menu}
          onClick={handlePLC}
        >
          <SettingIcon className={classes.icons} />
          PLC Settings
        </MenuItem>
        <Divider />
        <MenuItem className={classes.menu} onClick={handleClose}>
          <SettingIcon className={classes.icons} />
          General Settings
        </MenuItem>
        {theme.palette.type === "light" ? (
          <MenuItem className={classes.menu} onClick={handleTheme}>
            <MoonIcon className={classes.icons} />
            Dark Mode
          </MenuItem>
        ) : (
          <MenuItem className={classes.menu} onClick={handleTheme}>
            <SunIcon className={classes.icons} />
            Light Mode
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
}
