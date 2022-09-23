import React from "react";

function Product({productComment, img, title}) {


    return (
        <article>
            <span>{productComment}</span>
            <img src={img} alt={title}/>
            <p>{title}</p>
        </article>
    )
}


export default Product;