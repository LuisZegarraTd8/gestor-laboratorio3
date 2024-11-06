'use client'
import MyAlertInfo from '@/components/alert/MyAlertInfo';
import HeaderOrder from '@/components/order/HeaderOrder';
import TableOrder from '@/components/order/TableOrder';
import ButtonBlueDarkIcon from '@/components/parts/ButtonBlueDarkIcon';


export default function RecentOrders() {
    return (
        <div className="max-w-7xl flex flex-col mx-auto gap-6 h-auto">
            <h1 className='text-2xl font-bold text-negro-claro uppercase text-center'>Ordenes Recientes</h1>
            
            <div className='px-16'>
                <MyAlertInfo text="Aqui encontraras la ordenes generadas mas recientes." />
            </div>

            <div className='bg-gris-muy-claro w-full px-5 py-8 rounded-lg flex flex-col gap-6 h-full'>
                
                <div className='flex flex-col gap-6 divide-y-[3px] divide-gris-oscuro/30'>
                    <HeaderOrder/>
                    <div className='pt-4 px-5'>
                        <TableOrder/>
                    </div>
                </div>
                
            </div>
        
        
        </div>
    )
}
