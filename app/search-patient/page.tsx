'use client'
import MyAlertInfo from '@/components/alert/MyAlertInfo';
import HeaderPatient from '@/components/order/HeaderPatient';
import TablePatient from '@/components/order/TablePatient';
import ButtonBlueDarkIcon from '@/components/parts/ButtonBlueDarkIcon';
import FormNewPatient from '@/components/patient/FormNewPatient';
import FormPatient from "@/components/patient/FormPatient";

export default function SearchPatient() {
  return (
    <div className="max-w-7xl flex flex-col mx-auto gap-6 h-auto">
      <h1 className='text-2xl font-bold text-negro-claro uppercase text-center'>Buscar Paciente | Lista de pacientes</h1>
      <div className='px-16'>
        <MyAlertInfo text=" Aqui podras encontrar a todos los pacientes de laboratorio y editar su información de contacto." />
      </div>

      <div className='bg-gris-muy-claro w-full px-5 py-8 rounded-lg flex flex-col gap-6 h-full'>
        
        <div className='flex flex-col gap-6 divide-y-[3px] divide-gris-oscuro/30'>
          <HeaderPatient/>
          <div className='pt-4 px-5'>
            <TablePatient/>
          </div>
        </div>
        
        <div className=' flex content-center w-1/4 mx-auto gap-6 '>
          <ButtonBlueDarkIcon text="Nueva Busqueda" children={''}/>
        </div> 
      </div>
      
{/*       <FormPatient/> */}
      <FormNewPatient/>
    </div>
  )
}
