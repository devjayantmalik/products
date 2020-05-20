import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";
import ErrorCard from "../../components/ErrorCard";
import ProductItem from "../../components/ProductItem";

const Products = ({ error, products, fetchProducts }) => {
    useEffect(() => {
        fetchProducts();
    }, []);

    if (error && error !== null) return <ErrorCard error={error} />;

    if (products.length < 1) return <ErrorCard error="No items found." />;

    return (
        <main className="container">
            <section className="columns" style={{ flexWrap: "wrap" }}>
                {renderProducts(products)}
            </section>
        </main>
    );
};

const renderProducts = (products) => {
    return products.map((product) => (
        <div className="column is-4" key={product.id}>
            <ProductItem product={product} />
        </div>
    ));
};

const mapStateToProps = ({ products }) => {
    return { products };
};

export default connect(mapStateToProps, { fetchProducts })(Products);
