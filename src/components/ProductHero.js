import React from "react";

const ProductHero = ({ title, subtitle }) => {
    return (
        <section className="hero is-medium is-dark is-bold">
            <div className="hero-body has-text-centered">
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
            </div>
        </section>
    );
};

export default ProductHero;
