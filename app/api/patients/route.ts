import { NextResponse } from 'next/server';
import pacientes from '../../../data/patients.json'; 

export async function GET() {
  return NextResponse.json(pacientes);
}