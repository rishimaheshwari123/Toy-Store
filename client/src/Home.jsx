import React from "react";

import vdo from "./toy img/video.mp4";

import banner1 from "./toy img/Banner.jpg";
import banner2 from "./toy img/heroimg2.jpg";
import banner3 from "./toy img/heroimg3.jpg";
import logo from "./toy img/logo.png";

import pic1 from "./toy img/angrybird.png";
import pic2 from "./toy img/anna.webp";
import pic3 from "./toy img/avengers.jpg";
import pic4 from "./toy img/barbiechr.webp";
import pic5 from "./toy img/batman.jpg";
import pic6 from "./toy img/spiderman.webp";
import pic7 from "./toy img/doraemon.png";
import pic8 from "./toy img/ironman.webp";
import pic9 from "./toy img/loonettunes.png";
import pic10 from "./toy img/mickymouse.webp";
import pic11 from "./toy img/motupatlu.png";
import pic12 from "./toy img/pikachu.png";
import pic13 from "./toy img/rapunzel.webp";
import pic14 from "./toy img/spiderman.webp";
import pic15 from "./toy img/unicorn.webp";

import brand1 from "./toy img/hasbro.webp";
import brand2 from "./toy img/funskool.png";
import brand3 from "./toy img/chicco.png";
import brand4 from "./toy img/himalya logo.png";
import brand5 from "./toy img/barbie.webp";
import brand6 from "./toy img/meemee.webp";
import brand7 from "./toy img/mamaearth.webp";
import brand8 from "./toy img/maisto.webp";
import brand9 from "./toy img/barbie.webp";
import brand10 from "./toy img/johnson_baby.png";
import brand11 from "./toy img/pigeon.png";

import cat1 from "./toy img/toys.jpg";
import cat2 from "./toy img/sports.jpg";
import cat3 from "./toy img/strollers.jpg";
import cat4 from "./toy img/cycles.jpg";
import cat5 from "./toy img/school.jpg";
import cat6 from "./toy img/softtoys.jpg";
import cat7 from "./toy img/gadgets.jpg";
import cat8 from "./toy img/gifts.jpg";
import cat9 from "./toy img/personalcare.jpg";

import trend1 from "./toy img/jenga game.png";
import trend2 from "./toy img/miko2.png";
import trend3 from "./toy img/nerf.webp";
import promocode from "./toy img/ooo.jpg";

import sale1 from "./toy img/best3.jpg";
import sale2 from "./toy img/best5.jpg";
import sale3 from "./toy img/best4.png";
import sale4 from "./toy img/best1.jpg";
import sale5 from "./toy img/best2.jpg";

import shop1 from "./toy img/shop by char.png";
import shop2 from "./toy img/shop by category.png";
import shop3 from "./toy img/shop by brand.png";
import shop4 from "./toy img/new arrivals.png";
import shop5 from "./toy img/offers.png";
import shop6 from "./toy img/best for u.png";

import sub from "./toy img/sub.png";
import sub1 from "./toy img/sub1.png";
import sub2 from "./toy img/sub2.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Character from "./components/Character";

