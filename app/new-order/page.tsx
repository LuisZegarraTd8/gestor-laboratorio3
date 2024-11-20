import MyAlertInfo from "@/components/alert/MyAlertInfo";
import OrderStepper from "@/components/order/OrderStepper";
import LabQuoteDesktop from "@/components/order/LabQuoteDesktop";
import HStepper from "@/components/nav/HStepper";


export default function NewOrder() {
    return (
        <div className="max-w-7xl flex flex-col mx-auto gap-6">
            {/* <OrderStepper/> */}
            <p>Nueva tabla</p>
            {/* <MyAlertInfo text="Por favor para continuar, realice la busqueda y seleccione los estudios que quiere cotizar. El total está redondeado sin centavos." /> */}
            <HStepper/>
            {/* <div>
                <LabQuoteDesktop/>
            </div> */}
        </div>
  )
}
