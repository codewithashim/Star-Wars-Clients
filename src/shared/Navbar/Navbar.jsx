import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav>
            <div className="nav-container my-4 flex items-center justify-between">
                <div className="menu-content">
                    <Link to="/" className='border px-4  py-2 flex items-center gap-2'> <FaHome/> Home</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
