import React, { useEffect } from "react";

import ProductHero from "../../components/ProductHero";
import { connect } from "react-redux";
import ProductForm from "./ProductForm";
import ErrorCard from "../../components/ErrorCard";
import { fetchProduct, updateProduct } from "../../actions";

const ProductUpdate = (props) => {
    useEffect(() => {
        props.fetchProduct(props.match.params.id);
    }, []);

    if (props.error) return <ErrorCard error={props.error} />;

    return (
        <main className="has-background-light">
            <ProductHero
                title="Update Product"
                subtitle="This works with great accuracy."
            />
            <ProductForm
                initialValues={props.product}
                onFormSubmit={(product) =>
                    props.updateProduct(
                        parseInt(props.match.params.id),
                        product
                    )
                }
                submitTitle="Update Product"
            />
        </main>
    );
};

const mapStateToProps = ({ errors, products }, { match }) => {
    const { id } = match.params;
    if (!parseInt(id))
        return {
            error:
                "Invalid Product Id Provided. Product Id must be an integer.",
        };

    const product = products.filter(
        (product) => product.id === parseInt(id)
    )[0];

    if (!product) return { error: "No product found with provided id." };

    if (errors.updateProduct) return { error: errors.updateProduct };

    return { product: product };
};

export default connect(mapStateToProps, { updateProduct, fetchProduct })(
    ProductUpdate
);
