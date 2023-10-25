import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Home from "../layout/pages/home/Home";
import Works from "../layout/pages/works/Works";
import PortfolioDetails from "../layout/pages/portfolioDetails/PortfolioDetails";

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
        ]
    }
])


export default router;