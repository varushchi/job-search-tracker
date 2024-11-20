import connectMongoDB from '@/libs/mongodb'
import Vacancy from '@/models/vacancy'
import { NextResponse, NextRequest } from 'next/server'



export async function PUT(req: NextRequest, {params}: {params: {id: string}}){
  const {id} = params
  const vacancyData = await req.json()
  await connectMongoDB()
  await Vacancy.findByIdAndUpdate(id, vacancyData)
  return NextResponse.json({message: 'vacancy updated'}, {status: 200})
}

export async function GET(req: NextRequest, {params}: {params: {id: string}}){
  const {id} = params
  await connectMongoDB()
  const vacancy = await Vacancy.findOne({_id: id})
  return NextResponse.json({vacancy}, {status: 200})
}