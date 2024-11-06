"use client"
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ComboBoxSelect from '../parts/ComboBoxSelect';
import { TextField, Button } from '@mui/material';
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
        <form onSubmit={handleSubmit(onSubmit)} className='bg-gris-muy-claro w-[680px] h-full flex flex-col gap-4'>
            <div>
                <label htmlFor="tipoDocumento">Tipo de Documento:</label>
                <select {...register("tipoDocumento")}>
                <option value="">Seleccionar</option>
                <option value="DNI">DNI</option>
                <option value="CDI">CDI</option>
                <option value="Pasaporte">Pasaporte</option>
                </select>
                {errors.tipoDocumento && <span>{errors.tipoDocumento.message}</span>}
            </div>
        
            {/* Select of MUI */}
            <div className='flex flex-row space-x-9'>
                <div className='w-48'>
                    <ComboBoxSelect
                        options={docTypes} 
                        label='Tipo de Documento'
                        {...register("tipoDocumento")}
                        error={!!errors.tipoDocumento}
                        messageError={errors.tipoDocumento?.message? errors.tipoDocumento?.message : ""}
                    />
                </div>

                <TextField
                    id="numeroDocumento"
                    label="Número de Documento"
                    type="text"
                    {...register("numeroDocumento")}
                    error={!!errors.numeroDocumento}
                    helperText={errors.numeroDocumento?.message}
                />
            </div>


            {/* Otros campos del formulario */}
            <div>
                <label htmlFor="numeroDocumento">Número de Documento:</label>
                <input type="text" {...register("numeroDocumento")} />
                {errors.numeroDocumento && <span>{errors.numeroDocumento.message}</span>}
            </div>

            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" {...register("nombre")} />
                {errors.nombre && <span>{errors.nombre.message}</span>}
            </div>

            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" {...register("apellido")} />
                {errors.apellido && <span>{errors.apellido.message}</span>}
            </div>

            <div>
                <label htmlFor="correoElectronico">Correo Electrónico:</label>
                <input type="email" {...register("correoElectronico")} />
                {errors.correoElectronico && <span>{errors.correoElectronico.message}</span>}
            </div>

            <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" {...register("telefono")} />
            </div>

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