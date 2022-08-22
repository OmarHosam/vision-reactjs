import React from 'react';
import {
    Routes,
    Route,
	useLocation
} from "react-router-dom";
import NotFound from './pages/404';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import Ink from './pages/Ink';
import Textile from './pages/Textile';
import UAEP from './pages/UAEP';

function App() {
	let location = useLocation();
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
    return (
        <Routes onUpdate={() => window.scrollTo(0, 0)}>
            <Route path="/" element={<Home />} />
            <Route path="/textile" element={<Textile />} />
            <Route path="/coming" element={<ComingSoon />} />
            <Route path="/about" element={<About />} />
            <Route path="/ink" element={<Ink />} />
            <Route path="/uaep" element={<UAEP />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;