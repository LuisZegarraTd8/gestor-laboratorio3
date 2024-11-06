import { z } from "zod";
import { DocTypeSchema, FormPatientSchema } from "@/schema/documentTypeSchema";

export type DocTypes = z.infer<typeof DocTypeSchema>

export type FormPatientData = z.infer<typeof FormPatientSchema>;