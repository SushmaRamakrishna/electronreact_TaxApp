import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
             <li>
                <Link to="/about">About </Link>
            </li>
            <li>
                <Link to="/deduct-credits">Deduction & Credits</Link>
            </li>
            <li>
                <Link to="/health-insurance">HealthInsurance</Link>
            </li>
            <li>
                <Link to="/articles-list">Articles</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar
