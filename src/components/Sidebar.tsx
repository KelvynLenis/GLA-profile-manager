import { Link, useHistory } from 'react-router-dom';
import '../styles/sidebar.scss';

export function Sidebar() {
    return (
        <>
            <div className='open'>
                <img src="/assets/list.svg" alt="sidebar list" />
                <ul className='sidebar'>
                    <li>
                        <Link to="/smh" className='Link'><button>SMH</button></Link>
                        <Link to="/chest" className='Link'><button>Chest</button></Link>
                        <Link to="/" className='Link'><button>Char</button></Link>
                        <Link to="/profile" className='Link'><button>Profile</button></Link>
                        {/* <button>SMH</button>
                        <button>Char</button>
                        <button>Chest</button>
                        <button>Profile</button> */}
                    </li>
                </ul>
            </div>
        </>
    );
}