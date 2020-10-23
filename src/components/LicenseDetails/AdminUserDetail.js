import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

//AG GRID IMPORTS
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

export default function AdminUserDetail() {

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: "transparent",
        }
      }));
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    //switch input 

    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
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

    function createRow(index) {
        return {
            srno: 1,
            name: 'Vikrant',
            mobno: '12345abc',
            email: 'abc12345@gmail.com',
        };
    }

    function createBusinessRow(index) {
        return {
            srno: 1,
            licenceno1: 12345,
            licencetype1: '12345abc',
            licencetypedet1: 'abc12345',
            businessdet1: 'John Business',
            issuedate1: '4/4/1852',
            expdate1: '14/4/2020',
            licenceusage1: 'Usage',
            licenceterm1: 'Term',
            licencestate1: '123 Street, CA'
        };
    }
    
    function getData(count) {
        var rowData = [];
        for (var i = 0; i < count; i++) {
            rowData.push(createRow(i));
        }
        return rowData;
    }

    function getBusinessData(count) {
        var rowData = [];
        for (var i = 0; i < count; i++) {
            rowData.push(createBusinessRow(i));
        }
        return rowData;
    }

    
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

            <div style={{textAlign: 'end'}}>
                <Button onClick={() => setOpen(true)}>ADD User</Button>
            </div>
            <div
                id="myGrid"
                style={{width: '75%', marginTop: '16em' }}
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
                    rowData={getData(1)}
                    statusBar={{ items: [{ component: 'agAggregationComponent' }] }}
                    enableRangeSelection={true}
                    domLayout={'autoHeight'}
                    animateRows={true}
                    popupParent={document.body}
                    // onGridReady={onGridReady}
                    pagination={true}
                >
                    <AgGridColumn headerName="Sr. No." field="srno" />
                    <AgGridColumn headerName="Name" field="name" />
                    <AgGridColumn headerName="mobile No." field="mobno" />
                    <AgGridColumn headerName="Email ID" field="email" />
                    </AgGridReact>
            </div>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                BackdropProps={{
                    classes: {
                        root: classes.root
                    }
                }
                }
            >
                <header className="popup-header">
                    <DialogTitle id="alert-dialog-title">{"Business Detail"}
                        <div className="float-right">icon</div>
                    </DialogTitle>
                </header>
                <DialogContent>
                    <table className="table table-borderless">

                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                         
                        </tbody>
                    </table>
                </DialogContent>
            </Dialog>
        </div>
    )
}