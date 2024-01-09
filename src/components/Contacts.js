import React from "react";

export default function Contacts(props){
    return(
        <div className="card">
                <img src= {`../images/${props.image}`} className="card-image"/>
                <div className="card-details">
                    <span>{props.rating}-</span>
                    <span>{props.country}-</span>
                    <span>{props.stack}</span>
                </div>
                <div className="text">
                    <p>{props.name}</p>
                    <p>{props.price}</p>
                </div>
            </div>
    );
}