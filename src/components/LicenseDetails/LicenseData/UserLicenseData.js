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


 const UserLicenseData = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: "transparent",
        }
    }));
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    function createRow(index) {
        return {
            srno: 1,
            licenceno: 12345,
            licencetype: '12345abc',
            licencetypedet: 'abc12345',
            businessdet: 'John Business',
            issuedate: '4/4/1852',
            expdate: '14/4/2020',
            licenceusage: 'Usage',
            licenceterm: 'Term',
            licencestate: '123 Street, CA'
        };
    }

    function getData(count) {
        var rowData = [];
        for (var i = 0; i < count; i++) {
            rowData.push(createRow(i));
        }
        return rowData;
    }


    const onCellClick = (event) => {
        console.log(event);
        if (event.colDef.field === "businessdet" || event.colDef.field === "businessdet1") {
            setOpen(true);
        }
    }

    return(
        <div>
            <div
                id="myGrid"
                style={{ height: '100%', width: '136%', marginLeft: '-15em', marginTop: '16em' }}
                className="ag-theme-alpine"
            >
                {<AgGridReact
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
                    onCellClicked={onCellClick}
                >
                    {/* <AgGridColumn  headerName="Core"> */}
                    <AgGridColumn headerName="Sr. No." field="srno" />
                    <AgGridColumn headerName="Licence Number" field="licenceno" />
                    <AgGridColumn headerName="Licence Type" field="licencetype" />
                    <AgGridColumn headerName="Licence Type Details" field="licencetypedet" />
                    <AgGridColumn headerName="Business Details" field="businessdet" />
                    <AgGridColumn headerName="Issue Date" field="issuedate" />
                    <AgGridColumn headerName="Expiration Date" field="expdate" />
                    <AgGridColumn headerName="Licence Usage" field="licenceusage" />
                    <AgGridColumn headerName="Licence Term" field="licenceterm" />
                    <AgGridColumn headerName="Licence State" field="licencestate" />

                    {/* <AgGridColumn field="price" filter="agNumberColumnFilter" /> */}
                    {/* </AgGridColumn> */}
                    {/* <AgGridColumn style={{ color: 'whitesmoke' }} headerName="Extra">
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
                    </AgGridColumn> */}
                    </AgGridReact> 
                }
            </div>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
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

export default UserLicenseData;