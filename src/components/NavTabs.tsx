import { Link, useLocation } from 'react-router-dom';


function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">

            <li className="nav-item">
                <Link
                    to="/Home"

                    className={currentPage === '/Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Potential Candidates"
                    className={currentPage === '/Potential Candidates' ? 'nav-link active' : 'nav-link'}
                >
                    Potential Candidates
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;