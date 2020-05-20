import React, { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isActive = isOpen === true ? "is-active" : "";
    return (
        <header>
            <nav className="navbar is-secondary">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        Shop
                    </Link>

                    <div
                        role="button"
                        className={`navbar-burger burger ${isActive}`}
                        data-target="#primaryNav"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="primaryNav" className={`navbar-menu ${isActive}`}>
                    <ul className="navbar-end">
                        <li className="navbar-item">
                            <Link to="/products">Products</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/products/create">Create Product</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
