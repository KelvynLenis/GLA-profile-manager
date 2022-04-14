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
                    </li>
                    <li>
                        <Link to="/chest" className='Link'><button>Chest</button></Link>
                    </li>
                    <li>
                        <Link to="/" className='Link'><button>Char</button></Link>
                    </li>
                </ul>
            </div>
        </>
    );
}