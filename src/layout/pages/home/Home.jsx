import DevelopProcess from "../../../sections/home/developProcess/DevelopProcess";
import ProjectFeatured from "../../../sections/home/featureProjects/FeatureProjects";
import HeaderHero from "../../../sections/home/headerHero/HeaderHero";

export default function Home() {

  return (
    <div>
        <header className="relative" >
        <img src="/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
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


