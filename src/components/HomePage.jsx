import React from "react";
import { Container } from "react-bootstrap";
import {} from "../style/HomePage.css";
import { useEffect, useState } from "react";

function HomePage() {
  const textOptions = [
    "marketing newbie",
    "established marketer",
    "e-commerce store owner",
    "one-person marketing team",
    "scrappy new entrepreneur",
    "big business marketing department",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [fadeIn, setFadeIn] = useState(false);

  const updateText = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % textOptions.length);
      setCurrentText(textOptions[currentIndex]);
      setFadeIn(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(updateText, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="overflow-x-hidden" style={{marginTop:'63px'}}>
      <p
        className="text-center text-light bg-success py-2 align-items-center"
         >
          {/* style={{ backgroundColor: "#CC66A0" }} */}
        Learn how to optimize your webpages and ad creative at our upcoming
        workshop👀
        <a href="/" style={{ cursor: "pointer", color: "#FCC070" }}>
          {" "}
          Register Now<i class="bi bi-arrow-right"></i>{" "}
        </a>
      </p>

      <div
        className="d-flex align-items-center"
        style={{ backgroundColor: "#ffe8e0", marginTop: "-16px" }}
      >
        <div
          className="col-12 col-xxl-6 col-xl-6 text-start"
          style={{ padding: "29px 3% 60px 7%" }}
        >
          <h1 className="fw-bold">
            Smaller budgets need <br className="d-none d-sm-block" /> smarter
            dollars
          </h1>

          <p>
            Create, manage, and analyze your display, Facebook, Instagram,
            <br className="d-none d-sm-block" />
            Pinterest, TikTok, and email campaigns from a single platform.
            AdRoll helps marketers do more with less.
          </p>
          <div className="">
            <button
              class="btn me-3 text-white "
              type="submit"
              style={{ backgroundColor: "#8e44ad", padding: "10px 28px" }}
            >
              <span className="buttext">GET STARTED</span>
            </button>
            <button
              class="btn btn text-white"
              type="submit"
              style={{ backgroundColor: "#20b8f0", padding: "10px 28px" }}
            >
              <span className="buttext">GET IN TOUCH</span>
            </button>
          </div>
        </div>

        <div className="col-6 col-xl-6 d-none d-sm-block bannercol">
          <div className="overflow-y-hidden">
            <img
              src="https://www.adroll.com/assets/img/homepage/hero-machine.png?format=jpg&auto=webp&width=546"
              style={{
                margin: "-243px 0px 0px",
                display: "flex",
                flex: "1",
                flexBasis: "50%",
                backgroundRepeat: "no-repeat",
                padding: "50px 3% 75px 5%",
              }}
              alt=""
              className=""
            />
          </div>
        </div>
      </div>

      <div className="p-5" >
        <div className="row justify-content-center">
          <div className=" col-12 col-lg-5 ms-3 mt-5 pt-4">
            <h3 className=" overflow-y-hidden">AdRoll works for the</h3>
            <h3
              style={{ textDecoration: "underline" }}
              className={fadeIn ? "fade-in" : "fade-out"}
            >
              {currentText}
            </h3>

            <h5 className=" mt-3 fw-light">
              Our industry-first automation builder gives you full control of
              campaigns across display, social, and email — all from one place.
            </h5>
            <a
              className="h5 fw-light"
              style={{ color: "#CF66A0", cursor: "pointer" }}
            >
              Explore automation builder <i class="bi bi-arrow-right mt-5"></i>
            </a>
          </div>
          <div className="col-12 col-lg-6 mt-5 justify-content-center d-flex ">
            <img
              className="mt-2"
              src="https://www.adroll.com/assets/img/ecommerce-marketing/img-automation_studio.png?format=jpg&auto=webp&width=400"
              alt=""
              style={{ width: "500px", height: "80%" }}
            />
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center align-items-center ">
        <img
          className="px-2 pt-4"
          src="https://www.adroll.com/assets/img/logos/lounge.png?format=png&auto=webp&width=209"
          alt="Logo"
          style={{ width: "140px" }}
        />

        <img
          className="px-2 pt-4"
          src="https://www.adroll.com/assets/img/logos/peyton-jewelry.png?format=png&auto=webp&width=209"
          alt="Logo"
          style={{ width: "140px" }}
        />

        <img
          className="px-2 pt-4"
          src="https://www.adroll.com/assets/img/logos/topo-designs.png?format=png&auto=webp&width=209"
          alt="Logo"
          style={{ width: "140px" }}
        />

        <img
          className="px-2 pt-4"
          src="https://www.adroll.com/assets/img/logos/shady-rays.png?format=png&auto=webp&width=209"
          alt="Logo"
          style={{ width: "140px" }}
        />

        <img
          className="px-2 pt-4"
          src="https://www.adroll.com/assets/img/logos/exploading-kittens.png?format=png&auto=webp&width=209"
          alt="Logo"
          style={{ width: "140px" }}
        />
        <img
          className="px-2 pt-4"
          src="https://www.adroll.com/assets/img/logos/head-kandy.png?format=png&auto=webp&width=209"
          alt="Logo"
          style={{ width: "140px" }}
        />
      </div>

      <div className="p-5 mt-4" style={{backgroundColor:'#F4F6F9'}}>
        <div className="row ">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <img
              className=""
              style={{
                width: "370px",
                height: "254px",
              }}
              src="https://www.adroll.com/assets/img/homepage/customers-find.png?format=png&auto=webp&width=398"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-5 mt-4">
            <h3 className="">
              For 15 years, we've been the leader in helping our customers find
              their best customers
            </h3>
            <h5 className="fw-light mt-3">
              The AdRoll platform is powered by 15+ years of data from hundreds
              of thousands of brands and billions of shoppers. Let our expertise
              find the right customers for your business.
            </h5>
            <a
              className="h5 fw-light"
              style={{ color: "#CF66A0", cursor: "pointer" }}
            >
              Learn more <i class="bi bi-arrow-right mt-5"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="p-5 mt-3">
        <div className="row justify-content-center p-2 w-100">
          <div className="col-12 col-lg-5 ms-2">
            <h3 className=" overflow-y-hidden mx-auto">
              Save time and energy by running all your campaigns across millions
              of websites and mobile apps — from one place
            </h3>
            <h5 className="fw-light mt-3">
              When we say one-stop shop, we mean one-stop. Launch, pause, and
              edit ad campaigns across all the places you want to advertise,
              plus use that data to see your campaigns holistically and make
              improvements.
            </h5>
            <a
              href="#"
              className="fw-lighter h5 mt-3 para"
              style={{ color: "#CF66A0", cursor: "pointer" }}
            >
              Explore social ads manager
              <i class="bi bi-arrow-right mt-5"></i>
            </a>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center ">
            <img
              className=" "
              style={{
                width: "320px",
                height: "254px",
                objectFit: "contain",
              }}
              src="https://www.adroll.com/assets/img/homepage/save-time.png?format=png&auto=webp&width=398"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="p-5 mt-4">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex justify-content-center mb-5">
            <img
              style={{
                width: "340px",
                height: "259px",
              }}
              src="https://www.adroll.com/assets/img/homepage/correct-choices.png?format=png&auto=webp&width=398"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-5 ms-3">
            <h3 className=" overflow-y-hidden">
              Our retargeting and brand awareness ads make billions of correct
              choices every day
            </h3>
            <h5 className="fw-light my-3">
              Our AI does what even the most savvy marketer alone cannot. Our
              powerful machine learning makes more predictions per second than
              the NASDAQ to attract the right customers to your site and get
              them buying again and again.
            </h5>
            <a
              href="#"
              className="h5 fw-light para"
              style={{ color: "#CF66A0", cursor: "pointer" }}
            >
              Explore retargeting ads
              <i class="bi bi-arrow-right"></i>
            </a>
            <br />
            <a
              href="#"
              className="fw-light h5 para"
              style={{ color: "#CF66A0", cursor: "pointer" }}
            >
              Explore brand awareness ads
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="  p-5 mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5 ms-4 ">
            <h3 className=" overflow-y-hidden">
              Experts to manage your advertising
            </h3>
            <h4 className="fw-light my-3">
              Want to run effective campaigns but don’t have the bandwidth to
              manage different platforms? AdRoll managed services can be an
              extension of your marketing team, providing you with a dedicated
              platform expert to partner with, helping you and your team achieve
              your marketing goals and maximize return from your campaigns.
            </h4>
            <a
              href="#"
              className="h5 fw-light para"
              style={{ color: "#CF66A0", cursor: "pointer" }}
            >
              Get the support you deserve
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="col-12 col-lg-6 d-flex mt-5 justify-content-center">
            <img
              className=" w-100"
              style={{
                width: "398px",
                height: "203px",
              }}
              src="https://www.adroll.com/assets/img/homepage/experts.png?format=png&auto=webp&width=398"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        {/* <div className="absolute" style={{backgroundImage:`url("https://www.adroll.com/assets/img/globals/bkgd-bluedot-sm.png")`,backgroundPosition:'calc(50% + 300px) top',backgroundRepeat:'no-repeat',paddingTo:'4em'}}> */}
        <div className="container">
          <div className="row" style={{ border: "10px solid #303273" }}>
            <div className="col p-5">
              <div className="row pb-4">
                <div className="col">
                  <img
                    src="https://www.adroll.com/assets/img/homepage/logo-volcanica.png"
                    width="150"
                    height="128"
                    alt=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <b>"</b>
                  <span>
                    Since last year,{" "}
                    <b>
                      our revenue has <br />
                      increased 191%
                    </b>
                    ,{" "}
                    <b>
                      our attributed <br />
                      conversions 177%
                    </b>
                    , and our{" "}
                    <b>
                      engagement <br />
                      33%
                    </b>
                    . We’re reaching and converting <br />
                    customers higher in the funnel.<b>"</b>
                  </span>
                </div>
              </div>
            </div>

            <div className="col RoseCircle">
              <img
                src="https://www.adroll.com/assets/img/globals/bkgd-bluedot-sm.png"
                className="d-none d-md-none d-xl-block"
                style={{
                  height: "400px",
                  width: "40%",
                  position: "absolute",
                  bottom: "-2492px",
                  right: "30px",
                  zIndex: "-2",
                }}
                alt=""
              />
              <p
                className="textright h3 fw-semibold"
                style={{ marginTop: "150px", marginLeft: "110px" }}
              >
                <b>Adroll customers</b>
                <span className="fw-light"> make</span>{" "}
                <span className="d-block fw-bold display-1">$165B</span>
                <span className="fw-light"> in sales </span> <b>every year</b>
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className="text-center pb-2 mt-5">
        <a href="#">
          <img
            src="https://images.g2crowd.com/uploads/report_medal/image/1004323/medal.svg"
            width="120"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="https://images.g2crowd.com/uploads/report_medal/image/1004325/medal.svg"
            width="120"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="https://images.g2crowd.com/uploads/report_medal/image/1004328/medal.svg"
            width="120"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="https://www.g2.com/shared-assets/product-badges/users-love-us.svg"
            width="120"
            alt=""
          />
        </a>
      </div>

      <div
        className="container-fluid"
        style={{ backgroundColor: "#FFE8E0", padding: "40px 0px 40px 0px" }}
      >
        <div className="mt-3 py-5 text-center" style={{}}>
          <h3 className="mb-2">Increase ROI. Learn from your data.</h3>
          <h3 className="mt-2">Maximize sales.</h3>
          <div className="mt-3">
            <a
              href="#"
              className="btn text-white py-3 px-4 me-4"
              style={{ backgroundColor: "#8E44AD" }}
            >
              GET STARTED
            </a>
            <a
              href="#"
              className="btn text-white py-3 px-4"
              style={{ backgroundColor: "#00AEEF" }}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      <div className='d-none d-sm-block '>
                    <div className='row py-5 bg-white '>
                        <div className="col "></div>
                        <div className="col">
                            <div>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>Why AdRoll?</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }} >  <p className=''>Overview</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Pricing</p></a>
                            </div>

                            <div className='pt-3'>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>For ecommmerce stores</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>AdRoll for ecommerce</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Shopify</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>WooCommerce</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>BigCommerce</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Magento</p></a>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>Marketing Platform</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }} >  <p className=''>One platform, every need</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Find more customers</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Build profitable relationships</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Track and improve results</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Protect customer data</p></a>
                            </div>

                            <div className='pt-3'>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>Marketing Recipes</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>What are marketing recipes?</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Abandoned cart recovery</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Customer loyalty</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Retargeting</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Brand awareness</p></a>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>Resources</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }} >  <p className=''>Resource library</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Blog</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Community</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Events</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Help Center</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Third-Party Cookies</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>AdRoll UTM Link Builder</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Digital Marketing Newsletter</p></a>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <a href="#" className=' text-decoration-none text-black' style={{ fontSize: ".80em" }}>  <p className='fw-semibold'>Partners</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }} >  <p className=''>Overview</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Agencies</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Agency</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Directory</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Partner</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Directory</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Referral</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Program</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>API docs</p></a>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <a href="#" className=' text-decoration-none text-black fw-semibold'>Company</a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }} >  <p className='mt-2'>About</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>News</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Careers</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>NextRoll</p></a>
                                <a href="#" className=' text-decoration-none text-black-50' style={{ fontSize: ".75em" }}>  <p className=''>Engineering</p></a>
                            </div>
                        </div>
                        <div className="col">
                            <div class="d-flex justify-content-between">
                                <a href='#'><i class="bi bi-facebook h3" style={{color:'gray'}}></i></a>
                                <a href='#'><i class="bi bi-instagram h3" style={{color:'gray'}}></i></a>
                                <a href='#'><i class="bi bi-linkedin h3" style={{color:'gray'}}></i></a>
                                <a href='#'><i class="bi bi-twitter h3" style={{color:'gray'}}></i></a>
                            </div>
                            <img src="https://www.adroll.com/assets/img/member-sprite.png" width={140} className="mt-3" alt="" />
                            <img src="https://www.g2.com/products/adroll/widgets/stars?color=white&type=read" width={150} height={75} className="mt-3" alt=""  />
                        </div>
                        <div className="col">

                        </div>
                    </div>
      </div>

      <div className='container-fluid py-5' style={{backgroundColor:'#F4F6F9'}}>
                <div>
                    <div className='text-center'>
                        <img src='https://www.adroll.com/assets/svg/logo-nextroll.svg' alt='' width={'130px'} />
                    </div>
                    <div className='text-center my-3 '>
                        <img className='me-2' src='https://www.adroll.com/assets/svg/logo-adroll.svg' alt='' width={'70px'} />
                        <img src='https://www.adroll.com/assets/svg/logo-rollworks.svg' alt='' width={'100px'} />
                    </div>
                    <div className='text-center'>
                        <p className="fw-light" style={{ fontSize: '12px' }}>NextRoll is as an equal opportunity employer. <br />
                        We stand alongside organizations that support our Rollers and Community.</p>
                    </div>
                    <div className='container mt-3'>
                        <div className='d-flex justify-content-around'>
                            <small style={{fontSize:'11px'}}  ><a href='#' className="text-dark text-decoration-none fw-semibold">Careers</a></small>
                            <small style={{fontSize:'11px'}} ><a href='#' className="text-dark text-decoration-none fw-semibold">Trust Center</a></small>
                            <small  style={{fontSize:'11px'}}><a href='#' className="text-dark text-decoration-none fw-semibold">Terms of Service</a></small>
                            <small style={{fontSize:'11px'}} ><a href='#' className="text-dark text-decoration-none fw-semibold">Website Terms of Use</a></small>
                            <small style={{fontSize:'11px'}}  ><a href='#' className="text-dark text-decoration-none fw-semibold">Privacy Notice</a></small>
                            <small style={{fontSize:'11px'}} ><a href='#'className="text-dark text-decoration-none fw-semibold">Infringement Policy</a></small>
                            <small style={{fontSize:'11px'}} ><a href='#' className="text-dark text-decoration-none fw-semibold">Ad Opt Out</a></small>
                            <small style={{fontSize:'11px'}} ><a href='#' className="text-dark text-decoration-none fw-semibold">CCPA Notice at Collection</a></small>
                            <small style={{fontSize:'11px'}} ><a href='#' className="text-dark text-decoration-none fw-semibold">AdChoices</a></small>
                        </div>
                    </div>
                    <div className='text-center mt-2'>
                       <small style={{fontSize:'11px'}}>
                       <a href='#' className="text-dark text-decoration-none fw-semibold">Your Privacy Choices <img src='https://www.adroll.com/assets/img/your-privacy-choices.png' alt='logos' width={'20px'} /> </a>
                        </small> 
                    </div>
                    <div className='text-center footer_bottom3 my-3'>
                        <small className="fw-light" style={{fontSize:'11px'}}>© 2006-2023, NextRoll, Inc. All rights reserved. AdRoll is a division of NextRoll. To learn more please visit <a href='#'>nextroll.com.</a>
                        </small>
                    </div>
                    <div className='text-center'>
                       <small style={{fontSize:'12px',cursor:'pointer'}}>
                       <a className='px-3 py-1 text-decoration-none rounded-2 bg-info text-white' >DO NOT SELL OR SHARE MY PERSONAL INFORMATION
                        </a>
                        </small>
                    </div>
                    </div>
                </div>
    <nav class="navbar navbar-expand-sm fixed-bottom">
  <div class="container-fluid">  
    <img src="https://qualified-production.s3.us-east-1.amazonaws.com/uploads/ad6505f2d913a6c08aa3388531ae65635d64c60851ea3b22baf504abf4f70396.png" alt="querybox"  className="fixed-bottom mb-3 rounded-circle" height={'50px'} style={{position:'absolute',left:'74rem',cursor:'pointer'}}  />
  </div>

</nav>    
    </div>
  );
}

export default HomePage;
