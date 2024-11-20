import Link from "next/link";
import DeleteBtn from "./DeleteBtn";

const getVacancies = async () => {
  try{
    const res = await fetch('http://localhost:3000//api/vacancy', {cache: "no-store"})

    if (!res.ok){
      throw new Error('Failed to fetch vacancies')
    }
    return res.json()
  } catch(error){
    console.log(error)
  }
}

interface VacancyInterface{
  _id: string
  company: string
  vacancy: string
  salary: string
  status: string
  note?: string
}

export default async function Vacancy() {
  const {vacancies}: {vacancies: VacancyInterface[]} = await getVacancies()

  const vacancyElem = vacancies.map(elem => {
    return(
      <div className="vacancy" key={elem._id}>
        <p>{elem.company}</p>
        <p>{elem.vacancy}</p>
        <p>{elem.salary}</p>
        <p>{elem.status}</p>
        <p>{elem?.note}</p>
        <Link href={`/edit/${elem._id}`}>Edit</Link>
        <DeleteBtn id={elem._id} />
      </div>
    )
  })

  return (
    <div className="vacancies">
      {vacancyElem}
    </div>
  )
}
