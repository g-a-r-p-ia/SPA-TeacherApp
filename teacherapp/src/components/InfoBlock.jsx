// InfoBlock.jsx
import React from "react";
import "/src/App.css";

const InfoBlock = () => {
    return (
        <div className="info-block">
            <h2 className="info-title">Online school +School</h2>
            <div className="info-items">
                <div className="info-item">
                    <img src="/assets/star.png" alt="Interactive Icon" />
                    <p>Interactive online lessons </p>
                </div>
                <div className="info-item">
                    <img src="/assets/users.png" alt="Group Icon" />
                    <p>Individual and group lessons</p>
                </div>
                <div className="info-item">
                    <img src="/assets/word.png" alt="Adult and Child Icon" />
                    <p>For children and adults</p>
                </div>
            </div>
        </div>
    );
};

export default InfoBlock;
