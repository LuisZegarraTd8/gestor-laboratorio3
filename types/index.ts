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

// Probando
export const ClientSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    personIdType: z.string(),
    personId: z.string(),
    externalId: z.string(),
    booklyId: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),    //Agregar
})

export const LabItemSchema = z.object({
    id: z.number(),
    code: z.string(),
    name: z.string(),
    price: z.number(),
})

export const HealthOrderSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    totalAmount: z.string(),
    currency: z.string(),
    quotationItems: z.array(LabItemSchema)
})

export type Client = z.infer<typeof ClientSchema>

export type LabItem = z.infer<typeof LabItemSchema>

export type HealthOrder = z.infer<typeof HealthOrderSchema>

export type ClientFormData = Pick< Client, 'firstName' | 'lastName' | 'personIdType' | 'personId' | 'email' | 'phoneNumber' >