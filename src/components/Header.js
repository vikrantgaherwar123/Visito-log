import React, { useState }  from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import Drawer from '@material-ui/core/Drawer';
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
import Auth from '../Auth';


//AG GRID IMPORTS
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';



import {
  BrowserRouter as Router,
  Link,
  useHistory
} from "react-router-dom";

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

export default function Header() {
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
    if(!Auth.getAuth()){
        history.push('/');
    }
  }

  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    document.querySelector('#currentRowCount').innerHTML = 5;
  };

  const setRowData = (rowCount) => {
    gridApi.setRowData(getData(rowCount));
    document.querySelector('#currentRowCount').innerHTML = rowCount;
  };

  const cbFloatingRows = () => {
    var show = document.getElementById('floating-rows').checked;
    if (show) {
      gridApi.setPinnedTopRowData([createRow(999), createRow(998)]);
      gridApi.setPinnedBottomRowData([createRow(997), createRow(996)]);
    } else {
      gridApi.setPinnedTopRowData(null);
      gridApi.setPinnedBottomRowData(null);
    }
  };

  const setAutoHeight = () => {
    gridApi.setDomLayout('autoHeight');
    document.querySelector('#myGrid').style.height = '';
  };

  const setFixedHeight = () => {
    gridApi.setDomLayout('normal');
    document.querySelector('#myGrid').style.height = '400px';
  };

  function createRow(index) {
    var makes = ['Toyota', 'Ford', 'BMW', 'Phantom', 'Porsche'];
    return {
      id: 'D' + (1000 + index),
      make: makes[Math.floor(Math.random() * makes.length)],
      price: Math.floor(Math.random() * 100000),
      val1: Math.floor(Math.random() * 1000),
      val2: Math.floor(Math.random() * 1000),
      val3: Math.floor(Math.random() * 1000),
      val4: Math.floor(Math.random() * 1000),
      val5: Math.floor(Math.random() * 1000),
      val6: Math.floor(Math.random() * 1000),
      val7: Math.floor(Math.random() * 1000),
      val8: Math.floor(Math.random() * 1000),
      val9: Math.floor(Math.random() * 1000),
      val10: Math.floor(Math.random() * 1000),
    };
  }
  function getData(count) {
    var rowData = [];
    for (var i = 0; i < count; i++) {
      rowData.push(createRow(i));
    }
    return rowData;
  }

  return (
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
        {/* <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div> */}
      
        <h2 className="drawer-content-text">Single Skull</h2>
    
      </Drawer>
    <div className='row'>
        <div className="container">
            <div style={{float:'left'}}>
                <h4  className='licence-text'>Licence Details</h4>
            </div>
            <div style={{float:'right',color:'#2a8b8a'}}><PersonIcon/></div>
            <div className="clearfix"></div>
            <div className="row">
                <div className="container">
                    <div style={{width: '450%',background: 'cornsilk'}}>
                        <div
                            className="test-header"
                            style={{ padding: '5px', justifyContent: 'space-between',textAlign: 'center' }}
                        >
                            <div style={{ alignItems: 'start' }}>
                                <button onClick={() => setRowData(0)}>0 Rows</button>&nbsp;
                                <button onClick={() => setRowData(5)}>5 Rows</button>&nbsp;
                                <button onClick={() => setRowData(50)}>50 Rows</button>&nbsp;
                            </div>
                            <div style={{ alignItems: 'center' }}>
                                <label>
                                    <input
                                        type="checkbox"
                                        id="floating-rows"
                                        onClick={() => cbFloatingRows()}
                                        style={{ verticalAlign: 'text-top' }}
                                    />
                                    <span
                                        style={{
                                            backgroundColor: '#00e5ff',
                                            width: '15px',
                                            height: '15px',
                                            border: '1px solid #888',
                                            display: 'inline-block',
                                            verticalAlign: 'text-top',
                                        }}
                                    ></span>
                                Pinned Rows
                                </label>

                                <button onClick={() => setAutoHeight()}>Auto Height</button>
                                <button onClick={() => setFixedHeight()}>Fixed Height</button>
                            </div>
                            <div style={{ alignItems: 'end' }}>
                                Row Count = <span id="currentRowCount"></span>
                            </div>
                        </div>

                        <div
                            id="myGrid"
                            style={{
                                height: '100%',
                                width: '100%',
                                margin: '2em'
                            }}
                            className="ag-theme-alpine"
                        >
                            <AgGridReact
                                modules={[
                                    ClientSideRowModelModule,
                                    RowGroupingModule,
                                    MenuModule,
                                    ColumnsToolPanelModule,
                                ]}
                                defaultColDef={{
                                    enableRowGroup: true,
                                    enablePivot: true,
                                    enableValue: true,
                                    sortable: true,
                                    filter: true,
                                    resizable: true,
                                }}
                                rowData={getData(5)}
                                statusBar={{ items: [{ component: 'agAggregationComponent' }] }}
                                enableRangeSelection={true}
                                domLayout={'autoHeight'}
                                animateRows={true}
                                popupParent={document.body}
                                onGridReady={onGridReady}
                            >
                                <AgGridColumn style={{color: 'whitesmoke'}} headerName="Core">
                                    <AgGridColumn headerName="ID" field="id" />
                                    <AgGridColumn field="make" />
                                    <AgGridColumn field="price" filter="agNumberColumnFilter" />
                                </AgGridColumn>
                                <AgGridColumn style={{color: 'whitesmoke'}} headerName="Extra">
                                    <AgGridColumn field="val1" filter="agNumberColumnFilter" />
                                    <AgGridColumn field="val2" filter="agNumberColumnFilter" />
                                    <AgGridColumn field="val3" filter="agNumberColumnFilter" />
                                    <AgGridColumn field="val4" filter="agNumberColumnFilter" />
                                    <AgGridColumn field="val5" filter="agNumberColumnFilter" />
                                    <AgGridColumn field="val6" filter="agNumberColumnFilter" />
                                    <AgGridColumn field="val7" filter="agNumberColumnFilter" />
                                    <AgGridColumn field="val8" filter="agNumberColumnFilter" />
                                    <AgGridColumn field="val9" filter="agNumberColumnFilter" />
                                    <AgGridColumn field="val10" filter="agNumberColumnFilter" />
                                </AgGridColumn>
                            </AgGridReact>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
  );
}