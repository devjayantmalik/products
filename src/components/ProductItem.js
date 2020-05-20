import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
    return (
        <article className="card product-card margin-top-30">
            <header className="card-header">
                <h2 className="card-header-title">{product.title}</h2>
            </header>
            <div className="card-content">
                <p className="content">{product.description}</p>
                <p className="content">
                    Price <strong>Rs. {product.price}</strong>
                </p>
            </div>
            <footer className="card-footer">
                <Link
                    to={`/products/${product.id}`}
                    className="card-footer-item"
                >
                    Edit
                </Link>
                <Link
                    to={`/products/delete/${product.id}`}
                    className="card-footer-item"
                >
                    Delete
                </Link>
            </footer>
        </article>
    );
};

export default ProductItem;
