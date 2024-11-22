import MyAlertInfo from "../alert/MyAlertInfo";
import SelectedServiciesTable from "../tables/SelectedServiciesTable";
import LabCalculator, {LabItem} from "../services/lab-calculator";
import {useState} from "react";
import SearchDocForm from "../search/SearchDocForm";

export default function SelectPatientStep() {
  const [selectedLabs, setSelectedLabs] = useState([] as LabItem[]);

  return (
    <div className="flex flex-col gap-5">
      <div className="mx-auto">
        <MyAlertInfo text="Por favor para continuar, busque al cliente y si es necesario completar todos los campos obligatorios del formulario de registro del cliente." />
      </div>

      <div className='flex justify-between gap-6'>
        <div className="p-4 rounded-lg bg-gris-muy-claro w-full">
          <h3>Formulario de busqueda</h3>
          <SearchDocForm/>
        </div>

        <div className="p-4 rounded-lg bg-gris-muy-claro min-w-[33rem] flex flex-col justify-between">
          <SelectedServiciesTable selectedLabItems = {selectedLabs}/>

        </div>
      </div>
    </div>
  )
}


