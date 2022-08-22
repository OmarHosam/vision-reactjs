import React from 'react';
import './Right.css';
import { useNavigate } from 'react-router-dom';

// the right component will render the printing thing
// on the right
// ttsegypt.com
function Right(props) {
    const nav = useNavigate();
    const { title, redirect } = props;
    return (
        <div className="right-wrapper">
            <div className="right-container">
                <h3>{title}</h3>
                <button onClick={() => nav(redirect)}>Visit Website <i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    );
}

export default Right;