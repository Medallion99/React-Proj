import React from "react";
import Image from "../images/main_photo.jpg";

export default function Card(){
    return(
        <div className="class-container">
            <div className="card">
                <img src= {Image} className="card-image"/>
                <div className="card-details">
                    <span>5.0</span>
                    <span>Nigeria</span>
                    <span>Asp.Net</span>
                </div>
                <div className="text">
                    <p>Journey into Software</p>
                    <p>From $136 / Person</p>
                </div>
            </div>
            <div className="card">
                <img src= {Image} className="card-image"/>
                <div className="card-details">
                    <span>5.0</span>
                    <span>Nigeria</span>
                    <span>Asp.Net</span>
                </div>
                <div className="text">
                    <p>Journey into Software</p>
                    <p>From $136 / Person</p>
                </div>
            </div>
            <div className="card">
                <img src= {Image} className="card-image"/>
                <div className="card-details">
                    <span>5.0</span>
                    <span>Nigeria</span>
                    <span>Asp.Net</span>
                </div>
                <div className="text">
                    <p>Journey into Software</p>
                    <p>From $136 / Person</p>
                </div>
            </div>
        </div>
    );
}