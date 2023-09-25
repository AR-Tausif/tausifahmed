import Image from 'next/image'
import HeaderHero from "../components/sections/HeaderHero"
import NavigationBar from '@/components/Navbar'
export default function Home() {
  return (
    <main>
      <header>
        <nav>
          <NavigationBar/>
        </nav>
        <HeaderHero/>
      </header>
    </main>
  )
}
