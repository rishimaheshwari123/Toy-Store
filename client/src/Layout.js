import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import brand1 from './toy img/hasbro.webp';
import brand2 from './toy img/funskool.png';
import brand3 from './toy img/chicco.png';
import brand4 from './toy img/himalya logo.png';
import brand5 from './toy img/barbie.webp';
import brand6 from './toy img/meemee.webp';
import brand7 from './toy img/mamaearth.webp';
import brand8 from './toy img/maisto.webp';
import brand9 from './toy img/barbie.webp';
import brand10 from './toy img/johnson_baby.png';

import chr1 from './toy img/angrybird.png';
import chr2 from './toy img/anna.webp';
import chr3 from './toy img/avengers.jpg';
import chr4 from './toy img/barbiechr.webp';
import chr5 from './toy img/batman.jpg';
import chr6 from './toy img/spiderman.webp';
import chr7 from './toy img/doraemon.png';
import chr8 from './toy img/ironman.webp';
import chr9 from './toy img/loonettunes.png';
import chr10 from './toy img/mickymouse.webp';
import chr11 from './toy img/motupatlu.png';
import chr12 from './toy img/pikachu.png';
import chr13 from './toy img/rapunzel.webp';
import chr14 from './toy img/unicorn.webp';

import age1 from './toy img/infant.jpeg';
import age2 from './toy img/2-3.png';
import age3 from './toy img/4-5.webp';
import age4 from './toy img/5-7.jpg';
import age5 from './toy img/6-7.avif';
import age6 from './toy img/more.png';
import Navbar from "./components/pure-frontend/Navbar/Navbar";


