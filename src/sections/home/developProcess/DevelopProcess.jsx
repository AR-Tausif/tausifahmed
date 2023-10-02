
import { developProcess } from "../../../../public/data";
import Process from "./Process";

const DevelopProcess = () => {
    return ( 
        <>
            <h3 className='text-5xl font-bold tracking-tighter'>My tried-and-true <br/> design process</h3>
        <div className="flex sm:flex-wrap justify-center items-center gap-4 py-20">
          {
            developProcess.map(dproc => <Process prcD={dproc} key={dproc.id}/> )
          }       
        </div>
        </>
     );
}
 
export default DevelopProcess;