const Home = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <div>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <button className="shopnow">
          <a href="tng">Shop Now</a>
        </button>

        {/* search */}
        <div id="search">
          <svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
            <rect class="bar" />

            <g class="magnifier">
              <circle class="glass" />
              <line class="handle" x1="32" y1="32" x2="44" y2="44"></line>
            </g>

            <g class="sparks">
              <circle class="spark" />
              <circle class="spark" />
              <circle class="spark" />
            </g>

            <g class="burst pattern-one">
              <circle class="particle circle" />
              <path class="particle triangle" />
              <circle class="particle circle" />
              <path class="particle plus" />
              <rect class="particle rect" />
              <path class="particle triangle" />
            </g>
            <g class="burst pattern-two">
              <path class="particle plus" />
              <circle class="particle circle" />
              <path class="particle triangle" />
              <rect class="particle rect" />
              <circle class="particle circle" />
              <path class="particle plus" />
            </g>
            <g class="burst pattern-three">
              <circle class="particle circle" />
              <rect class="particle rect" />
              <path class="particle plus" />
              <path class="particle triangle" />
              <rect class="particle rect" />
              <path class="particle plus" />
            </g>
          </svg>
          <input
            placeholder="Search"
            type="search"
            name="q"
            aria-label="Search for inspiration"
          />
        </div>

        <div id="results"></div>

        {/* services */}
        <div className="services-div">
          <div className="cover-ser">
            <div className="ser1">
              <i class="bx bxs-truck"></i>
              <br></br>
              <br></br>
              <h2 id="ch">
                Free <br></br>Shipping
              </h2>
            </div>
            <div className="ser1">
              <i class="bx bxs-phone-call"></i>
              <br></br>
              <br></br>
              <h2 id="ch">
                Give Us<br></br> A Call
              </h2>
            </div>
            <div className="ser1">
              <i class="bx bxs-package"></i>
              <br></br>
              <br></br>
              <h2 id="ch">
                Bulk<br></br> Inquiry
              </h2>
            </div>
            <div className="ser1">
              <i class="bx bxs-smile"></i>
              <br></br>
              <br></br>
              <h2 id="ch">
                Quality<br></br> Assurance
              </h2>
            </div>
          </div>
        </div>

        {/* categories home */}
        <div className="second">
          <Character />
        </div>

        {/* <div className="second">
          <div className="shopbycat">
            <img id="cat-img" src={shop2}></img>
          </div>
          <div class="scrollbox">
            <div class="box">
              <a href="tng">
                <img src={cat1}></img>
              </a>
            </div>
            <div class="box">
              <a href="sports">
                <img src={cat2}></img>
              </a>
            </div>
            <div class="box">
              <a href="strollers">
                <img src={cat3}></img>
              </a>
            </div>
            <div class="box">
              <a href="cycles">
                <img src={cat4}></img>
              </a>
            </div>
            <div class="box">
              <a href="school">
                <img src={cat5}></img>
              </a>
            </div>
            <div class="box">
              <a href="softtoys">
                <img src={cat6}></img>
              </a>
            </div>
            <div class="box">
              <a href="gadgets">
                <img src={cat7}></img>
              </a>
            </div>
            <div class="box">
              <a href="gifts">
                <img src={cat8}></img>
              </a>
            </div>
            <div class="box">
              <a href="personalcare">
                <img src={cat9}></img>
              </a>
            </div>
          </div>
        </div>

        <div className="second">
          <div className="shopbycat">
            <img id="cat-img" src={shop3}></img>
          </div>
          <div class="scrollbox">
            <div class="box">
              <a href="hasbro">
                <img src={brand1}></img>
              </a>
            </div>
            <div class="box">
              <a href="funskool">
                <img src={brand2}></img>
              </a>
            </div>
            <div class="box">
              <a href="chicco">
                <img src={brand3}></img>
              </a>
            </div>
            <div class="box">
              <a href="himalya">
                <img src={brand4}></img>
              </a>
            </div>
            <div class="box">
              <a href="barbie">
                <img src={brand5}></img>
              </a>
            </div>
            <div class="box">
              <a href="meemee">
                <img src={brand6}></img>
              </a>
            </div>
            <div class="box">
              <a href="mamaearth">
                <img src={brand7}></img>
              </a>
            </div>
            <div class="box">
              <a href="maisto">
                <img src={brand8}></img>
              </a>
            </div>
            <div class="box">
              <a href="johnsonbaby">
                <img src={brand9}></img>
              </a>
            </div>
            <div class="box">
              <a href="pigeon">
                <img src={brand10}></img>
              </a>
            </div>
          </div>
        </div> */}

        {/* trending */}
        <div className="trending-section">
          <div className="trending">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={trend1}></img>
                </div>
                <div class="flip-box-back">
                  <img src={trend1}></img>
                  <p>kjhgfd</p>
                  <button>shop now</button>
                </div>
              </div>
            </div>

            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={trend2}></img>
                </div>
                <div class="flip-box-back">
                  <img src={trend2}></img>
                  <p>Mico2</p>
                  <button>shop now</button>
                </div>
              </div>
            </div>

            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={trend3}></img>
                </div>
                <div class="flip-box-back">
                  <img src={trend3}></img>
                  <p>uytre</p>
                  <button>shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* spotlight */}
        <div className="spotlight"></div>

        {/* Promo code */}
        <div className="promo-section">
          <div className="promocode">
            <img id="cat-img2" src={shop5}></img>
          </div>
          <div className="promo-div">
            <div class="coupon">
              <div class="containerpro">
                <h3>Company Logo</h3>
              </div>
              <img src={promocode} className="promoimg" />
              <div class="containerpro">
                <h2>
                  <b>20% OFF YOUR PURCHASE</b>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te
                  minim soleat senserit, ex quo luptatum tacimates voluptatum,
                  salutandi delicatissimi eam ea. In sed nullam laboramus
                  appellantur, mei ei omnis dolorem mnesarchum.
                </p>
              </div>
              <div class="containerpro">
                <p>
                  Use Promo Code: <span class="promo">BOH232</span>
                </p>
                <p class="expire">Expires: Jan 03, 2021</p>
              </div>
            </div>
            <div class="coupon">
              <div class="containerpro">
                <h3>Company Logo</h3>
              </div>
              <img src={promocode} className="promoimg" />
              <div class="containerpro">
                <h2>
                  <b>20% OFF YOUR PURCHASE</b>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te
                  minim soleat senserit, ex quo luptatum tacimates voluptatum,
                  salutandi delicatissimi eam ea. In sed nullam laboramus
                  appellantur, mei ei omnis dolorem mnesarchum.
                </p>
              </div>
              <div class="containerpro">
                <p>
                  Use Promo Code: <span class="promo">BOH232</span>
                </p>
                <p class="expire">Expires: Jan 03, 2021</p>
              </div>
            </div>
          </div>
        </div>

        {/* best for u */}
        <div className="photos-sec">
          <div className="photos-head">
            <img id="cat-img2" src={shop6}></img>
          </div>

          <div className="photos">
            <div className="first-div">
              <div className="one">
                <img src={sale1}></img>
              </div>
              <div>
                <div className="two">
                  <img src={sale2}></img>
                </div>
                <div className="three">
                  <img src={sale3}></img>
                </div>
              </div>
            </div>
            <div className="second-div">
              <div className="four">
                <img src={sale4}></img>
              </div>
              <div className="five">
                <img src={sale5}></img>
              </div>
            </div>
          </div>
        </div>

        {/* book nook ad */}
        <div className="booknook"></div>

        {/* vedio section */}
        <div className="video">
          <video muted autoPlay loop id="video">
            <source src={vdo} type="video/mp4" />
          </video>
        </div>

        {/* subscription section */}
        <div className="shopbycat">
          <img id="cat-img" src={sub}></img>
        </div>

        <section class="ptbm pricingPaid">
          <div class="containersub">
            <div class="row">
              <div class="col-xs-12 col-md-3 col-sm-6">
                <div class="panel pricingGrid pricingBasic" id="sub1">
                  <div class="panel-heading">
                    <h3>Basic</h3>
                  </div>
                  <div class="panel-body">
                    <p>Features Include</p>
                    <ul>
                      <li>
                        <strong>2</strong> Users
                      </li>
                      <li>
                        <strong>2</strong> Service Workflows
                      </li>
                      <li>Unlimited Invoice</li>
                    </ul>
                  </div>
                  <div class="panel-footer">
                    <div class="pricingRate">
                      <div class="priceAnnual">
                        <span class="price">
                          <sup>$</sup>50<small>/month</small>
                        </span>
                        <span class="pricePlans">Save $120 Annually</span>
                      </div>
                      <div class="priceMonthly">
                        <span class="price priceMonthly">
                          <sup>$</sup>60<small>/month</small>
                        </span>{" "}
                        <span class="pricePlans">$50 when paid annually</span>
                      </div>
                    </div>
                    <div class="pricingButton">
                      <a
                        href="register?plan=basic_annual"
                        class="btn btnAnnually btnPrimary"
                      >
                        Get Started
                      </a>{" "}
                      <a
                        href="register?plan=basic_monthly"
                        class="btn btnMonthly btnPrimary"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-3 col-sm-6" id="sub2">
                <div class="panel pricingGrid pricingPlus">
                  <div class="panel-heading">
                    <h3>Plus</h3>
                    <label>Most Popular</label>
                    <div class="christmasIcons">
                      <img
                        class="christmasHat"
                        src="https://s3-ap-southeast-2.amazonaws.com/agentcis-wp/wp-content/uploads/20161201053953/christmas-hat-icon.png"
                      />
                    </div>
                  </div>
                  <div class="panel-body">
                    <p>Features Include</p>
                    <ul>
                      <li>
                        <strong>5</strong> Users
                      </li>
                      <li>
                        <strong>4</strong> Service Workflows
                      </li>
                      <li>Unlimited Invoice</li>
                    </ul>
                  </div>
                  <div class="panel-footer">
                    <div class="pricingRate">
                      <div class="priceAnnual">
                        <span class="price">
                          <sup>$</sup>100<small>/month</small>
                        </span>
                        <span class="pricePlans">Save $240 Annually</span>
                      </div>
                      <div class="priceMonthly">
                        <span class="price priceMonthly">
                          <sup>$</sup>120<small>/month</small>
                        </span>{" "}
                        <span class="pricePlans">$100 when paid annually</span>
                      </div>
                    </div>
                    <div class="pricingButton">
                      <a
                        href="register?plan=plus_annual"
                        class="btn btnAnnually btnOrange"
                      >
                        Get Started
                      </a>{" "}
                      <a
                        href="register?plan=plus_monthly"
                        class="btn btnMonthly btnOrange"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-3 col-sm-6" id="sub3">
                <div class="panel pricingGrid pricingPremium">
                  <div class="panel-heading">
                    <h3>Premium</h3>
                  </div>
                  <div class="panel-body">
                    <p>Features Include</p>
                    <ul>
                      <li>
                        <strong>10</strong> Users
                      </li>
                      <li>
                        <strong>8</strong> Service Workflows
                      </li>
                      <li>Unlimited Invoice</li>
                    </ul>
                  </div>
                  <div class="panel-footer">
                    <div class="pricingRate">
                      <div class="priceAnnual">
                        <span class="price">
                          <sup>$</sup>150<small>/month</small>
                        </span>
                        <span class="pricePlans">Save $360 Annually</span>
                      </div>
                      <div class="priceMonthly">
                        <span class="price priceMonthly">
                          <sup>$</sup>180<small>/month</small>
                        </span>{" "}
                        <span class="pricePlans">$150 when paid annually</span>
                      </div>
                    </div>
                    <div class="pricingButton">
                      <a
                        href="register?plan=premium_annual"
                        class="btn btnAnnually btnPurple"
                      >
                        Get Started
                      </a>{" "}
                      <a
                        href="register?plan=premium_monthly"
                        class="btn btnMonthly btnPurple"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* contact location */}
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58681.27016569356!2d77.39621378002248!3d23.185546739059628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4397df517e3f%3A0xb0a2c4bc624133d6!2sToy%20Station!5e0!3m2!1sen!2sin!4v1715321935180!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="container-loc">
          <div className="con">
            <h2>Contact Us</h2>
            <p>
              Address: A-8, Phase 1, Tilak Nagar, Bawadiya Kalan,
              <br /> Gulmohar Colony Bhopal Madhya Pradesh 462026 Phone: 093006
              48212
            </p>
          </div>
          <div class="row">
            <div class="column">
              <img src={logo} />
            </div>
            <div class="column">
              <form action="/action_page.php">
                <label for="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="Your name.."
                />
                <label for="lname">Email Address</label>
                <input
                  type="text"
                  id="lname"
                  name="email"
                  placeholder="Your email.."
                />
                <label for="subject">Message</label>
                <textarea
                  id="subject"
                  name="comment"
                  placeholder="Write something.."
                ></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* mision vision */}
      <div className="mission-home"></div>

      {/* footer */}
      <footer class="footer">
        <div class="footer__addr">
          <img src={logo}></img>

          <address>
            <br />
            <p>
              Address: A-8, Phase 1, Tilak Nagar, Bawadiya Kalan,
              <br /> Gulmohar Colony Bhopal Madhya Pradesh 462026
              <br />
              Phone: 093006 48212
            </p>
            <div className="mail">
              <i class="bx bxl-gmail"></i>
              <a class="footer__btn" href="mailto:example@gmail.com">
                <input placeholder="Email Us"></input>
              </a>
            </div>
          </address>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Media</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
              <li>
                <a href="./about">About Us</a>
              </li>
              {token ? (
                <li>
                  <Link to="/admin/dashboard">Admin Login</Link>
                </li>
              ) : (
                <li>
                  <Link to="/login">Admin Login</Link>
                </li>
              )}
            </ul>
          </li>

          <li class="nav__item nav__item--extra">
            <h2 class="nav__title">Category</h2>

            <ul class="nav__ul nav__ul--extra">
              <li>
                <a href="#">Toys & Games</a>
              </li>

              <li>
                <a href="#">Sports & Outdoor</a>
              </li>

              <li>
                <a href="#">Strollers & Walkers</a>
              </li>

              <li>
                <a href="#">Ride-Ons & Cycles</a>
              </li>

              <li>
                <a href="#">School & Statinery</a>
              </li>

              <li>
                <a href="#">Soft Toys & Plushies</a>
              </li>

              <li>
                <a href="#">Gadgets</a>
              </li>

              <li>
                <a href="#">Personal Care & Hygiene</a>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title">Contact</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Support</a>
              </li>

              <li>
                <a href="#"></a>
              </li>

              <li>
                <a href="#">Map</a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Home;
