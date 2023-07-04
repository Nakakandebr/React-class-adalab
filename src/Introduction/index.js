import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import Addedbutton from "./Addedbutton";
import Checkbox from "./Checkbox";
import './style.css';
import DataFetching from "./DataFetching";



function clickMe(){
    alert ('You clicked me !')
}
const Introduction = ()=>{
return (
    <div>
        <h1 className="heading">What I have learnt about ReactJS</h1>
        <p>It has reusable components</p>
        <p>The writing format is JSX</p>
        <p>It is fast</p>
        <img src={process.env.PUBLIC_URL + 'images/lastone.jpg'} className="images"/>
        <button  className="but2"   onClick={clickMe}>
            click Me
        </button>
        <button  className="but2"  onClick={clickMe}>
    Hi React
</button>
    </div>
    
);
};
export default Introduction;