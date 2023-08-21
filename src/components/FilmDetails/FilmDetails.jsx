import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

    console.log("filemsData:", filemsData);

    const { title, episode_id, opening_crawl, director, producer, release_date, characters } = filemsData;

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

                <div className="characters-content">
                    
                </div>

            </div>
        </section>
    );
};

export default FilmDetails;