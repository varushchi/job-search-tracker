import connectMongoDB from '@/libs/mongodb'
import Vacancy from '@/models/vacancy'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const vacancyData = await req.json()
  await connectMongoDB()
  await Vacancy.create(vacancyData)
  return NextResponse.json({message: 'vacancy created'}, {status: 201})
}

export async function GET() {
  await connectMongoDB()
  const vacancies = await Vacancy.find()
  return NextResponse.json({vacancies})
}

export async function DELETE(req: NextRequest){
  const id = await req.nextUrl.searchParams.get('id')
  await connectMongoDB()
  await Vacancy.findByIdAndDelete(id)
  return NextResponse.json({message: 'vacancy deleted'}, {status: 200})
}