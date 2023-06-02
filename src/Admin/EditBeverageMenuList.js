import React from "react";

const Beverage = ({ beverage }) => {
    return (
        <div className="beverageTnD">
            <div className="beverage-title">{beverage.title}</div>
            <div className="beverage-detail">{beverage.detail}</div>
        </div>
    );
};

export default Beverage;