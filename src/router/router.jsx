import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home/Home";
import CharacterDetail from "../components/CharacterDetail/CharacterDetail";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/character/:id",
                element: <CharacterDetail />
            }

        ]
    }
])

export default routes;
