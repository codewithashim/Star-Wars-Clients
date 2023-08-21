import { useState, useEffect } from "react";
import axios from "axios";
import Paginetion from "../../shared/Pagination/Pagination";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { characterUrls } from "../../utils/urls/characterUrls";

const Character = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCharacterData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${characterUrls}?page=${page}`
                );

                if (response?.data?.data?.results?.length === 0) {
                    setPage(1);
                }

                if (response?.data?.data?.results?.length > 0) {
                    setCharacters(response?.data?.data);
                }

                setCharacters(response?.data?.data);
                setTotalPages(Math.ceil(response?.data?.data?.count / 10));

            } catch (error) {
                console.error("Error fetching character data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCharacterData();
    }, [page]);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const setPageNumber = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    console.log("characters:", characters?.results);

    return (
        <section>
            <div className="character-container grid md:grid-cols-5 gap-6">

                {
                    isLoading ? (
                        <>
                            <div className="flex justify-center items-center my-10 gap-4 flex-col w-fll mx-auto">
                                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> <h1 className="text-2xl">Loading ...</h1>
                            </div>
                        </>
                    ) : characters?.results?.map((character, index) => {
                        return (
                            <CharacterCard
                                key={index}
                                character={character}
                                isLoading={isLoading}
                            />
                        );
                    })
                }

            </div>

            <Paginetion
                page={page}
                totalPages={totalPages}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                setPage={setPageNumber}
            />
        </section>
    );
};

export default Character;
