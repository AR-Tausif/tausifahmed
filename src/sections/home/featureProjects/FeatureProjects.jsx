import PortfolioCard from "../../../components/ui/ProjectCard";


const ProjectFeatured = () => {
    return ( 
        <div className="pb-24">
            <h3 className='text-5xl font-bold tracking-tighter'>My Featured <br/> works</h3>

            <div className="grid grid-cols-2 gap-12 mt-20 ">
            <PortfolioCard small={true}/> 
            <PortfolioCard small={true}/>
            <PortfolioCard small={true}/>
            <PortfolioCard small={true}/>
            </div>
            <div className="text-center mt-14">
                <button className="border px-7 py-2 rounded-md border-purple-800 bg-transparent shadow-sm text-purple-900 text-md font-semibold hover:bg-purple-800 hover:text-white">Show More</button>
            </div>
        </div>
     );
}
 
export default ProjectFeatured;