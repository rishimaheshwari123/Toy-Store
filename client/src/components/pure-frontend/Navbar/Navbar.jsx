import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "./../../../logo.png";

import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { fetchCategory } from "../../../services/operations/admin";
import { handleIsMenuOpen } from "../../../redux/newsSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [click, setClick] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { category } = useSelector((state) => state.news);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotifcationOpen, setNotification] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const togglenoti = () => {
    setNotification(!isNotifcationOpen);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await fetchCategory();
        setCategories(categoriesData?.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    if (category.length !== 0) {
      setCategories(category);
    } else fetchCategories();
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisibility);

  const handleNavClick = () => setNav(!nav);

  const handleDropdownClick = (index) => {
    setDropdownIndex(index === dropdownIndex ? null : index);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <nav className="text-xl fixed w-screen top-0 z-50">
      <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 relative">
        <div className="mx-auto flex justify-between w-11/12 items-center py-2">
          <div className="text-2xl font-bold flex items-center gap-5">
            <IoMenu
              onClick={() => dispatch(handleIsMenuOpen())}
              className="text-3xl cursor-pointer text-yellow-300 hover:text-yellow-500"
            />
            <Link to="/">
              <img
                src={logo}
                className={`transition-all duration-300 ${
                  isVisible ? "w-12" : "w-16"
                } rounded-md`}
                alt="Logo"
              />
            </Link>
          </div>

          <ul className="hidden md:flex space-x-6 items-center ">
            <li>
              <Link to="/" className="text-white hover:text-yellow-300">
                Home
              </Link>
            </li>
            {categories.map((category, index) => (
              <li
                key={category._id}
                className="group "
                onMouseEnter={() => {
                  handleDropdownClick(index);
                  setClick(true);
                }}
                onMouseLeave={() => {
                  handleDropdownClick(null);
                  setClick(false);
                }}
                onClick={() => setNav(false)}
              >
                <Link
                  to={`/category/${category._id}`}
                  className={`text-white hover:text-yellow-300 ${
                    dropdownIndex === index ? "underline" : ""
                  }`}
                  onClick={() => setClick(false)}
                >
                  {category.name}
                </Link>
                {dropdownIndex === index && click && (
                  <div className="absolute top-12 left-[10%] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 text-black rounded-md mt-2 py-5 px-4 min-w-[80vw] flex gap-16 shadow-lg  border-[#d1d1d1]">
                    <ul className="text-sm grid grid-cols-4 w-full">
                      {category.subCategories.map((subCategory) => (
                        <li key={subCategory._id} className="py-2">
                          <Link
                            to={`/subcategory/${subCategory._id}`}
                            className="text-white font-bold hover:text-blue-800 transition-colors duration-300"
                          >
                            {truncateText(subCategory.name, 15)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <ul
            className={`md:hidden ${
              nav ? "block" : "hidden"
            } bg-blue-900 px-4 py-6 space-y-4`}
          >
            <li>
              <Link to="/" className="text-white hover:text-yellow-300">
                Home
              </Link>
            </li>
            {categories.map((category, index) => (
              <li key={category._id} className="hover:text-yellow-300">
                <div
                  to={category.href || "#"}
                  className="flex items-center gap-4"
                >
                  <Link
                    to={`/category/${category._id}`}
                    onClick={() => setNav(false)}
                  >
                    {category.name}
                  </Link>
                  {category?.subCategories?.length !== 0 && (
                    <MdKeyboardArrowDown
                      className="text-white hover:text-yellow-300"
                      onClick={() => {
                        if (category.subCategories.length !== 0) {
                          handleDropdownClick(index);
                          return;
                        }
                        setNav(false);
                      }}
                    />
                  )}
                </div>
                {dropdownIndex === index && category.subCategories && (
                  <ul className="pl-6">
                    {category.subCategories.map((subCategory) => (
                      <li
                        key={subCategory._id}
                        className="py-2 hover:text-yellow-300"
                      >
                        <Link to={`/subcategory/${subCategory._id}`}>
                          {subCategory.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <div className="flex items-center justify-center space-x-4">
              <Link to="https://www.facebook.com">
                <FaFacebook
                  size={24}
                  className="text-white hover:text-yellow-300"
                />
              </Link>
              <Link to="https://www.instagram.com">
                <FaInstagram
                  size={24}
                  className="text-white hover:text-yellow-300"
                />
              </Link>
              <Link to="https://www.youtube.com">
                <FaYoutube
                  size={24}
                  className="text-white hover:text-yellow-300"
                />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
