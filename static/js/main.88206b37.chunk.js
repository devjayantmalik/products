(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,a){e.exports=a(231)},231:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(41),o=a.n(n),l=a(6),u=a(105),i=a(18),s=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],o=!0===a?"is-active":"";return c.a.createElement("header",null,c.a.createElement("nav",{className:"navbar is-secondary"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement(i.a,{className:"navbar-item",to:"/"},"Shop"),c.a.createElement("div",{role:"button",className:"navbar-burger burger ".concat(o),"data-target":"#primaryNav",onClick:function(){return n(!a)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))),c.a.createElement("div",{id:"primaryNav",className:"navbar-menu ".concat(o)},c.a.createElement("ul",{className:"navbar-end"},c.a.createElement("li",{className:"navbar-item"},c.a.createElement(i.a,{to:"/products"},"Products")),c.a.createElement("li",{className:"navbar-item"},c.a.createElement(i.a,{to:"/products/create"},"Create Product"))))))},d=a(8),m=a(99),p=a.n(m).a.create({baseURL:"https://fake-json-products-data.herokuapp.com"}),E=a(9),h=Object(E.b)(),f=function(e){return function(t){p.get("/products/".concat(e)).then((function(e){t({type:"FETCH_PRODUCT",payload:e.data})})).catch((function(e){t({type:"FETCH_PRODUCT_ERROR",payload:e})}))}},b=function(e){var t=e.error;return c.a.createElement("div",{className:"container",style:{marginTop:"30px"}},c.a.createElement("p",{className:"notification is-danger"},t))},P=function(e){var t=e.product;return c.a.createElement("article",{className:"card product-card margin-top-30"},c.a.createElement("header",{className:"card-header"},c.a.createElement("h2",{className:"card-header-title"},t.title)),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"content"},t.description),c.a.createElement("p",{className:"content"},"Price ",c.a.createElement("strong",null,"Rs. ",t.price))),c.a.createElement("footer",{className:"card-footer"},c.a.createElement(i.a,{to:"/products/".concat(t.id),className:"card-footer-item"},"Edit"),c.a.createElement(i.a,{to:"/products/delete/".concat(t.id),className:"card-footer-item"},"Delete")))},v=function(e){return e.map((function(e){return c.a.createElement("div",{className:"column is-4",key:e.id},c.a.createElement(P,{product:e}))}))},O=Object(d.b)((function(e){return{products:e.products}}),{fetchProducts:function(){return function(e){p.get("/products").then((function(t){e({type:"FETCH_PRODUCTS",payload:t.data})})).catch((function(t){e({type:"FETCH_PRODUCTS_ERROR",payload:t})}))}}})((function(e){var t=e.error,a=e.products,n=e.fetchProducts;return Object(r.useEffect)((function(){n()}),[]),t&&null!==t?c.a.createElement(b,{error:t}):a.length<1?c.a.createElement(b,{error:"No items found."}):c.a.createElement("main",{className:"container"},c.a.createElement("section",{className:"columns",style:{flexWrap:"wrap"}},v(a)))})),R=function(e){var t=e.title,a=e.subtitle;return c.a.createElement("section",{className:"hero is-medium is-dark is-bold"},c.a.createElement("div",{className:"hero-body has-text-centered"},c.a.createElement("h1",{className:"title"},t),c.a.createElement("h2",{className:"subtitle"},a)))},T=a(100),y=a(101),N=a(104),g=a(106),C=a(233),D=a(232),_=function(e){Object(g.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(T.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).renderTextInput=function(e){var t=e.input,a=e.placeholder,r=e.meta;return c.a.createElement("div",null,c.a.createElement("input",Object.assign({className:"input has-text-dark has-background-white is-family-monospace ".concat(r.error&&r.touched?"is-danger":"is-primary")},t,{placeholder:a})),c.a.createElement("p",{className:"has-text-danger"},r.error&&r.touched?r.error:null))},e}return Object(y.a)(a,[{key:"render",value:function(){return c.a.createElement("form",{className:"container product-create-form",onSubmit:this.props.handleSubmit(this.props.onFormSubmit)},c.a.createElement("div",{className:"field margin-top-30"},c.a.createElement("label",{className:"label"},"Product Title"),c.a.createElement(C.a,{name:"title",component:this.renderTextInput,placeholder:"Enter Product Title"})),c.a.createElement("div",{className:"field margin-top-30"},c.a.createElement("label",{className:"label"},"Product Price"),c.a.createElement(C.a,{name:"price",component:this.renderTextInput,placeholder:"Enter Product Price"})),c.a.createElement("div",{className:"field margin-top-30"},c.a.createElement("label",{className:"label"},"Product Description"),c.a.createElement(C.a,{name:"description",component:this.renderTextInput,placeholder:"Enter Product Description"})),c.a.createElement("button",{className:"button is-primary is-fullwidth"},this.props.submitTitle||"Submit"))}}]),a}(c.a.Component),j=Object(D.a)({form:"productCreate",validate:function(e){var t=e.title,a=e.price,r=e.description,c={};return(!t||t.length<5)&&(c.title="Title should be more than 5 characters"),a&&parseFloat(a)||(c.price="Price should be a numerical value."),a&&!parseFloat(a)<0&&(c.price="Price cannot be negative."),(!r||r.length<5)&&(c.description="Description should be more than 5 characters."),r&&r.length>300&&(c.description="Description should be less than 300 characters."),c}})(_),U=Object(d.b)((function(e){return{error:e.errors.createProduct}}),{createProduct:function(e){return function(t){p.post("/products",e).then((function(e){t({type:"CREATE_PRODUCT",payload:e.data}),h.push("/products")})).catch((function(e){t({type:"CREATE_PRODUCT_ERROR",payload:e})}))}}})((function(e){return e.error?c.a.createElement(b,{error:e.error}):c.a.createElement("main",{className:"has-background-light"},c.a.createElement(R,{title:"Create new Product",subtitle:"This works with great accuracy."}),c.a.createElement(j,{onFormSubmit:function(t){return e.createProduct(t)},submitTitle:"Create Product"}))})),w=Object(d.b)((function(e,t){var a=e.errors,r=e.products,c=t.match.params.id;if(!parseInt(c))return{error:"Invalid Product Id Provided. Product Id must be an integer."};var n=r.filter((function(e){return e.id===parseInt(c)}))[0];return n?a.updateProduct?{error:a.updateProduct}:{product:n}:{error:"No product found with provided id."}}),{updateProduct:function(e,t){return function(a){p.patch("/products/".concat(e),t).then((function(e){a({type:"UPDATE_PRODUCT",payload:e.data}),h.push("/products")})).catch((function(e){a({type:"UPDATE_PRODUCT_ERROR",payload:e})}))}},fetchProduct:f})((function(e){return Object(r.useEffect)((function(){e.fetchProduct(e.match.params.id)}),[]),e.error?c.a.createElement(b,{error:e.error}):c.a.createElement("main",{className:"has-background-light"},c.a.createElement(R,{title:"Update Product",subtitle:"This works with great accuracy."}),c.a.createElement(j,{initialValues:e.product,onFormSubmit:function(t){return e.updateProduct(parseInt(e.match.params.id),t)},submitTitle:"Update Product"}))})),k=Object(d.b)((function(e,t){var a=t.match.params.id;if(!parseInt(a))return{error:"Invalid Product Id Provided. Product Id must be an integer."};var r=e.products.filter((function(e){return e.id===parseInt(a)}))[0];return r?e.errors.deleteProduct?{error:e.errors.deleteProduct}:{product:r}:{error:"No product found with provided id."}}),{deleteProduct:function(e,t){return function(a){p.delete("/products/".concat(e),t).then((function(){a({type:"DELETE_PRODUCT",payload:e}),h.push("/products")})).catch((function(e){a({type:"DELETE_PRODUCT_ERROR",payload:e})}))}},fetchProduct:f})((function(e){return Object(r.useEffect)((function(){e.fetchProduct(e.match.params.id)}),[]),e.error?c.a.createElement(b,{error:e.error}):c.a.createElement("main",{className:"has-background-light"},c.a.createElement(R,{title:"Delete Product",subtitle:"This works with great accuracy."}),c.a.createElement(j,{initialValues:e.product,onFormSubmit:function(t){return e.deleteProduct(parseInt(e.match.params.id),t)},submitTitle:"Delete Product"}))})),I=function(){return c.a.createElement(l.b,{history:h},c.a.createElement(s,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",component:O}),c.a.createElement(l.a,{exact:!0,path:"/products",component:O}),c.a.createElement(l.a,{exact:!0,path:"/products/create",component:U}),c.a.createElement(l.a,{exact:!0,path:"/products/:id",component:w}),c.a.createElement(l.a,{exact:!0,path:"/products/delete/:id",component:k})))},x=a(5),F=a(103),S=a(67),H=a(234),A=a(32),L={fetchProducts:null,fetchProduct:null,createProduct:null,deleteProduct:null},J=Object(x.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return t.payload;case"FETCH_PRODUCT":case"CREATE_PRODUCT":return[].concat(Object(S.a)(e),[t.payload]);case"DELETE_PRODUCT":return e.filter((function(e){return e.id!==t.payload}));default:return e}},form:H.a,errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS_ERROR":return Object(A.a)({},e,{fetchProducts:t.payload});case"FETCH_PRODUCT_ERROR":return Object(A.a)({},e,{fetchProduct:t.payload});case"CREATE_PRODUCT_ERROR":return Object(A.a)({},e,{createProduct:t.payload});case"DELETE_PRODUCT_ERROR":return Object(A.a)({},e,{deleteProduct:t.payload});default:return e}}}),V=Object(x.d)(J,Object(x.a)(F.a));o.a.render(c.a.createElement(d.a,{store:V},c.a.createElement(I,null)),document.querySelector("#root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.88206b37.chunk.js.map