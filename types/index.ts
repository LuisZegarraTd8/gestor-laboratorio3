import { z } from "zod";
import { DocTypeSchema, FormPatientSchema } from "@/schema/documentTypeSchema";

export type DocTypes = z.infer<typeof DocTypeSchema>

export type FormPatientData = z.infer<typeof FormPatientSchema>;

export const PatientSchema = z.object({
    id: z.string(),
    patientName: z.string(),
    patientSurname: z.string(),
    documentType: z.string(),
    documentNumber: z.string(),
    patientMail: z.string().email(),
    patientPhone: z.string(),
})

export type Patient = z.infer<typeof PatientSchema>

export type PatientFormData = Pick< Patient, 'patientName' | 'patientSurname' | 'documentType' | 'documentNumber' | 'patientMail' | 'patientPhone' >