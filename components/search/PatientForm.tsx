import React from 'react'
import { TextField } from '@mui/material';

interface PatientFormProps {
    paciente?: any; 
}

const PatientForm: React.FC<PatientFormProps> = ({ paciente }) => {
    return (
        <div>
            {/* Mostrar los datos del paciente o campos vacíos */}
            <TextField label="Nombre" value={paciente?.nombre || ''} fullWidth margin="normal" />
            {/* Otros campos */}
        </div>
    );
  };
  
  export default PatientForm;