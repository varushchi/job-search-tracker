import Link from "next/link";
import './Navbar.css'


export default function Navbar() {
  return (
    <nav>
      <Link href={'/'}>Дом</Link>
      <Link href={'/add-new'}>Добавить</Link>
    </nav>
  )
}
