import { NextResponse } from 'next/server';
import clientes from '../../../data/clients.json'; 

export async function GET() {
  return NextResponse.json(clientes);
}