import MyAlertInfo from "@/components/alert/MyAlertInfo";
import OrderStepper from "@/components/order/OrderStepper";
import LabQuoteDesktop from "@/components/order/LabQuoteDesktop";



export default function NewOrder() {
    return (
        <div className="max-w-7xl flex flex-col mx-auto gap-6">
            <OrderStepper/>
            
            {/* <MyAlertInfo text="Por favor para continuar, realice la busqueda y seleccione los estudios que quiere cotizar. El total está redondeado sin centavos." /> */}
            
            {/* <div>
                <LabQuoteDesktop/>
            </div> */}
        </div>
  )
}
