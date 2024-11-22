import {   Paper, TableCell, TableHead, TableRow, TableContainer, Table, TableBody } from '@mui/material';
import { TableVirtuoso } from 'react-virtuoso';
import { LabItem } from '../services/lab-calculator';
import React from 'react';

const TableComponents = {
    // @ts-ignore
    Scroller: React.forwardRef((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),
    Table: (props: any) => <Table {...props} style={{ borderCollapse: 'separate' }} />,
    TableHead,
    TableRow,
    // @ts-ignore
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

type SelectedServiciesTableParams = {
    selectedLabItems: LabItem[],
}

export default function SelectedServiciesTable(
    { selectedLabItems }: SelectedServiciesTableParams,
) {
    return (
        <>
            <TableVirtuoso
                style={{ height: 400,  width: '100%', backgroundColor: '#ECECEC', boxShadow: 'none'}}
                data={selectedLabItems || []}
                // @ts-ignore
                components={TableComponents}
                fixedHeaderContent={() => (
                    <TableRow style={{ backgroundColor: '#ECECEC', borderBottom: 2, borderColor: '' }}>
                        <TableCell style={{ width: 90 , fontWeight: 'bold'}}>
                            Abreviatura
                        </TableCell>
                        <TableCell style={{ fontWeight: 'bold'}}>
                            Estudio de Laboratorio
                        </TableCell>
                        <TableCell style={{ width: 90 , fontWeight: 'bold'}}>
                            Precio
                        </TableCell>
                    </TableRow>
                )}

                itemContent={(index, selectedLabItem) => (
                    <>
                        <TableCell>
                            {selectedLabItem.code}
                        </TableCell>
                        <TableCell>
                            {selectedLabItem.name}
                        </TableCell>
                        <TableCell>
                            $ {selectedLabItem.price}
                        </TableCell>
                    </>
                )}
            />

        </>
    );
}
