// UV And Eco-solvent Printer
import React from 'react';
import '../../assets/css/DataDisplay.css';
import { Link } from 'react-router-dom';

function UAEP() {
    return (
        <React.Fragment>
            <div className="data-wrapper">
                <div className="data-container">
                    <div className="data-title">
                        <h2>UV & Eco-solvent Printer</h2>
                        <Link to="/">Go back</Link>
                    </div>
                    <div className="data-content">
                        <ul>
                            <li>UV 90*60
                                <ul>
                                    <li>XP600 printhead printer</li>
                                    <li>I3200 printhead printer</li>
                                </ul>
                            </li>
                            <li>Eco solvent printer
                                <ul>
                                    <li>1.8 m with one 13200 printhead printer</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UAEP;