'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, MenuItem } from '@mui/material';
import PatientForm from './PatientForm';
import { Controller } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
    tipoDocumento: z.string().min(1, { message: 'Tipo de documento es requerido' }),
    numeroDocumento: z.string().min(1, { message: 'Número de documento es requerido' }),
});

interface FormData {
  tipoDocumento: string;
  numeroDocumento: string;
}

const SearchDocForm: React.FC = () => {

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      tipoDocumento: '', 
      numeroDocumento: '', 
    },
  });

  const [mostrarResultado, setMostrarResultado] = useState(false); 
  const [paciente, setPaciente] = useState<any>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setMostrarResultado(true);

    // Lógica para buscar el paciente en JSON
    const response = await fetch('/api/patients/'); 
    const pacientes = await response.json();
    const pacienteEncontrado = pacientes.find(
      (p: any) => p.tipoDocumento === data.tipoDocumento && p.numeroDocumento === data.numeroDocumento
    );
    setPaciente(pacienteEncontrado);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-row gap-3 items-start'>
        <div className='w-96'>
          <Controller
            name="tipoDocumento"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
              {...field}
              select
              label="Tipo de Documento"
              error={!!errors.tipoDocumento}
              helperText={errors.tipoDocumento?.message}
              fullWidth
              margin="normal"
              >
                <MenuItem value="DNI">DNI</MenuItem>
                <MenuItem value="PASAPORTE">Pasaporte</MenuItem>
              </TextField>
            )}
            />
        </div>

        <TextField
          {...register('numeroDocumento')}
          label="Número de Documento"
          error={!!errors.numeroDocumento}
          helperText={errors.numeroDocumento?.message}
          fullWidth
          margin="normal"
        />
        
        <input 
            type="submit"
            value='Buscar Paciente'
            className="isolate h-fit mt-4 relative z-10 rounded border-2 border-azul-oscuro bg-azul-oscuro/85 px-4 py-4 text-sm font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-azul-oscuro before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 active:brightness-110"
        />
      </div>

      {mostrarResultado && (
        paciente ? (
          // Mostrar formulario con los datos del paciente
          <>
            {/* <PatientForm paciente={paciente} /> */}
            <p>Aqui esta el paciente</p>
          </>
        ) : (
          // Mostrar formulario vacío
          <>
            {/* <PatientForm /> */}
            <p>No existe el paciente</p>
          </>
        )
      )}
    </form>
  );
};

export default SearchDocForm;