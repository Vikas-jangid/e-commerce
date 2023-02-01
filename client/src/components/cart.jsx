import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/addToCart";

function Cart() {
const dispatch = useDispatch();
const cartData = {
    name:"cricket bat",
    company:"MRF",
    type:"English Willow",
    price:"8700"
}

    return (
        <>
            <div className="page">Cart Page</div>
            <button name="button" type="submit" onClick={()=>dispatch(addToCart(cartData))}>Add</button>
        </>
    )
}

export default Cart;
  