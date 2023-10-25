import { createContext } from "react";

export const DataContext = createContext(null)

const DataProvider = ({children})=>{
    const data = {
        
    }
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export default DataProvider;