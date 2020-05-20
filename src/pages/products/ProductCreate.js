import React from "react";

import ProductHero from "../../components/ProductHero";
import { connect } from "react-redux";
import ProductForm from "./ProductForm";
import ErrorCard from "../../components/ErrorCard";
import { createProduct } from "../../actions";

const ProductCreate = (props) => {
    if (props.error) return <ErrorCard error={props.error} />;

    return (
        <main className="has-background-light">
            <ProductHero
                title="Create new Product"
                subtitle="This works with great accuracy."
            />
            <ProductForm
                onFormSubmit={(product) => props.createProduct(product)}
                submitTitle="Create Product"
            />
        </main>
    );
};

const mapStateToProps = (state) => {
    return { error: state.errors.createProduct };
};

export default connect(mapStateToProps, { createProduct })(ProductCreate);
