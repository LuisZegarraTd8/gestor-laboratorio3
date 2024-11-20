import LabCalculator, {LabItem} from "../services/lab-calculator";
import {useState} from "react";
import {GridRowSelectionModel} from "@mui/x-data-grid";
import BigNumber from "bignumber.js";
import MathUtils from "../services/math-utils";
// import LabMiniSummaryDesktop from './LabMiniSummaryDesktop';
import LabTableDesktop from "../order/LabTableDesktop";

export default function SelectServicies() {
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
        <div>
            <h2>Seleccionar Servicios</h2>
            <div className='flex justify-between'>
            <LabTableDesktop
                        rowSelectionModel={rowSelectionModel}
                        setSelectedLabItems={setSelectedLabs}
                        setRowSelectionModel={setRowSelectionModel}/>
            <p>tabla 2</p> 
            </div>
        </div>
    )
}
