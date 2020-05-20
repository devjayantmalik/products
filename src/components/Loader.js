import React from "react";

const Loader = () => {
    return (
        <section className="hero is-success is-fullheight">
            <div className="hero-body has-text-centered">
                <div className="container">
                    <progress className="progress is-large is-info" max="100">
                        60%
                    </progress>
                    <h1 className="title">Loading.....</h1>
                    <h2>Please wait, We will be ready within a moment.</h2>
                </div>
            </div>
        </section>
    );
};

export default Loader;
