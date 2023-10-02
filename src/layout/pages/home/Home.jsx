import DevelopProcess from "../../../sections/home/developProcess/DevelopProcess";
import ProjectFeatured from "../../../sections/home/featureProjects/FeatureProjects";
import HeaderHero from "../../../sections/home/headerHero/HeaderHero";

export default function Home() {

  return (
    <div>
        <header>
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


