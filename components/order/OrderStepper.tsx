"use client"
import { useState } from "react";
// import LabServices from "./LabServices";
// import PatientForm from "./PatientForm";
// import ReviewOrder from "./ReviewOrder";
import Goal2 from "./Goal2";

// const steps = ['Seleccionar Estudios', 'Rellenar Formulario', 'Confirmar Datos'];
// function getStepContent(step: number) {
//   switch (step) {
//     case 0:
//       return <LabServices />;
//     case 1:
//       return <PatientForm />;
//     case 2:
//       return <ReviewOrder />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

export default function OrderStepper() {
  
  // const [activeStep, setActiveStep] = useState(0);
  // const handleNext = () => {
  //   setActiveStep(activeStep + 1);
  // };
  // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };

  return (
    <div>
      <Goal2/>
    </div>
  ) 
}
