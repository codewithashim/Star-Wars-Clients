import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home/Home";
import CharacterDetail from "../components/CharacterDetail/CharacterDetail";
import FilmDetails from "../components/FilmDetails/FilmDetails";

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
            },
            {
                path: "/film/:id",
                element: <FilmDetails/>
            }

        ]
    }
])

export default routes;
