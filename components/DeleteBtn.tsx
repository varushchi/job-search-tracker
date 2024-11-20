'use client'
import { useRouter } from "next/navigation";

export default function DeleteBtn({id} : {id: string}) {
  const router = useRouter()

  const deleteVacancy = async () => {
    const confirmed = confirm("Are you sure?")
    if (confirmed){
      await fetch(`http://localhost:3000/api/vacancy?id=${id}`, {
        method: 'DELETE',
      })
      router.refresh()
    }
  }

  return (
    <button onClick={deleteVacancy}>Delete</button>
  )
}
