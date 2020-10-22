import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  useHistory
} from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import PersonIcon from '@material-ui/icons/Person';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


import Auth from '../../Auth';
import UserLicenseDetail from '../LicenseDetails/UserLicenseDetail';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function SuperAdminDashboard() {
  let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    Auth.signout();
    if (!Auth.getAuth()) {
      history.push('/');
    }
  }


  return (
    <div>
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <h2 className="drawer-content-text">Dispensary Exchange</h2>

      </Drawer>
        
      {/* <div className="row">
        <div style={{ float: 'left' }}>
          <h4 className='licence-text'>License Details</h4>
        </div>
        <div style={{ float: 'right', color: '#2a8b8a' }}><PersonIcon /></div>
        <div className="clearfix"></div>
      </div> */}
    </div>
    <div className="row">
        <div className="col-md-12">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h4 style={{ float: 'left' }} className='licence-text'>License Details</h4>
          </div>
          <div className="col-md-4">
          <h2 onClick={logout} style={{ float: 'right' }}>Icon</h2>
          </div>
        </div>
        <div className="clearfix"></div>
        </div>
    <div style={{width: '85%',background: 'cornsilk',marginLeft: '15em',height: '91vh'}} className="row table-responsive">
          <UserLicenseDetail/>
      </div>
    </div>
  );
}