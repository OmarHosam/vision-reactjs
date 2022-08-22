import React from 'react';
import './Left.css';
import { useNavigate } from 'react-router-dom';

// the left component will render the printing thing
// on the left
// ttsegypt.com
function Left(props) {
    const nav = useNavigate();
    const { title, redirect } = props;
    return (
        <div className="left-wrapper">
            <div className="left-container">
                <h3>{title}</h3>
                <button onClick={() => nav(redirect)}>Visit Website <i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    );
}

export default Left;