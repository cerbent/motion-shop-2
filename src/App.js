import './App.scss'
import Header from "./components/Header/Header";
import './styles/style.scss'
import Hero from "./pages/home/main/Hero";
import Faq from "./pages/faq/Faq";
import {Route, Routes} from "react-router-dom";
import Index from "./pages/home";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Index/>}/>
                <Route path={'/faq'} element={<Faq/>}/>
            </Routes>

        </>
    );
}

export default App;
