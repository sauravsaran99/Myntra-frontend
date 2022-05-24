
import axios from "axios";

export const CART_DATA = "CART_DATA";

export const cartData = (payload) => {
    return {type: CART_DATA, payload}
}

export const Cartthunk = () => {
    return (dispatch) => {
        axios.get("http://localhost:8080/cart").then((res) => {
            return dispatch(cartData(res.data));
        })
    }
}