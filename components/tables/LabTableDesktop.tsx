import {
    DataGrid, GridColDef, GridRowSelectionModel, GridToolbar,
    GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport,
    GridToolbarQuickFilter
} from '@mui/x-data-grid';
import LabCalculator, { LabItem } from '../services/lab-calculator';
import { Box } from '@mui/material';

function CustomToolbar() {
        return (
        <GridToolbarContainer>
            <GridToolbarDensitySelector 
            slotProps={{ tooltip: { title: 'Cambiar densidad' } }} 
            />
            <GridToolbarExport 
            slotProps={{ tooltip: { title: 'Exportar datos' } }} 
            />
            <Box sx={{ flexGrow: 1 }} />
            <GridToolbarQuickFilter /> {/* Agrega la barra de búsqueda */}
        </GridToolbarContainer>
        );
    }

const columns: GridColDef[] = [
  {
    field: 'code',
    headerName: 'Abreviatura',
    width: 120,
    editable: false,
    disableColumnMenu: true,
  },
  {
    field: 'name',
    headerName: 'Estudio de Laboratorio',
    width: 380,
    editable: false,
    disableColumnMenu: true,
  },
  {
    field: 'price',
    headerName: 'Precio',
    type: 'number',
    width: 110,
    editable: false,
    disableColumnMenu: true,
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
    const pageSize = 7;
    return (
        <div className='min-w-fit h-fit'>
            <DataGrid
                sx={{border: 'none',
                    '& .container--top': {
                        background: 'none',
                    },
                    '& .MuiDataGrid-container--top [role=row]': {
                        backgroundColor: '#D9D9D9',
                        borderBottomWidth: 2,
                        borderBottomColor: '#BFBFBF',
                        borderTopRightRadius: 6,
                        borderTopLeftRadius: 6, 
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        // backgroundColor: '#7BF3A4',
                        fontWeight: 700,
                    },
                    '& .MuiDataGrid-toolbarContainer': {
                        marginBottom: '8px',
                    },
                    '& .MuiDataGrid-overlayWrapper':{
                        backgroundColor: 'red',
                        height: 100,
                    }
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
                keepNonExistentRowsSelected
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize,
                        },
                    },
                }}
                pageSizeOptions={[pageSize]}
                checkboxSelection
                slots={{
                    toolbar: CustomToolbar
                 }}
                localeText={{
                    toolbarDensity: 'Densidad',
                    toolbarExport: 'Exportar',
                    toolbarQuickFilterPlaceholder: 'Buscar',

                    toolbarDensityCompact: 'Compacto',
                    toolbarDensityStandard: 'Estándar',
                    toolbarDensityComfortable: 'Cómodo',
                    toolbarExportCSV: 'Exportar como CSV',
                    toolbarExportPrint: 'Imprimir',
                    noResultsOverlayLabel: 'No se encotraron resultados.'
                  }}
            />
        </div>
    );
}
