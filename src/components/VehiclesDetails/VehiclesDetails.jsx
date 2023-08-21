import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { characterUrls } from "../../utils/urls/characterUrls";

const VehiclesDetails = () => {
    const { id } = useParams();
    const [vehiclesData, setVehiclesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVehiclesData = async () => {
            try {
                const response = await axios.get(
                    `${characterUrls}/${id}/vehicles`
                );
                setVehiclesData(response?.data);
            } catch (error) {
                console.error("Error fetching character data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchVehiclesData();
    }, [id])

    const { model, name, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class, films, pilots } = vehiclesData


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
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <tbody>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    Model
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {model}
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    Name
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {name}
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    Manufacturer
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {manufacturer}
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    Cost In Credits
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {cost_in_credits}
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    Length
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {length}
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    Max Atmosphering Speed
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {max_atmosphering_speed}
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    Crew
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {crew}
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    Passengers
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {passengers}
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">Cargo Capacity</td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {cargo_capacity}
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">Consumables</td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {consumables}
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">Vehicle Class</td>
                                                <td className="whitespace-nowrap px-6 py-4">

                                                    {vehicle_class}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pilots-content">
                    <h2 className="text-2xl font-semibold my-4">
                        Pilots
                    </h2>
                    <div className="pilots  ">
                        {
                            pilots?.map((pilot, index) => {
                                return (
                                    <div className="my-2 border p-4" key={index} >
                                        <Link to={`/character/${pilot?.split('/')[5]}`} className="text-blue-500 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-500 ">
                                            Piliots  {index + 1}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="films-content">
                    <h2 className="text-2xl font-semibold my-4">
                        Films
                    </h2>
                    <div className="films ">
                        {
                            films?.map((film, index) => {
                                return (
                                    <div className="my-2 border p-4" key={index}>
                                        <Link to={`/film/${film?.split('/')[5]}`} className="text-blue-500 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-500 ">
                                            Films  {index + 1}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VehiclesDetails;