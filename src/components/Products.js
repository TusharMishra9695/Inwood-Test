import React, { useCallback, useEffect, useState } from "react";
import "./Products.css";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Products() {
  const [products, setProducts] = useState("");
  const [cart, setCart] = useState(0);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      if (res) {
        setProducts(res.data.products);
      }
    });
    if (cart) {
      localStorage.setItem("cartItem", JSON.stringify(cart));
      window.location.reload();
    }
  }, [cart]);
  function handleCart() {
    if (localStorage.getItem("cartItem")) {
      let value = JSON.parse(localStorage.getItem("cartItem"));
      setCart(value + 1);
    } else {
      setCart((cart) => cart + 1);
    }
  }

  return (
    <>
      {" "}
      <div style={{ marginTop: "20px" }}>
        <span className="prod_title">Popular Products</span>
        <Carousel showArrows={true}>
          {products
            ? products.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="prod_div">
                      <div className="prod_img_outer">
                        <img
                          src={item.thumbnail}
                          alt="loading..."
                          className="prod_img"
                        />
                      </div>
                      <div style={{ paddingLeft: "40px" }}>
                        <h2 className="headline">{item.brand}</h2>
                        <span className="sub_headline">{item.category}</span>
                        <h6 className="price">${item.price}</h6>
                        <button
                          onClick={handleCart}
                          style={{ cursor: "pointer" }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </Carousel>
      </div>
    </>
  );
}
