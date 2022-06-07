import axios from "axios";

export const PRODUCTDATA = "PRODUCTDATA";

export const Product = (payload) => {
  return { type: PRODUCTDATA, payload };
};

export const Productthunk = () => {
  return (dispatch) => {
    axios.get("https://fathomless-lowlands-62517.herokuapp.com/product").then((res) => {
      return dispatch(Product(res.data));
    });
  };
};
