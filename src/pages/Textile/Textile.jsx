import React from 'react';
import '../../assets/css/DataDisplay.css';
import { Link } from 'react-router-dom';

function Textile() {
    return (
        <React.Fragment>
            <div className="data-wrapper">
                <div className="data-container">
                    <div className="data-title">
                        <h1>Textile</h1>
                        <Link to="/">Go back</Link>
                    </div>
                    <div className="data-content">
                        <ul>
                            <li>DTF
                                <ul>
                                    <li>
                                        60cm printer
                                    </li>
                                </ul>
                            </li>
                            <li>Sublimation
                                <ul>
                                    <li>
                                        4 head printer
                                    </li>
                                    <li>
                                        8 head printer
                                    </li>
                                </ul>
                            </li>
                            <li>DTG
                                <ul>
                                    <li>
                                        Paste and services
                                    </li>
                                </ul>
                            </li>
                            <li>Thermal Heat Vinyl</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Textile;