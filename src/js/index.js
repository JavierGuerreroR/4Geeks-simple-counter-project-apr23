//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
// import "";

//import your own components
import Home from "./component/home.jsx";

let milisecunits = 0;
let milisectens = 0;
let secunits = 0;
let sectens = 0;
let minunits = 0;
let mindecs = 0;

// let cdmilisecunits = 10;
// let cdmilisectens = 10;
// let cdsecunits = 9;
// let cdsectens = 5;
// let cdminunits = 9;
// let cdmindecs = 5;

//simple counter function

setInterval(function (){
    milisecunits++;
    if(milisecunits === 10){
        milisecunits=0;
        milisectens++;
    } 
    if(milisectens === 10){
        milisectens=0;
        secunits++;
    }
    if(secunits === 9){
        secunits=0;
        sectens++;
    }
    if(sectens === 6){
        sectens=0;
        minunits++;
    }
    if(minunits === 9){
        minunits=0;
        mindecs++;
    }
    if(mindecs === 6){
        milisecunits=0;
        milisectens=0;
        secunits=0;
        sectens=0;
        minunits=0;
        mindecs=0;   
    }
    console.log(milisecunits,milisectens)
    ReactDOM.render(<Home milisecunits={milisecunits} milisectens={milisectens} secunits={secunits} sectens={sectens} minunits={minunits} mindecs={mindecs}/>, document.querySelector("#app"));
}, 10)

setInterval(function (){
    cdmilisecunits--;
    if(cdmilisecunits === 0){
        cdmilisecunits=10;
        cdmilisectens--;
    } 
    if(cdmilisectens === 0){
        cdmilisectens=10;
        cdsecunits--;
    }
    if(cdsecunits === 9){
        cdsecunits=0;
        cdsectens--;
    }
    if(cdsectens === 6){
        cdsectens=0;
        cdminunits--;
    }
    if(cdminunits === 9){
        cdminunits=0;
        cdmindecs--;
    }

    console.log(milisecunits,milisectens)
    ReactDOM.render(<Home cdmilisecunits={cdmilisecunits} cdmilisectens={cdmilisectens} cdsecunits={cdsecunits} cdsectens={cdsectens} cdminunits={cdminunits} cdmindecs={cdmindecs}/>, document.querySelector("#app"));
}, 10)


//render your react application

