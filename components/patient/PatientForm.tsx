import { TextField, Button, Autocomplete } from '@mui/material';
import { docTypes } from '@/data';

export default function PatientForm() {
  return (
        <>
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

            {/* <div className="mb-5 space-y-3">
                <label htmlFor="projectName" className="text-sm uppercase font-bold">
                    Nombre del Proyecto
                </label>
                <input
                    id="projectName"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Nombre del Proyecto"
                    {...register("projectName", {
                        required: "El Titulo del Proyecto es obligatorio",
                    })}
                />

                {errors.projectName && (
                    <ErrorMessage>{errors.projectName.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="clientName" className="text-sm uppercase font-bold">
                    Nombre Cliente
                </label>
                <input
                    id="clientName"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Nombre del Cliente"
                    {...register("clientName", {
                        required: "El Nombre del Cliente es obligatorio",
                    })}
                />

                {errors.clientName && (
                    <ErrorMessage>{errors.clientName.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="description" className="text-sm uppercase font-bold">
                    Descripción
                </label>
                <textarea
                    id="description"
                    className="w-full p-3  border border-gray-200"
                    placeholder="Descripción del Proyecto"
                    {...register("description", {
                        required: "Una descripción del proyecto es obligatoria"
                    })}
                />

                {errors.description && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div> */}
        </>
    )
}