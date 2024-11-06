import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import PatientForm from "./PatientForm";
import ReviewOrder from "./ReviewOrder";
import LabQuoteDesktop from './LabQuoteDesktop';
import MyAlertInfo from '../alert/MyAlertInfo';


const steps = ['Seleccionar Estudios', 'Rellenar Formulario', 'Confirmar Datos'];
function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <LabQuoteDesktop/>;
    case 1:
      return <PatientForm />;
    case 2:
      return <ReviewOrder />;
    default:
      throw new Error('Unknown step');
  }
}
export default function Goal2() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <div>
        <Grid
            sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: { xs: 'transparent' },
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                display: 'flex',
                justifyContent: { sm: 'space-between', md: 'flex-end' },
                alignItems: 'center',
                width: '100%',
                maxWidth: { sm: '100%', md: 600 },
                }}
            >
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        flexGrow: 1,
                    }}
                >
                    <Stepper
                        id="desktop-stepper"
                        activeStep={activeStep}
                        sx={{ width: '100%', height: 80 }}
                    >
                        {steps.map((label) => (
                        <Step
                            sx={{ ':first-child': { pl: 0 }, ':last-child': { pr: 0 } }}
                            key={label}
                        >
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                </Box>
            </Box>

            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                width: '100%',
                gap: 2,
                }}
            >
                <Stepper
                id="mobile-stepper"
                activeStep={activeStep}
                alternativeLabel
                sx={{ display: { sm: 'flex', md: 'none' } }}
                >
                    {steps.map((label) => (
                        <Step
                            sx={{
                                ':first-child': { pl: 0 },
                                ':last-child': { pr: 0 },
                                '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                            }}
                            key={label}
                        >
                            <StepLabel
                                sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
                            >
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {/* Todos los pasos Cumplidos */}
                {activeStep === steps.length ? (
                    <h3> Orden Generada.</h3>
                ) : (
                    <React.Fragment>
                        <MyAlertInfo text="Por favor para continuar, realice la busqueda y seleccione los estudios que quiere cotizar. El total está redondeado sin centavos." />

                        {getStepContent(activeStep)}
                            <Box
                            sx={[
                                {
                                display: 'flex',
                                },
                                activeStep !== 0 ? { justifyContent: 'space-between' }: { justifyContent: 'flex-end' },
                            ]}
                        >
                            {/* {activeStep !== 0 && (
                                <Button
                                startIcon={<ChevronLeftRoundedIcon />}
                                onClick={handleBack}
                                variant="text"
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                                >
                                Previous
                                </Button>
                            )}
                            {activeStep !== 0 && (
                                <Button
                                startIcon={<ChevronLeftRoundedIcon />}
                                onClick={handleBack}
                                variant="outlined"
                                fullWidth
                                sx={{ display: { xs: 'flex', sm: 'none' } }}
                                >
                                Previous
                                </Button>
                            )} */}

                            {/* Boton de siguiente paso*/}
                            {/* <Button
                                variant="contained"
                                endIcon={<ChevronRightRoundedIcon />}
                                onClick={handleNext}
                                sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                            >
                                {activeStep === steps.length - 1 ? 'Confirmar información' : 'Siguiente Paso'}
                            </Button> */}
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </Grid>

    </div>
  );
}