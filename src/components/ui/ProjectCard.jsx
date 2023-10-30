import ProjectMiniCard from "./ProjectMiniCard";

const PortfolioCard = ({small, work}) => {
    // const {name, title, thumbImg} = work;
    console.log(work)
    return ( 
        <div className={`${small ? 'h-[30vh]' : 'h-[100vh]'}
         w-full
        max-h-[32rem]
    
        relative
        overflow-hidden
        block
    

        before:content-['']
        before:absolute
        before:inset-0
        before:block
        before:bg-gradient-to-b
        before:from-white
        before:to-gray-900
        before:opacity-30
        before:z-[-5] rounded-2xl`}
        >
            <ProjectMiniCard/>
            <div className="text-center text-white space-y-5 absolute bottom-8">
            <h4 className={`font-bold ${small ? 'text-4xl' : "text-6xl"}`}>dfda</h4>
            <h5 className={` text-center font-semibold mx-auto px-11 -tracking-wider leading-[1.2] ${small ? 'text-2xl' : "w-3/4 text-4xl"}`}>dkaksdfkd</h5>
            </div>
        </div>
     );
}
 
export default PortfolioCard;