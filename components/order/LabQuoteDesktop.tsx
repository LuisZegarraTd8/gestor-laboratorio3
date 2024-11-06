'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/system/Grid';
import LabCalculator, {LabItem} from "../services/lab-calculator";
import {useState} from "react";
import {GridRowSelectionModel} from "@mui/x-data-grid";
import TotalQuote from "./TotalQuote";
import BigNumber from "bignumber.js";
import MathUtils from "../services/math-utils";
import { Box } from '@mui/material';
import ButtonBlueDarkIcon from '@/components/parts/ButtonBlueDarkIcon';
import ButtonGrayIcon from '@/components/parts/ButtonGrayIcon';
import { Delete, ChevronRight } from '@mui/icons-material';
import LabMiniSummaryDesktop from './LabMiniSummaryDesktop';
import LabTableDesktop from './LabTableDesktop';

export default function LabQuoteDesktop() {
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
    const [selectedLabs, setSelectedLabs] = useState([] as LabItem[]);
    const total = LabCalculator.getTotalAmount(selectedLabs);
    const suggestedTotal = new BigNumber(MathUtils.roundToNearestHundred(total.toNumber()));
    const deleteSelectedRowSelectionModel = (
        itemToDelete: LabItem,
        selectedRowItems: GridRowSelectionModel = rowSelectionModel,
        setRowSelectionModelState: Function = setRowSelectionModel
    ) => {
        const filtered = selectedRowItems.filter((selectedRowItem) => { return Number(selectedRowItem) !== itemToDelete.id });
        setRowSelectionModelState(filtered);
    };

    const deleteSelectedLabItem = (
        itemToDelete: LabItem,
        labItems: LabItem[] = selectedLabs,
        setSelectedLabsState: Function = setSelectedLabs,
    ) => {
        const selectedItemsAfterDelete: LabItem[] = labItems.filter(labItems => {
            return labItems.id !== itemToDelete.id;
        });
        setSelectedLabsState(selectedItemsAfterDelete);
    };

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{
                justifyContent: 'center',
                alignItems: 'center',
                my: 2,
            }}>
                <Grid size={{ xs: 7 }} sx={{backgroundColor: '#ECECEC', padding: 2, borderRadius: 2, height: 600}}>
                    <LabTableDesktop
                        rowSelectionModel={rowSelectionModel}
                        setSelectedLabItems={setSelectedLabs}
                        setRowSelectionModel={setRowSelectionModel}/>
                </Grid>
                <Grid size={{ xs: 5 }} sx={{height: 600}}>
                    <div className=' flex flex-col justify-between h-full'>
                        <Box sx={{backgroundColor: '#ECECEC', padding: 2, borderRadius: 2, }}>
                            <LabMiniSummaryDesktop selectedLabItems = {selectedLabs}
                                                    deleteSelectedLabItem={deleteSelectedLabItem}
                                                    deleteSelectedRowSelectionModel={deleteSelectedRowSelectionModel}/>
                        </Box>
                        
                        <TotalQuote description={'Total Sugerido de los Estudios:'} total={suggestedTotal.toFormat(0)}/>
                        <ButtonBlueDarkIcon text='Siguiente Paso' children={<ChevronRight/>} />
                        <ButtonGrayIcon text='Vaciar Estudios seleccionados' children={<Delete/>}/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
