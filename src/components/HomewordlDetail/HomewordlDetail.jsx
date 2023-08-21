import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { characterUrls } from "../../utils/urls/characterUrls";

const HomewordlDetail = () => {
    const { id } = useParams();
    const [homeworldData, setHomeworldeData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHomeworldData = async () => {
            try {
                const response = await axios.get(
                    `${characterUrls}/${id}/homeworld`
                );
                setHomeworldeData(response?.data);
            } catch (error) {
                console.error("Error fetching character data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchHomeworldData();
    }, [id])

    const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, films, residents } = homeworldData

    if (loading) {
        return (
            <div className="flex justify-center items-center my-10 gap-4 flex-col w-fll mx-auto">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> <h1 className="text-2xl">Loading ...</h1>
            </div>
        );
    }


    return (
        <section>
            <div>
                <h2 className="text-2xl font-semibold text-center mb-4">
                    Details of {name}
                </h2>
            </div>
            <div className="lg:w-[80%] md:w-[80%] w-[95%] col-span-5 md:px-[60px] md:py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg  py-10 px-2">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <tbody>
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Name :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {name}
                                            </td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Rotation Period :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {rotation_period}
                                            </td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Orbital Period :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {orbital_period}
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Diameter :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {diameter}
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Climate :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {climate}
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Gravity :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {gravity}
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Terrain :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {terrain}
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Surface Water :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {surface_water}
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Population :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {population}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="filems-content">
                    <h2 className="text-2xl font-semibold my-4">
                        Films
                    </h2>

                    <div className="filems">
                        {
                            films?.map((film, index) => {
                                return (
                                    <div key={index} className="my-2 border p-4">
                                        <Link to={`/film/${film.split("/")[5]}`} className="text-blue-500 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-500 ">
                                            Filems {index + 1}
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>

                <div className="residents-content">
                    <h2 className="text-2xl font-semibold my-4">
                        Residents
                    </h2>
                    <div className="residents">
                        {
                            residents?.map((resident, index) => {
                                return (
                                    <div key={index} className="my-2 border p-4">
                                        <Link to={`/character/${resident.split("/")[5]}`} className="text-blue-500 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-500 ">
                                            Resident {index + 1}
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HomewordlDetail;