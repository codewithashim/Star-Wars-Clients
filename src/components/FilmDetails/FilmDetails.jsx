import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { characterUrls } from "../../utils/urls/characterUrls";
import axios from "axios";

const FilmDetails = () => {
    const { id } = useParams();
    const [filemsData, setFilemsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFilemsData = async () => {
            try {
                const response = await axios.get(
                    `${characterUrls}/${id}/films`
                );
                setFilemsData(response?.data);
            } catch (error) {
                console.error("Error fetching character data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFilemsData();
    })

    const { title, episode_id, opening_crawl, director, producer, release_date, characters, planets, starships, vehicles } = filemsData;

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
                    Details of {title}
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
                                                Name:
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {title}
                                            </td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Episode Id :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {episode_id}
                                            </td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Opening Crawl :
                                            </td>
                                            <td className="whitespace-nowrap w-96 px-6 py-4">
                                                {opening_crawl}
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Director :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {director}
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Producer :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {producer}
                                            </td>
                                        </tr>

                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                Release Date :
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {release_date}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="planets-content">
                    <h2 className="text-2xl font-semibold my-4">
                        Planets
                    </h2>

                    <div className="planets border p-4">
                        {
                            planets?.map((planet, index) => {
                                return (
                                    <div key={index} className="my-2 border p-4">
                                        <Link to={`/homeworld/${planet.split("/")[5]}`} className="text-blue-500 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-500 ">
                                            Planet   {planet.split("/")[5]}
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>

                <div className="characters-content">
                    <h2 className="text-2xl font-semibold my-4">
                        Characters
                    </h2>

                    <div className="characters border p-4">
                        {
                            characters?.map((character, index) => {
                                return (
                                    <div key={index} className="my-2 border p-4">
                                        <Link to={`/character/${character.split("/")[5]}`} className="text-blue-500 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-500 ">
                                            Character   {character.split("/")[5]}
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

                    <div className="vehicles border p-4">
                        {
                            vehicles?.map((vehicle, index) => {
                                return (
                                    <div key={index} className="my-2 border p-4">
                                        <Link to={`/vehicle/${vehicle.split("/")[5]}`} className="text-blue-500 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-500 ">
                                            Vehicle   {vehicle.split("/")[5]}
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

                    <div>
                        {
                            starships?.map((starship, index) => {
                                return (
                                    <div key={index} className="my-2 border p-4">
                                        <Link to={`/starship/${starship.split("/")[5]}`} className="text-blue-500 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-500 ">
                                            Starship   {starship.split("/")[5]}
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

export default FilmDetails;