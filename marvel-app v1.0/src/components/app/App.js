import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
 
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';
 
const SingleChar = lazy(() => import('../pages/SingleChar'))
const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicsPage = lazy(() => import('../pages/SingleComicPage'));
 
 
const App = () => {
 
    return (
        <Router>
            <div className="app">
                <AppHeader />
                <MainContent />
            </div>
        </Router>
    )
}
 
 
const MainContent = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");
 
    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);
 
 
    return (
        <main
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransistionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}
        >
            <Suspense fallback={<Spinner />}>
                <Routes location={displayLocation} >
                    <Route path="/" element={<MainPage />} />
                    <Route path='comics' element={<ComicsPage />} />
                    <Route path='comics/:comicId' element={<SingleComicsPage />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="/:charName" element={<SingleChar />}/>
                </Routes>
            </Suspense>
        </main>
    )
}
 
export default App;








