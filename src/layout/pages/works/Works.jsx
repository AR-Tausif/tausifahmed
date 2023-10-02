import PortfolioCard from "../../../components/ui/ProjectCard";

const Works = () => {
    return ( 
        <section className="max-w-screen-xl mx-auto text-center py-20">
        <h3 className="text-[4rem] uppercase font-semibold py-24">Selected Works</h3>
        <div className="flex flex-col space-y-20">
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        </div>
      </section>
     );
}
 
export default Works;