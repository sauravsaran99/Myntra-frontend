import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Productthunk } from "../../../Redux/Action/Product";
import { Link, useParams } from "react-router-dom";

export const Second = () => {
  const { gender } = useParams();

  const dispatch = useDispatch();
  const data = useSelector((Store) => Store.product.pdata);
  const [products, getProducts] = useState([]);
  const [cate, setCate] = useState("");
  useEffect(() => {
    dispatch(Productthunk());
  }, [dispatch]);

  useEffect(() => {
    getProducts([...data]);
  }, [data]);

  useEffect(() => {
    if (gender === "men") {
      setCate("mentshirts");
    } else {
      setCate("womenkurti");
    }
  }, [gender]);

  // console.log(cate)
  return (
    <>
      <div className="productsecondsecond">
        {products.map((e) => {
            
          if (e.imgsrc !== "" && e.category === cate && e.dprice) {
            return (
<Link to={`/product/${gender}/${e.id}`}>
              <div className="uibox">
                <div className="uiboximg">
                  <img
                    src={e.imgsrc}
                    alt={e.productdec}
                    width="100%"
                    height="10%"
                  />
                </div>
                <div>{e.brand}</div>
                <div>{e.productdec}</div>
                <div>₹ {e.dprice}</div>
                <div>₹ {e.strike}</div>
                <div>{e.dper}</div>
              </div>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};