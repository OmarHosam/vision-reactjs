import React, { useRef, useState } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import { Link } from 'react-router-dom';
import Right from './Right/Right';
import Left from './Left/Left';
import './Home.css';

function Home() {
    // the way I've coded this is not the best way to do it
    // but it's the easiest way to do it (i think)
    // right now we need 5 refs to check if the element is on screen
    // also we need 5 states to make sure that when the element is on screen it doesn't get rendered again
    const [onScreen1, setOnScreen1] = useState(false);
    const [onScreen2, setOnScreen2] = useState(false);
    const [onScreen3, setOnScreen3] = useState(false);
    const [onScreen4, setOnScreen4] = useState(false);
    const [onScreen5, setOnScreen5] = useState(false);
    const onScreen1Ref = useRef(null);
    const onScreen2Ref = useRef(null);
    const onScreen3Ref = useRef(null);
    const onScreen4Ref = useRef(null);
    const onScreen5Ref = useRef(null);
    const isIntersecting1 = useOnScreen(onScreen1Ref);
    const isIntersecting2 = useOnScreen(onScreen2Ref);
    const isIntersecting3 = useOnScreen(onScreen3Ref);
    const isIntersecting4 = useOnScreen(onScreen4Ref);
    const isIntersecting5 = useOnScreen(onScreen5Ref);
    if (isIntersecting1 && !onScreen1) {
        setOnScreen1(true);
    }
    if (isIntersecting2 && !onScreen2) {
        setOnScreen2(true);
    }
    if (isIntersecting3 && !onScreen3) {
        setOnScreen3(true);
    }
    if (isIntersecting4 && !onScreen4) {
        setOnScreen4(true);
    }
    if (isIntersecting5 && !onScreen5) {
        setOnScreen5(true);
    }
    return (
        <div className="home-background">
            <div className="logo-dropdown">
                <div className="logo-dropdown-container">
                    <img src={require('../../assets/logo-new-vision.png')} alt="Vision" />
                    <Link to="/"><p>Vision Group</p></Link>
                    <span><Link to="/about">About Vision</Link></span>
                </div>
            </div>
            <br className="seperator" />
            <div ref={onScreen1Ref} className={onScreen1 ? "home-wrapper showed" : "home-wrapper"}>
                <Left
                    title="TEXTILE"
                    redirect="/textile"
                />
                <Right 
                    title="UV & ECO SOLVENT"
                    redirect="/uaep"
                />
            </div>
            <div ref={onScreen2Ref} className={onScreen2 ? "home-wrapper2 showed" : "home-wrapper2"}>
                <Left
                    title="PHOTO STUDIO"
                    redirect="/coming"
                />
                <Right
                    title="PRINTING MEDIA"
                    redirect="/coming"
                />
            </div>
            <div ref={onScreen3Ref} className={onScreen3 ? "home-wrapper showed" : "home-wrapper"}>
                <Left
                    title="INK"
                    redirect="/ink"
                />
                <Right 
                    title="COPIER & TONER & SPARE PARTS"
                    redirect="/coming"
                />
            </div>
            <div ref={onScreen4Ref} className={onScreen4 ? "home-wrapper2 showed" : "home-wrapper2"}>
                <Left
                    title="USED COPIER"
                    redirect="/coming"
                />
                <Right
                    title="WIDE FORMAT"
                    redirect="/coming"
                />
            </div>
            <div ref={onScreen5Ref} className={onScreen5 ? "home-wrapper showed" : "home-wrapper"}>
                <Left
                    title="LASER CUTTING"
                    redirect="/coming"
                />
                <Right 
                    title="OFFICE SUPPLIES & MACHINERY"
                    redirect="/coming"
                />
            </div>
        </div>
    );
}

export default Home;