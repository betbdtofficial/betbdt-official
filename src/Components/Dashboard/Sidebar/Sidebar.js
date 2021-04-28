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
import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaLayerGroup, FaMoneyBillAlt, FaSteamSymbol } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { GrTableAdd } from "react-icons/gr";
import { Link } from "react-router-dom";
import logo from "../../image/Untitled-1.png";
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
                  <AiOutlineDashboard />{" "}
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link style={styles} to="/admin/manageMatch">
              <ListItem button>
                <ListItemIcon>
                  <FaSteamSymbol />{" "}
                </ListItemIcon>
                <ListItemText primary="Manage Match" />
              </ListItem>
            </Link>
            <Link style={styles} to="/admin/manageWinner">
              <ListItem button>
                <ListItemIcon>
                  <FaLayerGroup />{" "}
                </ListItemIcon>
                <ListItemText primary="Awaiting Winner" />
              </ListItem>
            </Link>
            <Link style={styles} to="/admin/manageUser">
              <ListItem button>
                <ListItemIcon>
                  <PeopleAltOutlined />{" "}
                </ListItemIcon>
                <ListItemText primary="Manage User" />
              </ListItem>
            </Link>
            <Link style={styles} to="/admin/manageDeposit">
              <ListItem button>
                <ListItemIcon>
                  <FaMoneyBillAlt />{" "}
                </ListItemIcon>
                <ListItemText primary="Manage Deposit" />
              </ListItem>
            </Link>
            <Link style={styles} to="/admin/manageWithdraw">
              <ListItem button>
                <ListItemIcon>
                  <GiReceiveMoney />{" "}
                </ListItemIcon>
                <ListItemText primary="Manage Withdraw" />
              </ListItem>
            </Link>
            <Link style={styles} to="/admin/setting">
              <ListItem button>
                <ListItemIcon>
                  <FiSettings />{" "}
                </ListItemIcon>
                <ListItemText primary="Website Setting" />
              </ListItem>
            </Link>
            <Link style={styles} to="/admin/addClubholder">
              <ListItem button>
                <ListItemIcon>
                  <GrTableAdd />{" "}
                </ListItemIcon>
                <ListItemText primary="Add Club Holder" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      {/* </div> */}
    </>
  );
}
export default Sidebar;
