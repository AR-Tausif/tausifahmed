import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Home from "../layout/pages/home/Home";
import Works from "../layout/pages/works/Works";

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
                path: "/works",
                element: <Works/>
            },
        ]
    }
])


export default router;