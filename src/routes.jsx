import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

export default router;