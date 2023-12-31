import { Link } from "react-router-dom";
import { UserImage } from "../../assets";

/* eslint-disable react/prop-types */
const CharacterCard = ({ character }) => {
    const { name, birth_year, url } = character;

    return (
        <Link  to={`/character/${url.split("/")[5]}`}>
            <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img src={UserImage} alt="character" className="object-cover w-full h-56" />

                <div className="py-5 text-center">
                    <Link
                        to={`/character/${url.split("/")[5]}`}
                        className="block text-xl font-bold text-gray-800 dark:text-white"
                        tabIndex="0"
                        role="link"
                    >
                        {name}
                    </Link>
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                        Birth Year: {birth_year}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default CharacterCard;
