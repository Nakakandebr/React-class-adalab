import { click } from "@testing-library/user-event/dist/click";
import React from "react";
function getMe(){
    alert ("get serious")
}

function clickMe(){
    alert ('Lets start serious work!')
}
const Addedbutton = ()=>{
return (
    <div>
        <h1 className="heading2">What I have learnt about ReactJS</h1>
        <p>It has reusable components</p>
        <p>The writing format is JSX</p>
        <p>It is fast</p>
        <img src={process.env.PUBLIC_URL + 'images/yellowbackground.jpg'} className="images"/>
        <button  className="but1"  onClick={clickMe}>
            click Me
        </button >
        <button className="but1"   onClick={getMe}>
    Get Ready
</button>
    </div>
    
);
};
export default Addedbutton;