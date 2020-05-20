import React from "react";

const ErrorCard = ({ error }) => {
    return (
        <div className="container" style={{ marginTop: "30px" }}>
            <p className="notification is-danger">{error}</p>
        </div>
    );
};

export default ErrorCard;
