import React from "react";

function Product({productComment, img, title, productPrice}) {
    return (
        <article>
            <span>{productComment}</span>
            <img src={img} alt={title}/>
            <p>{title}</p>
            <h4>{productPrice}</h4>
        </article>
    )
}

export default Product;