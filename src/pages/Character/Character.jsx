import { useState, useEffect } from "react";
import axios from "axios";
import Paginetion from "../../shared/Pagination/Pagination";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { characterUrls } from "../../utils/urls/characterUrls";

const Character = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        // Function to fetch character data from the API
        const fetchCharacterData = async () => {
            try {
                const response = await axios.get(
                    `${characterUrls}?page=${page}`
                );

                setCharacters(response?.data?.data);
                setTotalPages(Math.ceil(response?.data?.data?.count / 10));
            } catch (error) {
                console.error("Error fetching character data:", error);
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
                    characters?.results?.map((character, index) => {
                        return (
                            <CharacterCard
                                key={index}
                                character={character}
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
