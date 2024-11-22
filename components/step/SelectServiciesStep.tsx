import LabCalculator, {LabItem} from "../services/lab-calculator";
import {useState} from "react";
import {GridRowSelectionModel} from "@mui/x-data-grid";
import BigNumber from "bignumber.js";
import MathUtils from "../services/math-utils";
import LabMiniSummaryDesktop from '../tables/LabMiniSummaryDesktop';
import LabTableDesktop from "../tables/LabTableDesktop";
import MyAlertInfo from "../alert/MyAlertInfo";
import TotalQuote from "../tables/TotalQuote";

export default function SelectServiciesStep() {
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
        <div className="flex flex-col gap-5">
            <div className="mx-auto">
                <MyAlertInfo text="Por favor para continuar, realice la busqueda y seleccione los estudios que quiere cotizar. El total está redondeado sin centavos." />
            </div>

            <div className='flex justify-between gap-6'>
                <div className="p-4 rounded-lg bg-gris-muy-claro w-full">
                    <LabTableDesktop
                                rowSelectionModel={rowSelectionModel}
                                setSelectedLabItems={setSelectedLabs}
                                setRowSelectionModel={setRowSelectionModel}/>
                </div>

                <div className="p-4 rounded-lg bg-gris-muy-claro min-w-[33rem] flex-col justify-between">
                    <LabMiniSummaryDesktop 
                        selectedLabItems = {selectedLabs}
                        deleteSelectedLabItem={deleteSelectedLabItem}
                        deleteSelectedRowSelectionModel={deleteSelectedRowSelectionModel}/>
                    
                    <TotalQuote description={'Total Sugerido de los Estudios:'} total={suggestedTotal.toFormat(0)}/>
                </div>
            </div>
        </div>
    )
}
