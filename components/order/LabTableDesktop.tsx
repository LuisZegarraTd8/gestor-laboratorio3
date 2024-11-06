import * as React from 'react';
import {
  DataGrid,
  GridColDef, GridRowSelectionModel, GridToolbar,
} from '@mui/x-data-grid';
import LabCalculator, { LabItem } from '../services/lab-calculator';

const columns: GridColDef[] = [
  {
    field: 'code',
    headerName: 'Abreviatura',
    width: 120,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Estudio de Laboratorio',
    width: 380,
    editable: false,
  },
  {
    field: 'price',
    headerName: 'Precio',
    type: 'number',
    width: 110,
    editable: false,
  },
];

type LabTableInputParams = {
    rowSelectionModel: GridRowSelectionModel,
    setSelectedLabItems: Function,
    setRowSelectionModel: Function
}
export default function LabTableDesktop(
    { rowSelectionModel, setSelectedLabItems, setRowSelectionModel }: LabTableInputParams,
) {
    const pageSize = 8;
    const debounceInMillis = 500;
    return (
        <div className='min-w-fit h-fit'>
            <DataGrid
                sx={{border: 'none',
                }}
                rows={LabCalculator.getCurrentLabItems()}
                onRowSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRowData: LabItem[] = LabCalculator.getCurrentLabItems().filter(labItem => selectedIDs.has(labItem.id));
                    setSelectedLabItems(selectedRowData);
                    setRowSelectionModel(ids);
                }}
                columns={columns}
                rowSelectionModel={rowSelectionModel}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize,
                        },
                    },
                }}
                pageSizeOptions={[pageSize]}
                checkboxSelection
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: debounceInMillis },
                    },
                }}
            />
        </div>
    );
}
