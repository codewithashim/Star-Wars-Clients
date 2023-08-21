import axios from 'axios';
import { useState } from 'react';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/characters/search?q=${searchQuery}`);
            setSearchResults(response.data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error searching for characters:', error);
            setLoading(false);
        }
    };



    return (
        <nav>
            <div className="search-content my-4">
                <div className="flex items-center gap-4 justify-end">
                    {/* <input
                            type="text"
                            placeholder="Search" className="input searchInput border text-sm bg-inherit hero-text h-10  px-4  outline-none "
                        />
                        <button className="common-btn" type="submit">Search</button> */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="input searchInput border text-sm bg-inherit hero-text h-10  px-4  outline-none "
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch} disabled={loading} className="common-btn" type='submit'>
                        Search
                    </button>

                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul>
                            {searchResults.map((character) => (
                                <li key={character.id}>{character.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;