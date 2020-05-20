import React from "react";
import { reduxForm, Field } from "redux-form";

class ProductForm extends React.Component {
    renderTextInput = (form) => {
        const { input, placeholder, meta } = form;
        return (
            <div>
                <input
                    className={`input has-text-dark has-background-white is-family-monospace ${
                        meta.error && meta.touched ? "is-danger" : "is-primary"
                    }`}
                    {...input}
                    placeholder={placeholder}
                />
                <p className="has-text-danger">
                    {meta.error && meta.touched ? meta.error : null}
                </p>
            </div>
        );
    };

    render() {
        return (
            <form
                className="container product-create-form"
                onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}
            >
                <div className="field margin-top-30">
                    <label className="label">Product Title</label>
                    <Field
                        name="title"
                        component={this.renderTextInput}
                        placeholder="Enter Product Title"
                    />
                </div>
                <div className="field margin-top-30">
                    <label className="label">Product Price</label>
                    <Field
                        name="price"
                        component={this.renderTextInput}
                        placeholder="Enter Product Price"
                    />
                </div>

                <div className="field margin-top-30">
                    <label className="label">Product Description</label>
                    <Field
                        name="description"
                        component={this.renderTextInput}
                        placeholder="Enter Product Description"
                    />
                </div>
                <button className="button is-primary is-fullwidth">
                    {this.props.submitTitle || "Submit"}
                </button>
            </form>
        );
    }
}

const validate = ({ title, price, description }) => {
    const errors = {};

    if (!title || title.length < 5)
        errors.title = "Title should be more than 5 characters";

    if (!price || !parseFloat(price))
        errors.price = "Price should be a numerical value.";

    if (price && !parseFloat(price) < 0)
        errors.price = "Price cannot be negative.";

    if (!description || description.length < 5)
        errors.description = "Description should be more than 5 characters.";

    if (description && description.length > 300)
        errors.description = "Description should be less than 300 characters.";

    return errors;
};

export default reduxForm({
    form: "productCreate",
    validate: validate,
})(ProductForm);
