import { useEffect, useState } from "react";
import PortfolioCard from "../../../components/ui/ProjectCard";
import Work from "../../../components/Work";

const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(()=>{
    fetch("https://backend-portfolio-lilac.vercel.app/portfolio")
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
      setWorks(data)
    })
  },[])

    return ( 
        <section className="max-w-screen-xl mx-auto py-16">
        <h3 className="text-[4rem] uppercase font-semibold pb-11 text-center">Selected Works</h3>
        <div className="space-y-20">
          <Work /> 
          <Work /> 
        </div>
      </section>
     );
}
 
export default Works;