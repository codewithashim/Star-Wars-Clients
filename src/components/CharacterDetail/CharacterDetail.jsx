import { useEffect, useState } from "react";
import { characterUrls } from "../../utils/urls/characterUrls";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const CharacterDetail = () => {
    const { id } = useParams();
    const [characterSpacificeData, setCharacterSpacificeData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacterSpacificeData = async () => {
            try {
                const response = await axios.get(
                    `${characterUrls}/${id}`
                );
                setCharacterSpacificeData(response?.data);
            } catch (error) {
                console.error("Error fetching character data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCharacterSpacificeData();
    })

    const { name, height, skin_color, birth_year, gender, homeworld, films, vehicles, starships } = characterSpacificeData;

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
                                                Height :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {height}
                                            </td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Gender :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {gender}
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Birth Year :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {birth_year}
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Skin Color :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {skin_color}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="homeworld-content">
                    <h2 className="text-2xl font-semibold my-4">
                        Homeworld
                    </h2>

                    <div className="homeworld border p-4">
                        <Link to={`/homeworld/${homeworld.split("/")[5]}`} className="text-blue-500 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-500 ">
                            Homeworld   {homeworld.split("/")[5]}
                        </Link>
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

                <div className="vehicles-content">
                    <h2 className="text-2xl font-semibold my-4">
                        Vehicles
                    </h2>
                    <div className="vechical">
                        {
                            vehicles?.map((vehicle, index) => {
                                return (
                                    <div key={index} className="my-2 border p-4">
                                        <Link to={`/vehicle/${vehicle.split("/")[5]}`} className="text-blue-500 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-500 ">
                                            Vehicle {index + 1}
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="starships-content">
                    <h2 className="text-2xl font-semibold my-4">
                        Starships
                    </h2>

                    <div className="starships">
                        {
                            starships?.map((starship, index) => {
                                return (
                                    <div key={index} className="my-2 border p-4">
                                        <Link to={`/starship/${starship.split("/")[5]}`} className="text-blue-500 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-500 ">
                                            Starship {index + 1}
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

export default CharacterDetail;