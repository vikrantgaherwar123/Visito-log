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


 const AdminLicenseData = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: "transparent",
        }
      }));
    const classes = useStyles();

    const [open, setOpen] = useState(false);


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
   

    function getBusinessData(count) {
        var rowData = [];
        for (var i = 0; i < count; i++) {
            rowData.push(createBusinessRow(i));
        }
        return rowData;
    }

    const onCellClick = (event) => {
        console.log(event);
        if (event.colDef.field === "businessdet1") {
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
                {
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
                        rowData={getBusinessData(1)}
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
                        <AgGridColumn headerName="Name" field="licenceno1" />
                        <AgGridColumn headerName="Phone Number" field="licencetype1" />
                        <AgGridColumn headerName="Email ID" field="licencetypedet1" />
                        <AgGridColumn headerName="Website" field="businessdet1" />
                        <AgGridColumn headerName="Business Structure" field="issuedate1" />
                        <AgGridColumn headerName="License Details" field="expdate1" />
                        <AgGridColumn headerName="Address" field="licenceusage1" />

                        
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

export default AdminLicenseData;