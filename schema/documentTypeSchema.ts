import { z } from "zod";

export const DocTypeSchema = z.object({
    abbr: z.string(),
    name: z.string()
})

export const FormPatientSchema = z.object({
    tipoDocumento: z.string().min(1,'Tipo de documento es requerido'),
    numeroDocumento: z.string().min(1, 'Número de documento es requerido'),
    nombre: z.string().min(1, 'Nombre es requerido'),
    apellido: z.string().min(1, 'Apellido es requerido'),
    correoElectronico: z.string().email('Correo electrónico inválido'),
    telefono: z.string().optional(),
    receta: z.instanceof(File).optional(), 
  });