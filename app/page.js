import Image from 'next/image'
import HeaderHero from "../components/sections/HeaderHero"
import NavigationBar from '@/components/Navbar'
import DevelopProcess from '@/components/sections/DevelopProcess'
import ProjectFeatured from '@/components/sections/ProjectFeatured'
import Footer from '@/components/Footer'


export default function Home() {

  return (
    <main>
        <header>
        <nav>
          <NavigationBar/>
        </nav>
        <HeaderHero/>
      </header>
      <section className="max-w-screen-xl mx-auto">
        <DevelopProcess/>
      </section>
      <section className="max-w-screen-xl mx-auto">
        <ProjectFeatured/>
      </section>
      <footer>
        <section className=''>
          <Footer/>
        </section>
      </footer>
    </main>
  )
}


