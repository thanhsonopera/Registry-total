import Phrase1 from "../allPhrase/phrase1";
import { activeContext } from '../../mainPageLayout/mainPage';
import { useContext } from 'react';
import Phrase2 from "../allPhrase/phrase2";
import Phrase3 from "../allPhrase/phrase3";
import Phrase4 from "../allPhrase/phrase4";


function MainPhrase() {

    const context = useContext(activeContext);


    function displayMain() {
        for (let key in context.active) {
            if (context.active[key] === true) {
                switch (key) {
                    case 'phrase1':
                        return <Phrase1 />;
                    case 'phrase2':
                        return <Phrase2 />;
                    case 'phrase3':
                        return <Phrase3 />;
                    case 'phrase4':
                        return <Phrase4 />;
                    default:
                        return <Phrase1 />;
                }
            }
        }
    }

    return (
        <>
            {displayMain()}
        </>
    );
}

export default MainPhrase;