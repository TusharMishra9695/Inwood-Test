import React from "react";
import "./Home.css";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <div className="upper_sec">
        <div className="header_style">
          <div>
            <img src="logo1.png" className="img_inwood" />
          </div>
          <div>
            <ul className="ul_style">
              <li className="li_style border">Home</li>
              <li className="li_style">Products</li>
              <li className="li_style">Categories</li>
              <li className="li_style">About</li>
              <li className="li_style">Contact us</li>
            </ul>
          </div>
          <div>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "40px" }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.8086 19.1848L26.8075 25.1909C27.0754 25.4888 27.0622 25.945 26.7775 26.2269L25.7277 27.278C25.5869 27.4201 25.3952 27.5001 25.1953 27.5001C24.9953 27.5001 24.8037 27.4201 24.6629 27.278L18.664 21.2719C18.4981 21.1056 18.3475 20.9247 18.2141 20.7313L17.0893 19.2298C15.2282 20.7177 12.9171 21.5278 10.5355 21.5271C5.62785 21.5442 1.36328 18.1547 0.266542 13.3654C-0.830192 8.57602 1.53362 3.66501 5.95852 1.5398C10.3834 -0.585405 15.6885 0.64237 18.733 4.49625C21.7774 8.35013 21.7488 13.8016 18.664 17.6232L20.1637 18.6592C20.3979 18.8093 20.6143 18.9856 20.8086 19.1848ZM3.03678 11.0164C3.03678 15.1628 6.39402 18.5241 10.5354 18.5241C12.5241 18.5241 14.4314 17.7331 15.8377 16.3251C17.2439 14.9172 18.034 13.0076 18.034 11.0164C18.034 6.87008 14.6767 3.5088 10.5354 3.5088C6.39402 3.5088 3.03678 6.87008 3.03678 11.0164Z"
                fill="#07484A"
              />
            </svg>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.022 3.20002H26.325C26.6978 3.20002 27 3.50223 27 3.87502V4.55002C26.9902 5.67036 26.6877 6.76868 26.1225 7.73602L22.95 13.3115C22.2635 14.5454 20.9732 15.3216 19.5615 15.35H11.151C10.8592 15.3437 10.5692 15.303 10.287 15.2285L8.937 18.05H23.625C23.9978 18.05 24.3 18.3522 24.3 18.725V20.075C24.3 20.4478 23.9978 20.75 23.625 20.75H6.75C6.38055 20.7586 6.03504 20.5678 5.8455 20.2505L5.5485 19.7375C5.39241 19.4371 5.39241 19.0795 5.5485 18.779L8.0595 13.784C7.92237 13.6392 7.80025 13.4809 7.695 13.3115L1.917 3.20002H0.675C0.302208 3.20002 0 2.89781 0 2.52502V1.17502C0 0.802229 0.302208 0.500021 0.675 0.500021H1.917C2.88545 0.496177 3.78178 1.01131 4.266 1.85002L5.022 3.20002ZM8.1 22.1C6.60883 22.1 5.4 23.3089 5.4 24.8C5.4 26.2912 6.60883 27.5 8.1 27.5C9.59117 27.5 10.8 26.2912 10.8 24.8C10.8 23.3089 9.59117 22.1 8.1 22.1ZM24.3 24.8C24.3 26.2912 23.0912 27.5 21.6 27.5C20.1088 27.5 18.9 26.2912 18.9 24.8C18.9 23.3089 20.1088 22.1 21.6 22.1C23.0912 22.1 24.3 23.3089 24.3 24.8Z"
                fill="#07484A"
              />
            </svg>
            {localStorage.getItem("cartItem")
              ? JSON.parse(localStorage.getItem("cartItem")) == 0
                ? null
                : JSON.parse(localStorage.getItem("cartItem"))
              : null}
          </div>
        </div>
        <div className="home_text">
          <span className="deal_text">
            Exclusive Deals of Furniture Collection
          </span>
          <h6 className="deal_sub_text">
            Explore different categories. Find the best deals.
          </h6>
          <span className="btn_shop">Shop Now</span>
        </div>
      </div>
      <div>
        <Products />
      </div>
    </>
  );
}
