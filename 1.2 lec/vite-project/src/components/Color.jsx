import React from 'react';
import "./Color.css";

const Color = () => {
    function dothis(e) {
        console.log(e.target);
        e.target.style.transition = "background-color 0.2s";
        e.target.style.backgroundColor = "red";
    }

    function removeHoverEffect(e) {
        e.target.style.backgroundColor = "";
    }

    return (
        <div className="tame" onMouseOver={dothis} onMouseOut={removeHoverEffect}>
            <div className="rr">heeeeeee</div>
            <div className="bb">fffff</div>
            <div className="aa">ffer4re</div>
        </div>
    );
}

export default Color;