import { React, useState } from "react";
import {} from "../style/Header.css";
function Header() {
  const [activeDrop, setActiveDrop] = useState(false);
  const [activeDrop2, setActiveDrop2] = useState(false);
  const [activeDrop3, setActiveDrop3] = useState(false);
  const [activeDrop4, setActiveDrop4] = useState(false);
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-xl bg-light fixed-top"
        
        >
          <div className="container-fluid">
            <a className="navbar-brand mb-2" href="#">
              <img
                src="https://www.adroll.com/assets/svg/logo-adroll.svg"
                alt="ad_roll"
                width={"80px"}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="ms-2 collapse navbar-collapse justify-content-between"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav">
                <li
                  className="nav-item"
                  onMouseEnter={() => setActiveDrop(true)}
                  onMouseLeave={() => setActiveDrop(false)}
                >
                  {window.innerWidth > 990 ? (
                    <>
                      {" "}
                      <small>
                        {" "}
                        <a
                          type="button"
                          id="dropdownMenuButton"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                          className="nav-link nav_link pc"
                          href="#"
                        >
                          Why AdRoll? <i class="bi bi-chevron-double-down"></i>
                        </a>
                      </small>
                      <ul
                        style={{
                          minWidth: "0px",
                          width: "160px",
                          display: activeDrop ? "block" : "none",
                        }}
                        className="m-0 py-2 p-0 dropdown-menu shadow"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <span
                            className="dropdown-item fw-semibold mb-1"
                            href="#"
                          >
                            Why Adroll
                          </span>
                        </li>
                        <li>
                          <a className=" dropdown-item fw-light" href="#">
                            Managed Services
                          </a>
                        </li>
                        <li>
                          <a className=" dropdown-item fw-light" href="#">
                            Case Studies
                          </a>
                        </li>
                      </ul>{" "}
                    </>
                  ) : (
                    <>
                      <h6 className="shead">Why AdRoll?</h6>
                      <ul className="sbody">
                        <li>
                          <a href="#">Managed Services</a>
                        </li>
                        <li>
                          <a href="#">Case Studies</a>
                        </li>
                      </ul>{" "}
                    </>
                  )}
                </li>
                {/* dropdown-2 */}
                <li
                  className="nav-item dropdown"
                  onMouseEnter={() => setActiveDrop2(true)}
                  onMouseLeave={() => setActiveDrop2(false)}
                >
                  {window.innerWidth > 990 ? (
                    <>
                      {" "} <small>
                      <a
                        style={{ position: "relative" }}
                        type="button"
                        id="dropdownMenuButton2"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        className="nav-link nav_link"
                        href="#"
                      >
                        Marketing Platform{" "}
                        <i class="bi bi-chevron-double-down"></i>
                      </a>
                      </small>
                      <ul
                        style={{
                          minWidth: "0px",
                          width: "100%",
                          position: "fixed",
                          left: "0",
                          transformOrigin: "top center",
                          transform: activeDrop2 ? "scaleY(1)" : "scaleY(0)",
                          transition: "transform 0.3s ease-in",
                          display: activeDrop2 ? "block" : "none",
                        }}
                        className="m-0  p-0 dropdown-menu shadow "
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <div className="row justify-content-center mx-3 my-5">
                          <div className="col-lg-2 mx-3">
                            <p className="fe-semibold">
                              Marketing Platform
                            </p>
                            <p className="fw-light">
                              <a style={{ color: "#9953BD" }} href="" className="text-decoration-none">
                              Audience&Segmentation
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none" href="">
                              Marketing Automation
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none" href="">
                              Cutomer Privacy
                            </a>
                            </p>
                          </div>
                          <div className="col-lg-2 mx-3 ">
                          <p className="fe-semibold">
                            Campaigns 
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="">
                              Retargeting Ads
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="">
                              Brand Ads
                            </a>
                            </p>
                          </div>

                          <div className="col-lg-2 mx-3">
                          <p className="fe-semibold">
                              Marketing Channels
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="">
                              Display Advertising
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="">
                              video Advertising
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="">
                              Native Advertising
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="">
                              Email Advertising
                            </a>
                            </p>
                          </div>

                          <div className="col-lg-2 mx-3">
                          <p className="fe-semibold">
                              Connected Channels
                              </p> 
                              <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="">
                              Facebook Advertising
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="">
                              Instagram Advertising
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="">
                              TikTOk Advertising
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" } } className="text-decoration-none fw-light" href="">
                              Google Advertising
                            </a>
                            </p>
                          </div>

                          <div className="col-lg-2 mx-3">
                           <p className="fe-semibold">
                            Analytics
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="">
                              Cross-channelPerformance
                            </a>
                            </p>
                             <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="">
                              Cross-channel Attribution
                            </a>
                            </p>
                          </div>
                        </div>
                        
                        <div className="row ">
                          <div className="col-lg-12 rbg"> </div>
                        </div>
                      </ul>{" "}
                    </>
                  ) : (
                    <>
                      <h6 className="shead">
                        Marketing Platform
                      </h6>
                      <ul className="sbody">
                        <li>
                          <a href="#" >Platform Overview</a>
                        </li>
                        <li>
                          <a href="#">Retargeting Ads</a>
                        </li>
                        <li>
                          <a href="#">Brand Awareness</a>
                        </li>
                        <li>
                          <a href="#">Connected Channels</a>
                        </li>
                        <li>
                          <a href="#">Email Marketing</a>
                        </li>
                        <li>
                          <a href="#">Reporting & Insights</a>
                        </li>
                      </ul>{" "}
                    </>
                  )}
                </li>

                {/* dropdown- 3  */}
                <li
                  className="nav-item dropdown"
                  onMouseEnter={() => setActiveDrop3(true)}
                  onMouseLeave={() => setActiveDrop3(false)}
                >
                  {window.innerWidth > 990 ? (
                    <>
                      {" "}
                      <small>
                      <a
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        className="nav-link nav_link"
                        href="#"
                      >
                        For Ecommerce <i class="bi bi-chevron-double-down"></i>
                      </a>
                      </small>
                      <ul
                        style={{
                          minWidth: "0px",
                          width: "205px",
                          transformOrigin: "top center",
                          transform: activeDrop3 ? "scaleY(1)" : "scaleY(0)",
                          transition: "transform 0.3s ease-in",
                          display: activeDrop3 ? "block" : "none",
                        }}
                        className="m-0 py-2 p-0 dropdown-menu shadow "
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <span className="dropdown-item" href="#">
                            <p className="fw-semibold">
                              Adroll for Ecommerce
                              </p>
                          </span>
                        </li>
                        <li>
                          <a className=" dropdown-item fw-light" href="#">
                            Shopify
                          </a>
                        </li>
                        <li>
                          <a className=" dropdown-item fw-light" href="#">
                            Shopify Plus
                          </a>
                        </li>
                        <li>
                          <a className=" dropdown-item fw-light" href="#">
                            WooCommerce
                          </a>
                        </li>
                        <li>
                          <a className=" dropdown-item fw-light" href="#">
                            Wix
                          </a>
                        </li>
                        <li>
                          <a className=" dropdown-item fw-light" href="#">
                            BigCommerce
                          </a>
                        </li>
                        <li>
                          <a className=" dropdown-item fw-light" href="#">
                            Magento
                          </a>
                        </li>
                      </ul>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <h6 className="shead">Addroll for Ecommerce</h6>
                      <ul className="sbody">
                        <li>
                          <a href="#">Shopify</a>
                        </li>
                        <li>
                          <a href="#">Shopify Plus</a>
                        </li>
                        <li>
                          <a href="#">WooCommerce</a>
                        </li>
                        <li>
                          <a href="#">Wix</a>
                        </li>
                        <li>
                          <a href="#">BigCommerce</a>
                        </li>
                        <li>
                          <a href="#">Magento</a>
                        </li>
                      </ul>{" "}
                    </>
                  )}
                </li>
                <li className="nav-item">
                  <small>
                  <a className="nav-link nav_link" href="#">
                    Pricing
                  </a>
                  </small>
                </li>
                {/* dropdown - 6 */}
                <li
                  className="nav-item dropdown"
                  onMouseEnter={() => setActiveDrop4(true)}
                  onMouseLeave={() => setActiveDrop4(false)}
                >
                  {window.innerWidth > 990 ? (
                    <>
                    <small>
                      <a
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        className="nav-link nav_link"
                        href="#"
                      >
                        Resources{" "}
                        <span className="hero">
                          <i class="bi bi-chevron-double-down"></i>
                        </span>{" "}
                      </a>
                      </small>
                      <ul
                        style={{
                          minWidth: "0px",
                          width: "100%",
                          position: "fixed",
                          left: "0",
                          transformOrigin: "top center",
                          transform: activeDrop4 ? "scaleY(1)" : "scaleY(0)",
                          transition: "transform 0.3s ease-in",
                          display: activeDrop4 ? "block" : "none",
                        }}
                        className="m-0  py-2 p-0 dropdown-menu shadow "
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div className="row justify-content-center mx-3 mt-4">
                          <div className="col-lg-2">
                            <small>
                            <p className="fw-semibold">
                              Marketing Resources
                              </p>
                            <div>
                              <p className="fw-light">
                              <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                                Resources Library
                              </a>
                              </p>
                              <p className="fw-light">
                              <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                                Addroll blog
                              </a>
                              </p>
                              <p className="fw-light">
                              <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                                Holiday Marketing Resources{" "}
                              </a>
                              </p>
                              <p className="fw-light">
                              <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                                What is retargeting?
                              </a>
                              </p>
                              <p className="fw-light">
                              <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                                Marketing Gloserry{" "}
                              </a>
                              </p>
                            
                            </div>
                            </small>
                          </div>
                          <div className="col-lg-2 ">
                            <small>
                            <p className="fw-semibold mb-2">Free Tools
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                              Return on Ad spend Calculator
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                              AdRoll UTM Link Builder
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                              Discound Profit Margin Calculator
                            </a>
                            </p>
                            </small>
                          </div>
                          <div className="col-lg-2 ">
                            <small>
                            <p className="fw-semibold mb-2">
                              Community
                              </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                              Growth Gorrila{" "}
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }}className="text-decoration-none fw-light" href="#">
                              Small Business
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                              Events
                            </a>
                            </p>
                            </small>
                          </div>
                          <div className="col-lg-2 ">
                            <small>
                            <p className="fw-semibold">
                              Customer Supports
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                              Getting Started{" "}
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                              Help center{" "}
                            </a>
                            </p>
                            <p className="fw-light">
                            <a style={{ color: "#9953BD" }} className="text-decoration-none fw-light" href="#">
                              Research Panel
                            </a>
                            </p>
                            </small>
                          </div>
                          <div className="col-lg-4 d-flex">
                            <div
                              className="w-100 py-3 px-2 box"
                              style={{ height: "100%", background: "#303273" }}
                            >
                              <div
                                className="mx-2 rounded-3 h-100 flex-column d-flex justify-content-center align-items-center"
                                style={{ background: "#FFE8E0" }}
                              >
                                <img
                                  className="m-3 rounded-3 navImage"
                                  width="90%"
                                  src="https://www.adroll.com/assets/img/promo/holiday-marketing-hero.png?auto=webp&fm=png&width=393"
                                  alt=""
                                />
                                <h6 className="text-center">
                                  Power up your holiday marketing
                                </h6>
                                <p className="text-center px-3">
                                  {" "}
                                  It might seem early, but the race to holiday
                                  revenue is on! 🏃We’re here to guide you
                                  through your mission to generate brand
                                  awareness, maximize budget, and create
                                  campaigns your target audience can’t ignore.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row" style={{ position: "relative" }}>
                            <div
                              className="col-lg-12 rbg"
                              style={{ position: "absolute", bottom: "0" }}
                            >
                              {" "}
                            </div>
                          </div>
                        </div>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h6 className="shead">Resources </h6>

                      <ul className="sbody">
                        <li>
                          <a href="#">AddRoll Blog</a>
                        </li>
                        <li>
                          <a href="#">Marketing Glossery</a>
                        </li>
                        <li>
                          <a href="#">Events</a>
                        </li>
                        <li>
                          <a href="#">Wix</a>
                        </li>
                        <li>
                          <a href="#">Getting Started</a>
                        </li>
                        <li>
                          <a href="#">Help center</a>
                        </li>
                      </ul>

                      <h6 className="shead">Login</h6>
                      <button className="btn px-1 w-100 rounded-2 btn-purp">
                        GET STARTED
                      </button>
                    </>
                  )}
                </li>
              </ul>
              <div className="d-flex align-items-center me-3">
                <a className="me-2" href="#" style={{ textDecoration: "none" }}>
                  Log in
                </a>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#8e44ad",
                    padding: "10px 8px",
                    color: "whitesmoke",
                  }}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="offcanvas offcanvas-end w-75"
          style={{ background: "#2C3639" }}
          tabIndex="-1"
          id="offcanvasNavbar"
          data-bs-scroll="true"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">
              <img
                src="https://www.adroll.com/assets/svg/logo-adroll-white.svg"
                width="100px"
                alt=""
              />
            </h5>
            <button
              type="button"
              className="btn-close btn_close text-reset"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body canvas_body">
            <div>
              <h6 className="shead">Why AdRoll?</h6>
              <ul className="sbody">
                <li>
                  <a href="#">Managed Services</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="shead">Marketing Platform</h6>
              <ul className="sbody">
                <li>
                  <a href="#">Platform Overview</a>
                </li>
                <li>
                  <a href="#">Retargeting Ads</a>
                </li>
                <li>
                  <a href="#">Brand Awareness</a>
                </li>
                <li>
                  <a href="#">Connected Channels</a>
                </li>
                <li>
                  <a href="#">Email Marketing</a>
                </li>
                <li>
                  <a href="#">Reporting & Insights</a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="shead">Addroll for Ecommerce</h6>
              <ul className="sbody">
                <li>
                  <a href="#">Shopify</a>
                </li>
                <li>
                  <a href="#">Shopify Plus</a>
                </li>
                <li>
                  <a href="#">WooCommerce</a>
                </li>
                <li>
                  <a href="#">Wix</a>
                </li>
                <li>
                  <a href="#">BigCommerce</a>
                </li>
                <li>
                  <a href="#">Magento</a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="shead">Resources </h6>

              <ul className="sbody">
                <li>
                  <a href="#">AddRoll Blog</a>
                </li>
                <li>
                  <a href="#">Marketing Glossery</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Wix</a>
                </li>
                <li>
                  <a href="#">Getting Started</a>
                </li>
                <li>
                  <a href="#">Help center</a>
                </li>
              </ul>

              <p className="text-center fw-light ms-5">Log in
              </p>
              <button className="btn px-1 w-100 rounded-2 btn-purp" style={{backgroundColor:'#8e44ad',color:'white'}}>
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
