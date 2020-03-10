import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Personal</Link>
            </li>           
            <li>
                <Link to="/articles-list">Articles</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;