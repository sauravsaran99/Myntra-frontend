import axios from "axios";

export const PRODUCTDATA = "PRODUCTDATA";

export const Product = (payload) => {
  return { type: PRODUCTDATA, payload };
};

export const Productthunk = () => {
  return (dispatch) => {
    axios.get("http://localhost:8080/product").then((res) => {
      return dispatch(Product(res.data));
    });
  };
};
