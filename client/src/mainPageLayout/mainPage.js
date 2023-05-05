import Navigation from "./directNavigation/directNavigation";
import "./mainPage.css";
import { useState, createContext, useEffect, useContext } from "react";
import MainPhrase from "./mainPhrase/mainPhrase";

export const activeContext = createContext({});

function MainPage() {

    const [active, setActive] = useState({
        phrase1: true,
        phrase2: false,
        phrase3: false,
        phrase4: false
    });
    
    console.log(active);


    return (
        <>
            <activeContext.Provider value={{ active, setActive }}>
                <div classname='coverMainPage'>
                    <Navigation />

                    <section className="mainPhraseCover">
                        <MainPhrase />
                    </section>
                </div>
            </activeContext.Provider>
        </>
    );
}

export default MainPage;