import EditForm from "@/components/EditForm";

interface VacancyInterface{
  _id: string
  company: string
  vacancy: string
  salary: string
  status: string
  note?: string
  __v: number
}

export default async function Edit({params}: {params: {id: string}}) {

  const {id} = await params

  const getVacancyById = async() => {
    try{
      const res = await fetch(`http://localhost:3000/api/vacancy/${id}`, {cache: 'no-store'})
      if (!res.ok){
        throw new Error('error while getting vacancy')  
      }
      return res.json()
    } catch(error){
      console.log(error)
    }
  }

  const {vacancy}: {vacancy: VacancyInterface} = await getVacancyById()

  return (
    <EditForm {...vacancy}/>
  )
}