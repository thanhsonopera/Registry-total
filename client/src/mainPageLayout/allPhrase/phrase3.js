import { Period1, Period2 } from "./p3Comp";
import React, { useState } from "react";
// Điền thông tin của xe để đăng kí xe

const Phrase3 = () => {

    const [period, setPeriod] = useState({
        period1: true,
        period2: false
    });

    const switchPeriod = () => {
        setPeriod({
            period1: !period.period1,
            period2: !period.period2
        });
    }

    return (
        <>
            <div className="phrase3">
                <div className="direct">
                    <a className="direct-button" onClick={switchPeriod}>Period 1</a>
                    <a className="direct-button" onClick={switchPeriod}>Period 2</a>
                </div>

                <div className="display-use">
                    {period.period1 ? <Period1 /> : <Period2 />}
                </div>
            </div>
        </>
    );

};

export default Phrase3;