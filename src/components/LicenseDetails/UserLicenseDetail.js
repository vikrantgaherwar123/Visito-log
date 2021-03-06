import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//AG GRID IMPORTS
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

import UserLicenseData from './LicenseData/UserLicenseData';
import AdminLicenseData from './LicenseData/AdminLicenseData';

const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 45,
      height: 24,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(22px)',
        color: '#C1BFBF',
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#C1BFBF',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 22,
      height: 21,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: '#C1BFBF',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

export default function UserLicenseDetail() {

    //switch input 

    const [state, setState] = useState({
        checkedA: true,
        checkedB: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };


    //AG grid inputs
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    // const onGridReady = (params) => {
    //     setGridApi(params.api);
    //     setGridColumnApi(params.columnApi);

    //     document.querySelector('#currentRowCount').innerHTML = 5;
    // };

    // const setRowData = (rowCount) => {
    //     gridApi.setRowData(getData(rowCount));
    //     document.querySelector('#currentRowCount').innerHTML = rowCount;
    // };

    // const cbFloatingRows = () => {
    //     var show = document.getElementById('floating-rows').checked;
    //     if (show) {
    //         gridApi.setPinnedTopRowData([createRow(999), createRow(998)]);
    //         gridApi.setPinnedBottomRowData([createRow(997), createRow(996)]);
    //     } else {
    //         gridApi.setPinnedTopRowData(null);
    //         gridApi.setPinnedBottomRowData(null);
    //     }
    // };

    // const setAutoHeight = () => {
    //     gridApi.setDomLayout('autoHeight');
    //     document.querySelector('#myGrid').style.height = '';
    // };

    // const setFixedHeight = () => {
    //     gridApi.setDomLayout('normal');
    //     document.querySelector('#myGrid').style.height = '400px';
    // };

    
    return (
        <div className="container">
            {/* <div
                  className="test-header"
                  style={{ padding: '5px', justifyContent: 'space-between', textAlign: 'center' }}
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
                </div> */}

            <div  style={{textAlign: 'end'}}>
                <div className="col-md-4">
                    License &nbsp;<br /> Details &nbsp;
                </div>
                <FormControlLabel
                    control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                />
                 <div style={{float:'right'}}>
                    Business &nbsp;<br /> Details &nbsp;
                </div>
            </div>
            {state.checkedB ? <UserLicenseData/> : <AdminLicenseData/>}
        </div>
    )
}