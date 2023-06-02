import React from "react";

const Coffee = ({ coffee }) => {
    return (
        <div className="coffeeTnD">
            <div className="coffee-title">{coffee.title}</div>
            <div className="coffee-detail">{coffee.detail}</div>
        </div>
    );
};

export default Coffee;