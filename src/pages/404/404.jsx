import React from 'react';
import './404.css';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default NotFound;