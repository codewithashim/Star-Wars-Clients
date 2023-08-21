import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { characterUrls } from '../../utils/urls/characterUrls';

const StarshipDetails = () => {
    const { id } = useParams();
    const [starshipData, setStarshipData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStarshipData = async () => {
            try {
                const response = await axios.get(
                    `${characterUrls}/${id}/starships`
                );
                setStarshipData(response?.data);
            } catch (error) {
                console.error("Error fetching character data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStarshipData();
    }, [id])

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
                    Details of
                </h2>
            </div>
            <div className="lg:w-[80%] md:w-[80%] w-[95%] col-span-5 md:px-[60px] md:py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg  py-10 px-2">

            </div>

        </section>
    );
};

export default StarshipDetails;