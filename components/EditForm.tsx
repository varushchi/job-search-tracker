'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

import './EditForm.css'

interface VacancyInterface{
  _id: string
  company: string
  vacancy: string
  salary: string
  status: string
  note?: string
  __v: number
}

export default function EditForm(props: VacancyInterface) {

  const [inputValue, setInputValue] = useState({
    company: props.company,
    vacancy: props.vacancy,
    salary: props.salary,
    status: props.status,
    note: props.note,
  })

  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLElement>){
    e.preventDefault()
    try{
      const res = await fetch(`http://localhost:3000/api/vacancy/${props._id}`, {
        method: "PUT",
        headers: {
          'Content-type': 'applicaiton/json'
        },
        body: JSON.stringify({
          company: inputValue.company,
          vacancy: inputValue.vacancy,
          salary: inputValue.salary,
          status: inputValue.status,
          note: inputValue.note,
          })
      })

      if (!res.ok){
        throw new Error('Error while putting vacancy')
      }

      router.push('/')

    } catch(error){
      console.log(error)
    }
    

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="edit-form">
      <input placeholder="Компания" id="company" value={inputValue.company} onChange={(e) => setInputValue({...inputValue, company: e.target.value})}/>
      <input placeholder="Вакансия" value={inputValue.vacancy} onChange={(e) => setInputValue({...inputValue, vacancy: e.target.value})}/>
      <input placeholder="Зарплатная вилка" value={inputValue.salary} onChange={(e) => setInputValue({...inputValue, salary: e.target.value})}/>
      <input placeholder="Статус отклика" value={inputValue.status} onChange={(e) => setInputValue({...inputValue, status: e.target.value})}/>
      <input placeholder="Заметка" value={inputValue.note} onChange={(e) => setInputValue({...inputValue, note: e.target.value})}/>
      <button type="submit">Сохранить</button>
    </form>
  )
}