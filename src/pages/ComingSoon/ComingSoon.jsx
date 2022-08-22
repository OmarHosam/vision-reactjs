import React from 'react';
import './ComingSoon.css';
import { Link } from 'react-router-dom';

function ComingSoon() {
    return (
        <div className="coming-wrapper">
            <div className="coming-container">
                <h1>Coming Soon</h1>
                <p>We are working hard to bring you the best service in the industry. We are sorry for the inconvenience.</p>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    )
}

export default ComingSoon;