import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  useHistory
} from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import Auth from '../../Auth';
import AdminLicenseDetail from '../LicenseDetails/AdminLicenseDetail';


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

export default function AdminDashboard() {
  let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
 

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


      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h4 style={{ float: 'left' }} className='licence-text'>License Details</h4>
          </div>
          <div className="col-md-11">
            <h2 onClick={logout} style={{ float: 'right' }}>Icon</h2>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
      <div style={{ width: '85%', background: 'cornsilk', marginLeft: '15em', height: '91vh' }} className="row table-responsive">
        <AdminLicenseDetail />{/*you can switch this component with userDashboard*/}
      </div>
    </div>
  );
}