import React, {useState} from "react";

function IncrementAndDecrement() {
    const [quantity, setQuantity] = useState(0);

    function resetQuantity() {
        setQuantity(0);
    }

    return (
        <>
            <button
                type="button"
                disabled={quantity === 0}
                onClick={() => setQuantity(quantity -1)}
            >
                -
            </button>
            <p>{quantity}</p>
            <button
                type="button"
                onClick={() => setQuantity(quantity +1)}
                >
                +
            </button>
        </>
    )
}

export default IncrementAndDecrement;