import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Home from "../layout/pages/home/Home";
import Works from "../layout/pages/works/Works";
import PortfolioDetails from "../layout/pages/portfolioDetails/PortfolioDetails";
import DataCreate from "../layout/pages/dataCreate/DataCreate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/portfolio",
                element: <Works/>
            },
            {
                path: "/portfolio-details",
                element: <PortfolioDetails/>
            },
            {
                path: "/create",
                element: <DataCreate/>
            },
        ]
    }
])


export default router;