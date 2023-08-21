import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home/Home";
import CharacterDetail from "../components/CharacterDetail/CharacterDetail";
import FilmDetails from "../components/FilmDetails/FilmDetails";
import HomewordlDetail from "../components/HomewordlDetail/HomewordlDetail";
import StarshipDetails from "../components/StarshipDetails/StarshipDetails";
import VehiclesDetails from "../components/VehiclesDetails/VehiclesDetails";

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
                element: <FilmDetails />
            },
            {
                path: "/homeworld/:id",
                element: <HomewordlDetail />
            },
            {
                path: "/vehicle/:id",
                element: <VehiclesDetails />
            },
            {
                path: "/starship/:id",
                element: <StarshipDetails />
            }

        ]
    }
])

export default routes;
