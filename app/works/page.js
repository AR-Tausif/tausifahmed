import Footer from "@/components/Footer";
import NavigationBar from "@/components/Navbar";
import PortfolioCard from "@/components/PortfolioCard";
import HeaderHero from "@/components/sections/HeaderHero";



export default function Home() {

  return (
    <main>
        <header>
        <nav>
          <NavigationBar/>
        </nav>
      </header>
      <section className="max-w-screen-xl mx-auto text-center py-20">
        <h3 className="text-[4rem] uppercase font-semibold py-24">Selected Works</h3>
        <div className="flex flex-col space-y-20">
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        </div>
      </section>
      <footer>
        <section className=''>
          <Footer/>
        </section>
      </footer>
    </main>
  )
}


