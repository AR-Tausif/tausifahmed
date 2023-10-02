import { Outlet } from "react-router-dom";
import NavigationBar from "../components/ui/Navbar"
import Footer from "../components/ui/Footer"

const App = () => {
    return ( 
        <>
            <NavigationBar />
            <Outlet/>
            <Footer/>
        </>
     );
}
 
export default App;