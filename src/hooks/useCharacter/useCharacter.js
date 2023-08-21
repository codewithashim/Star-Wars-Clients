import { useEffect, useState } from 'react';
import { characterUrls } from '../../utils/urls/characterUrls';

const useCharacter = () => {
    const [characterData, setCharacterData] = useState([]);
    useEffect(() => {
        fetch(`${characterUrls}`)
            .then(response => response.json())
            .then(data => setCharacterData(data.data));
    }, []);

    return {
        characterData
    };
};

export default useCharacter;