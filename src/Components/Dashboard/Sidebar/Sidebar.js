// import { Button } from "@material-ui/core";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PeopleAltOutlined } from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/MoveToInbox";
// import { DashboardRounded, Edit, PeopleAltRounded } from "@material-ui/icons";
import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
import "./Sidebar.css";

const drawerWidth = "25%";
const background = "#383838 !important";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: background,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function Sidebar() {
  const classes = useStyles();
  const styles = {
    textDecoration: "none",
    color: "#c2c7d0",
    fontSize: '20px'
  };
  return (
    <>
      {/* <div className="sidebar"> */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          {/* <div className={classes.toolbar} /> */}
          <strong className="logo">
            <img src={logo} className="img-fluid" alt="logo" />
          </strong>
          <Divider />
          <List>
            <Link style={styles} to="/admin">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link style={styles} to="/admin/userList">
              <ListItem button>
                <ListItemIcon>
                  <PeopleAltOutlined />{" "}
                </ListItemIcon>
                <ListItemText primary="User List" />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link style={styles} to="/admin/sponsorList">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Sponsor List" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      {/* </div> */}
    </>
  );
}
export default Sidebar;
