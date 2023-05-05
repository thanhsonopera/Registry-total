import './directOption.css';
import { useContext, useRef } from 'react';
// import { activeContext } from '../../mainPage.js';
import { activeContext } from '../../mainPageLayout/mainPage';

function DirectOptionComponent(props) {


    const handleClick = () => {
        context.setActive((pre) => {
            const newActive = {
                ...pre,
                phrase1: false,
                phrase2: false,
                phrase3: false,
                phrase4: false,
                [props.name]: true
            };

            

            return newActive;
        });
    }

    const optionRef = useRef(null);

    const context = useContext(activeContext);


    // if (context.active === props.name && optionRef.current !== null) {
    //     // xử lý khi active
    // }

    return (
        <>
            <div className="direct__option" onClick={handleClick} ref={optionRef}>
                <div className='direct__option-icon'>
                    <ion-icon name={props.icon}></ion-icon>
                </div>

                <div className='direct__option-name'>
                    <h3>{props.usage}</h3>
                </div>
            </div>
        </>
    );
}

export default DirectOptionComponent;