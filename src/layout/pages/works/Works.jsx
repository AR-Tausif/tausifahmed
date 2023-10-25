import { useEffect, useState } from "react";
import PortfolioCard from "../../../components/ui/ProjectCard";

const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/portfolio")
    .then(res=> res.json())
    .then(data=>setWorks(data))
  },[])
    return ( 
        <section className="max-w-screen-xl mx-auto text-center py-20">
        <h3 className="text-[4rem] uppercase font-semibold py-24">Selected Works</h3>
        <div className="flex flex-col space-y-20">
        {
          works.map((work, index)=><PortfolioCard key={index} work={work} /> )
        }
        </div>
      </section>
     );
}
 
export default Works;