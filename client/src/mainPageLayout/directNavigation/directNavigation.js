import Logo from "../../components/logo/logo";
import "./Navigation.css";
import DirectOptionComponent from "../../components/directOption/directOption";
import React, { useState } from 'react';

function Navigation() {

    const handleClickOpenPhrase = () => {

    }

    return (
        <>
            <nav className="navigation">
                <div className="pageName">
                    <h1>Registry Total</h1>
                </div>

                <div className="directOption">
                    <a onClick={handleClickOpenPhrase}>
                        <DirectOptionComponent icon='car-sport-outline' name='phrase1' usage='Reading data of registred vehicles' />
                    </a>
                    <a><DirectOptionComponent icon='car-outline' name='phrase2' /></a>
                    <a><DirectOptionComponent icon='car-sport-outline' name='phrase3' usage="Registration Statistics" /></a>
                    <a><DirectOptionComponent icon='car-sport-outline' name='phrase4' usage="Vehicles Registration" /></a>
                </div>
                <Logo />
            </nav>
        </>
    );
}

export default Navigation;