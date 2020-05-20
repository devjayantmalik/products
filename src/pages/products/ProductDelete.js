import React, { useEffect } from "react";

import ProductHero from "../../components/ProductHero";
import { connect } from "react-redux";
import ProductForm from "./ProductForm";
import ErrorCard from "../../components/ErrorCard";
import { fetchProduct, deleteProduct } from "../../actions";

const ProductDelete = (props) => {
    useEffect(() => {
        props.fetchProduct(props.match.params.id);
    }, []);

    if (props.error) return <ErrorCard error={props.error} />;

    return (
        <main className="has-background-light">
            <ProductHero
                title="Delete Product"
                subtitle="This works with great accuracy."
            />
            <ProductForm
                initialValues={props.product}
                onFormSubmit={(product) =>
                    props.deleteProduct(
                        parseInt(props.match.params.id),
                        product
                    )
                }
                submitTitle="Delete Product"
            />
        </main>
    );
};

const mapStateToProps = (state, { match }) => {
    const { id } = match.params;
    if (!parseInt(id))
        return {
            error:
                "Invalid Product Id Provided. Product Id must be an integer.",
        };

    const product = state.products.filter(
        (product) => product.id === parseInt(id)
    )[0];

    if (!product) return { error: "No product found with provided id." };

    if (state.errors.deleteProduct)
        return { error: state.errors.deleteProduct };

    return { product: product };
};

export default connect(mapStateToProps, { deleteProduct, fetchProduct })(
    ProductDelete
);
