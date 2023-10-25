import DevelopProcess from "../../../sections/home/developProcess/DevelopProcess";
import ProjectFeatured from "../../../sections/home/featureProjects/FeatureProjects";
import HeaderHero from "../../../sections/home/headerHero/HeaderHero";

export default function Home() {

  return (
    <div>
        <header className="relative bg-[url(https://play.tailwindcss.com/dimg/beams.jpg)] " >
  <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <HeaderHero/>
      </header>
      <section className="max-w-screen-xl mx-auto">
        <DevelopProcess/>
      </section>
      <section className="max-w-screen-xl mx-auto">
        <ProjectFeatured/>
      </section>
    </div>
  )
}


