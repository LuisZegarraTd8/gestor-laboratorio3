"use client"
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Autocomplete } from '@mui/material';
import { docTypes } from '@/data';
import { FormPatientSchema } from '@/schema/documentTypeSchema';
import { FormPatientData } from '@/types';


const FormPatient: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormPatientData>({
        resolver: zodResolver(FormPatientSchema),
    });

    const onSubmit: SubmitHandler<FormPatientData> = (data) => {
        // Guarda la información en un archivo JSON (ejemplo)
        const jsonData = JSON.stringify(data);
        // Puedes usar localStorage, una API o cualquier otro método para guardar el archivo
        console.log(jsonData); 
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className='bg-gris-muy-claro w-[680px] h-full flex flex-col gap-4'>
            {/* <div>
                <label htmlFor="tipoDocumento">Tipo de Documento:</label>
                <select {...register("tipoDocumento")}>
                <option value="">Seleccionar</option>
                <option value="DNI">DNI</option>
                <option value="CDI">CDI</option>
                <option value="Pasaporte">Pasaporte</option>
                </select>
                {errors.tipoDocumento && <span>{errors.tipoDocumento.message}</span>}
            </div> */}
        
            {/* Select of MUI */}
             <div className='flex flex-row space-x-9'> 
                <Autocomplete
                    sx={{ width: 280 }}
                    disablePortal
                    options={docTypes}
                    getOptionLabel={(option) => option.abbr || ''}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label='Tipo de Documento'
                            {...register("tipoDocumento")}
                            error={!!errors.tipoDocumento}
                            helperText={errors.tipoDocumento?.message? errors.tipoDocumento?.message : ""}
                        />}
                />
                <TextField
                    fullWidth
                    id="numeroDocumento"
                    label="Número de Documento"
                    type="text"
                    {...register("numeroDocumento")}
                    error={!!errors.numeroDocumento}
                    helperText={errors.numeroDocumento?.message}
                />
            </div>

            <TextField
                fullWidth
                id="nombre"
                label="Nombre del Paciente"
                type="text"
                {...register("nombre")}
                error={!!errors.nombre}
                helperText={errors.nombre?.message}
            />

            <TextField
                fullWidth
                id="apellido"
                label="Apellido del Paciente"
                type="text"
                {...register("apellido")}
                error={!!errors.apellido}
                helperText={errors.apellido?.message}
            />

            <TextField
                fullWidth
                id="correoElectronico"
                label="Correo Electrónico"
                type="email"
                {...register("correoElectronico")}
                error={!!errors.correoElectronico}
                helperText={errors.correoElectronico?.message}
            />
                        
            <TextField
                fullWidth
                id="telefono"
                label="Teléfono"
                type="tel"
                {...register("telefono")}   
            />

            <div>
                <label htmlFor="receta">Receta:</label>
                <input type="file" {...register("receta")} />
            </div>

            <Button variant="contained" className="text-base uppercase px-4 py-2">Siguiente Paso</Button>

            <button type="submit" className="text-base uppercase px-4 py-2 bg-azul rounded-md text-white">Enviar</button>
        </form>
    );
};

export default FormPatient;