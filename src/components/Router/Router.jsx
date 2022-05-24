import { Route, Routes } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { Home } from "../Home/Home";
import { Productjsx } from "../Product/Product";
import { Productdetails } from "../Productdetails/Productdetails";
import { Address } from "../Address/Address";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/product/:gender"
          element={<Productjsx></Productjsx>}
        ></Route>
        <Route
          path="/product/:gender/:id"
          element={<Productdetails></Productdetails>}
        ></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/address' element={<Address />}></Route>
      </Routes>
    </>
  );
};
