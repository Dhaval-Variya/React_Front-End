import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Videocam from "@material-ui/icons/Videocam";
import TrendingUp from "@material-ui/icons/TrendingUp";
import { Link } from "react-router-dom";

const drawerWidth = "20%";
const theme = true;
const main = [
  { Icon: Videocam, label: "TR", link: "/" },
  { Icon: "Category1", label: "Category1", link: "/category1" },
  { Icon: "Category2", label: "Category2", link: "/category2" },
];

const extra = [{ Icon: TrendingUp, label: "Category3 Defect Rate", link: "/category3" }];

const useStyles = makeStyles((theme) => ({
  icons: {
    marginLeft: 10,
    marginRight: 25,
    color: "inherit",
  },
  list: {
    color: theme.palette.primary.contrastText,
  },
  drawer: {
    zIndex: theme.zIndex.drawer,
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  menuItemRootLight: {
    "&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover": {
      fontWeight: "bold",
      color: theme.palette.secondary.main,
    },
  },
  menuItemRootDark: {
    "&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover": {
      fontWeight: "bold",
    },
  },
  menuItemSelected: {},
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const [selectedIndex1, setSelectedIndex1] = React.useState(null);
  const [selectedIndex2, setSelectedIndex2] = React.useState(null);
  const open = props.drawer;

  const handleFirstItem = (index) => {
    setSelectedIndex1(index);
    setSelectedIndex2(null);
  };

  const handleSecondItem = (index) => {
    setSelectedIndex2(index);
    setSelectedIndex1(null);
  };

  return (
    <React.Fragment>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}></div>
        <List>
          {main.map(({ label, Icon, link }, index) => (
            <MenuItem
              classes={{
                root: clsx({
                  [classes.menuItemRootLight]: theme,
                  [classes.menuItemRootDark]: !theme,
                }),
                selected: classes.menuItemSelected,
              }}
              key={label}
              component={Link}
              to={link}
              selected={index === selectedIndex1}
              onClick={() => handleFirstItem(index)}
            >
              <ListItemIcon style={{ color: "inherit" }}>
                <Icon className={classes.icons} />
              </ListItemIcon>

              <span className={classes.list}>{label}</span>
            </MenuItem>
          ))}
          <Divider />
          {extra.map(({ label, Icon, link }, index) => (
            <MenuItem
              key={label}
              classes={{
                root: clsx({
                  [classes.menuItemRootLight]: theme,
                  [classes.menuItemRootDark]: !theme,
                }),
                selected: classes.menuItemSelected,
              }}
              component={Link}
              to={link}
              selected={index === selectedIndex2}
              onClick={() => handleSecondItem(index)}
            >
              <ListItemIcon style={{ color: "inherit" }}>
                <Icon className={classes.icons} />
              </ListItemIcon>
              <span className={classes.list}>{label}</span>
            </MenuItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
