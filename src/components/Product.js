import React from "react";

function Product({productComment, img, title, productQuantity, productPrice}) {
    return (
        <article>
            <span>{productComment}</span>
            <img src={img} alt={title}/>
            <p>{title}</p>
            <div>{productQuantity}</div>
            <h4>{productPrice}</h4>
        </article>
    )
}

export default Product;