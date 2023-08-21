import { useEffect, useState } from "react";
import { characterUrls } from "../../utils/urls/characterUrls";
import axios from "axios";

const CharacterDetail = () => {
    const { id } = useParams();
    const [characterSpacificeData, setCharacterSpacificeData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacterSpacificeData = async () => {
            try {
                const response = await axios.get(
                    `${characterUrls}/${id}`
                );

                setCharacterSpacificeData(response?.data?.data);
            } catch (error) {
                console.error("Error fetching character data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacterSpacificeData();
    })


    return (
        <section>
            CharacterDetail
        </section>
    );
};

export default CharacterDetail;