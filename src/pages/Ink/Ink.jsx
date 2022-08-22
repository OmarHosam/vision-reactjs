import React from 'react';
import '../../assets/css/DataDisplay.css';
import { Link } from 'react-router-dom';

function Ink() {
    return (
        <React.Fragment>
            <div className="data-wrapper">
                <div className="data-container">
                    <div className="data-title">
                        <h1>Ink</h1>
                        <Link to="/">Go back</Link>
                    </div>
                    <div className="data-content">
                        <ul>
                            <li>Water base
                                <ul>
                                    <li>Dye
                                        <ul>
                                            <li>HP wide format</li>
                                            <li>HP page wide</li>
                                            <li>Epson printer</li>
                                        </ul>
                                    </li>
                                    <li>Photo Pigment
                                        <ul>
                                            <li>Epson wide format</li>
                                            <li>Cannon wide format</li>
                                        </ul>
                                    </li>
                                    <li>DTF Ink</li>
                                    <li>DTG Ink</li>
                                    <li>Sublimation Ink</li>
                                </ul>
                            </li>
                            <li>Eco Solvent
                                <ul>
                                    <li>I3200 Ink</li>
                                </ul>
                            </li>
                            <li>UV
                                <ul>
                                    <li>XP 600 UV Ink</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Ink;