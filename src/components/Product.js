import React from "react";

function Product({productComment, img, title, quantity, price}) {

    return (
        <article>
            <span>{productComment}</span>
            <img src={img} alt={title}/>
            <p>{title}</p>
            <h2>{quantity}</h2>
            <h2>{price}</h2>
        </article>
    )
}

export default Product;