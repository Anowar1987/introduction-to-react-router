import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <h2>My Website</h2>
                <Link to="/home">Home</Link>
                <Link to="users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact with us</Link>
               
            </nav>
            
        </div>
    );
};

export default Header;