const Layout = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  // const mycartData = useSelector((state) => state.addtocart.cart);
  // const proCount = mycartData.length;
  const toggleResponsive = () => {
    setIsResponsive(prevState => !prevState);
  };

  return (
    <>
      <head>
        <link rel="stylesheet" href="./style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body>


        {/* <nav class="navbar navbar-expand-lg" id="navbar">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="" id="navbarTogglerDemo01">
              <ul class="navbar-nav me-auto">
                <li class="nav-item dropdown">
                  <Link class="nav-link" to="/" id="home">
                    Home
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" id="category" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </Link>
                  <ul class="dropdown-menu">
                    <div className="dropdown-item container-fluid category">
                      <div className="cat1">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="/tng">Toys & Games</Link></h4>
                          <Link class="dropdown-item" to="#">Action Games & Toys</Link>
                          <Link class="dropdown-item" to="#">Activity Kits & Toys</Link>
                          <Link class="dropdown-item" to="#">Construction & Building Toys</Link>
                          <Link class="dropdown-item" to="#">See More</Link>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="sports">Sports & Outdoor</Link></h4>
                          <Link class="dropdown-item" to="#">Outdoor Sports</Link>
                          <Link class="dropdown-item" to="#">Indoor Sports</Link>
                          <Link class="dropdown-item" to="#">Outdoor Leisure</Link>
                          <Link class="dropdown-item" to="#">See More</Link>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="strollers">Strollers & Walkers</Link></h4>
                          <Link class="dropdown-item" to="#">Baby Strollers</Link>
                          <Link class="dropdown-item" to="#">Baby Walkers</Link>
                          <Link class="dropdown-item" to="#">See More</Link>
                        </div>
                      </div>
                      <div className="cat2">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="cycles">Ride-Ons & Cycles</Link></h4>
                          <Link class="dropdown-item" to="#">Ride-Ons</Link>
                          <Link class="dropdown-item" to="#">Scooters</Link>
                          <Link class="dropdown-item" to="#">Cycles & Tricycles</Link>
                          <Link class="dropdown-item" to="#">See More</Link>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="school">School & Stationery</Link></h4>
                          <Link class="dropdown-item" to="#">School Supplies</Link>
                          <Link class="dropdown-item" to="#">Stationery</Link>
                          <Link class="dropdown-item" to="#">See More</Link>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="softtoys">Soft Toys & Plushies</Link></h4>
                          <Link class="dropdown-item" to="#">Soft Toys</Link>
                          <Link class="dropdown-item" to="#">Toys & Games</Link>
                          <Link class="dropdown-item" to="#">See More</Link>
                        </div>
                      </div>
                      <div className="cat3">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="gadgets">Gadgets & Devices</Link></h4>
                          <Link class="dropdown-item" to="#">Audio</Link>
                          <Link class="dropdown-item" to="#">Security</Link>
                          <Link class="dropdown-item" to="#">See More</Link>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="gifts">Gifts & More</Link></h4>
                          <Link class="dropdown-item" to="#">Party Supplies</Link>
                          <Link class="dropdown-item" to="#">Gift Sets</Link>
                          <Link class="dropdown-item" to="#">See More</Link>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="personalcare">Personal Care & Hygiene</Link></h4>
                          <Link class="dropdown-item" to="#">Baby & Personal Care</Link>
                          <Link class="dropdown-item" to="#">Bath Accessories</Link>
                          <Link class="dropdown-item" to="#">Health</Link>
                          <Link class="dropdown-item" to="#">See More</Link>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" id="brand" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Brand
                  </Link>
                  <ul class="dropdown-menu">
                    <div className="dropdown-item container-fluid brand">
                      <div className="brn1">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="hasbro"><img src={brand1}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="funskool"><img src={brand2}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="chicco"><img src={brand3}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="himalya"><img src={brand4}></img></Link></h4>
                        </div>
                      </div>
                      <div className="brn2">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="barbie"><img src={brand5}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="meemee"><img src={brand6}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="mamaearth"><img src={brand7}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="maisto"><img src={brand8}></img></Link></h4>
                        </div>
                      </div>
                      <div className="brn3">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="barbie"><img src={brand9}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="johnsonaby"><img src={brand10}></img></Link></h4>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" id="characters" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Characters
                  </Link>
                  <ul class="dropdown-menu">
                    <div className="dropdown-item container-fluid char">
                      <div className="chr1">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="angrybird"><img src={chr1}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="anna"><img src={chr2}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="avengers"><img src={chr3}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="barbie"><img src={chr4}></img></Link></h4>
                        </div>
                      </div>
                      <div className="chr2">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="batman"><img src={chr5}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="spiderman"><img src={chr6}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="doraemon"><img src={chr7}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="ironman"><img src={chr8}></img></Link></h4>
                        </div>
                      </div>
                      <div className="chr3">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="loonetunes"><img src={chr9}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="mickeymouse"><img src={chr10}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="motupatlu"><img src={chr11}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="pikachu"><img src={chr12}></img></Link></h4>
                        </div>
                      </div>
                      <div className="chr4">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="rapunzel"><img src={chr13}></img></Link></h4>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="unicorn"><img src={chr14}></img></Link></h4>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" id="age" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Age
                  </Link>
                  <ul class="dropdown-menu">
                    <div className="dropdown-item container-fluid age">
                      <div className="age1">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="one"><img src={age1}></img></Link></h4>
                          <h5>0-1 Years</h5>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="two"><img src={age2}></img></Link></h4>
                          <h5>1-3 Years</h5>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="three"><img src={age3}></img></Link></h4>
                          <h5>5-7 Years</h5>
                        </div>
                      </div>
                      <div className="age2">
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="four"><img src={age4}></img></Link></h4>
                          <h5>8-11 Years</h5>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="five"><img src={age5}></img></Link></h4>
                          <h5>12 +</h5>
                        </div>
                        <div>
                          <h4><Link class="dropdown-item fw-bold" to="more"><img src={age6}></img></Link></h4>
                          <h5>Show All</h5>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
              </ul>

            </div>
          </div>
        </nav> */}

        <div >

          <Navbar />
        </div>


        <div>
          <Outlet />
        </div>

        {/* footer */}
        {/* <div class="footer">
          <div className="layer">
            <div footer-content>
              <div className='address-footer'>
                <i class='bx bxs-location-plus'></i>
                <p>B2-1004, MARATHON NEXTGEN<br></br> INNOVA, LOWER PAREL,<br></br>MUMBAI-400 013, INDIA.</p>
              </div>
              <br></br>
              <div className='email-footer'>
                <i class='bx bxs-envelope' ></i>
                <p>info@subahotels.com</p>
              </div>
              <br></br>
              <div className='call-footer'>
                <i class='bx bxs-phone-call' ></i>
                <p>+912266820707</p>
              </div>
              <br></br><br></br>
              <div className='social-icons-footer'>
                <a href='#'><i class='bx bxl-facebook-square' ></i></a>
                <a href='#'><i class='bx bxl-instagram-alt' ></i></a>
                <a href='#'><i class='bx bxl-linkedin-square' ></i></a>
              </div>
            </div>
            <div className='footer-logo'>
              <img src={logofinal}></img>
            </div>
            <div className='footer-contact'>
              <h1>HEAR FROM US</h1>
              <br></br>
              <h5>JOIN OUR MAILING LIST <br></br> FOR THE BEST OFFERS <br></br> AT SUBA.</h5>
              <br></br><br></br>
              <input type='text' placeholder='E-MAIL'></input><button>SIGN UP</button>
            </div>
          </div>
        </div> */}

        {/* footer-nav-elements */}
        {/* <div className='footer-nav-elements'>
          <div class="footer-nav">
            <ul>
              <Link to="home">Home</Link>
              <Link to="about">About</Link>
              <Link to="rooms">Rooms</Link>
              <Link to="facilities/services">Amenities</Link>
              <Link to="photos">Gallery</Link>
              <Link to="contact">Contact</Link>
            </ul>
          </div>
        </div> */}
      </body>
    </>
  )
}
export default Layout;