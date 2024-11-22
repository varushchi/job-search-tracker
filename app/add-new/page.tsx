'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import './globals.css'

export default function AddNew() {

  const [inputValue, setInputValue] = useState({
    company: '',
    vacancy: '',
    salary: '',
    status: '',
    note: '',
  })

  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    if (inputValue.company && inputValue.vacancy && inputValue.salary && inputValue.status){
      try{
        const res = await fetch('http://localhost:3000/api/vacancy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputValue)
        })
        if(res.status !== 201){
          throw new Error('error while posting form')
        }
        router.push('/')
      } catch(error){
        console.log(error)
      }
    }

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="add-form">
      <input placeholder="Компания" value={inputValue.company} onChange={(e) => setInputValue({...inputValue, company: e.target.value})}/>
      <input placeholder="Вакансия" value={inputValue.vacancy} onChange={(e) => setInputValue({...inputValue, vacancy: e.target.value})}/>
      <input placeholder="Зарплатная вилка" value={inputValue.salary} onChange={(e) => setInputValue({...inputValue, salary: e.target.value})}/>
      <input placeholder="Статус отклика" value={inputValue.status} onChange={(e) => setInputValue({...inputValue, status: e.target.value})}/>
      <input placeholder="Заметка" value={inputValue.note} onChange={(e) => setInputValue({...inputValue, note: e.target.value})}/>
      <button type="submit">Добавить</button>
    </form>
  )
}
