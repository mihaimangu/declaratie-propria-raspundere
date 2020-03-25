import React from 'react';
import { Button, FormGroup, FormControl, FormLabel, Jumbotron } from "react-bootstrap";

import logo from '../logo.svg';


function Formular(){
    return (
        <div className="formular-wrapper">
             <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Generare formular aplicatie pe propria raspundere
                </p>
            </header>

            <Jumbotron>
                <h1>Declaratie pe propria raspundere</h1>
                <p class="jumbo-paragraph">Aceasta aplicatie te ajuta sa generezi declaratia pe propria raspundere in format digital (PDF). Guvernul a impus folosirea acestui formular, pe perioada crizei generate de noul Covid-19 </p>
            </Jumbotron>

        </div>
    )
}


export default Formular;