import img1 from './toy img/toy page.png';

import { useSelector, useDispatch } from "react-redux";
import { addData } from "./productSlice";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const One = ({product}) => {


    const [filteredProducts, setFilteredProducts] = useState(product);
    const [filters, setFilters] = useState({
        category: '',
        price: '',
        brand: '',
        age: ''
    });

    const handleFilterChange = (event) => {
        console.log(event.target)
        const { name, value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const applyFilters = () => {
        let filteredData = product;

// Apply category filter
if (filters.category) {
    const formattedCategory = filters.category.replace(/_/g, ' ').toLowerCase();
    filteredData = filteredData.filter(item => item.category.toLowerCase() === formattedCategory);
}

// Apply price filter
if (filters.price) {
    const [minPrice, maxPrice] = filters.price.split('-').map(parseFloat);
    filteredData = filteredData.filter(item => {
        const itemPrice = parseFloat(item.price);
        return itemPrice >= minPrice && itemPrice <= maxPrice;
    });
}



        // Apply brand filter
        if (filters.brand) {
            filteredData = filteredData.filter(item => item.brand === filters.brand);
        }

        // Apply age filter
        if (filters.age) {
            filteredData = filteredData.filter(item => item.age === filters.age);
        }

        setFilteredProducts(filteredData);
    };

    const resetFilters = () => {
        setFilters({
            category: '',
            price: '',
            brand: '',
            age: ''
        });
        setFilteredProducts(product);
    };








    const mycart = useSelector((state) => state.addtocart.cart);
    console.log(mycart);
    const dispatch = useDispatch();
    const mydataAdd = (id, name, image, price) => {
        let productObj = { id: id, name: name, image: image, price: price, quantity: 1 };
        dispatch(addData(productObj));
    }
    const proAns = filteredProducts?.map((key) => {
        return (
            <>
                <div className="cartData">
                    <div id="imgbox">
                        <img src={"images/" + key.image} style={{ width: "300px", height: "500px" }} />
                    </div>
                    <br />
                    <h2> {key.name} </h2>

                    <div className="producprice">
                        <h4> Rs. <span style={{ fontWeight: "100" }}>{key.price} </span> </h4>
                    </div>
                    <br />
                    <div className='shop-btn'>
                        <button onClick={() => { mydataAdd(key.id, key.name, key.image, key.price) }}> Add To Cart</button>
                        <button id='likebtn'>
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                </div>
            </>
        );
    });
    return(
        <>
        <div className="toygames">
        <div className="sidenav1">
                    <div className='filter-head'>
                        <h3>Filters</h3>
                    </div>
                    <hr />
                    <div className='filters'>
                    <label for="categories" >Categories</label>
<select id="categories" name="category"  value={filters.category} onChange={handleFilterChange}>
    <option value="">Selcte Cate</option>
    <option value="action_games_&_toys">Action Games & Toys</option>
    <option value="activity_kits_&_toys">Activity Kits & Toys</option>
    <option value="construction_&_building_toys">Construction & Building Toys</option>
    <option value="indoor_sports">Indoor Sports</option>
    <option value="outdoor_sports">Outdoor Sports</option>
    <option value="outdoor_leisure">Outdoor Leisure</option>
    <option value="baby_strollers">Baby Strollers</option>
    <option value="baby_walkers">Baby Walkers</option>
    <option value="ride_ons">Ride-Ons</option>
    <option value="scooters">Scooters</option>
    <option value="cycles__&_tricycles">Cycles & Tricycles</option>
    <option value="school_supplies">School Supplies</option>
    <option value="stationery">Stationery</option>
    <option value="soft_toys">Soft Toys</option>
    <option value="audio">Audio</option>
    <option value="party_supplies">Party Supplies</option>
    <option value="gift_sets">Gift Sets</option>
    <option value="baby_&_personal_care">Baby & Personal Care</option>
    <option value="health">Health</option>
</select>

                    </div>
                    <hr />
                    <div className='filters'>
                    <label for="price" >Price</label>
<select id="price" name="price" value={filters.price} onChange={handleFilterChange}>
    <option value="">Secte price</option>
    <option value="100-500">Under 500</option>
    <option value="500-1000">500 - 1000</option>
    <option value="1000-2000">1000-2000</option>
    <option value="2000-5001">2000 & Above</option>
    <option value="5000-10000">5000 & Above</option>
</select>

                    </div>
                    <hr />
                    <div className='filters'>
                    <label for="brand">Brand</label>
<select id="brand" name='brand'  value={filters.brand} onChange={handleFilterChange}>
    <option value="">Select Brand</option>
    <option value="Hasbro">Hasbro</option>
    <option value="Funskool">Funskool</option>
    <option value="Chicco">Chicco</option>
    <option value="Himalya">Himalya</option>
    <option value="Barbie">Barbie</option>
    <option value="Mee & Mee">Mee & Mee</option>
    <option value="Mama Earth">Mama Earth</option>
    <option value="Maisto">Maisto</option>
    <option value="Johnson Baby">Johnson Baby</option>
</select>
                    </div>
                    <hr />
                    <div className='filters'>
                    <label for="age">Age</label>
<select id="age">
    <option value="Infant">Select Age</option>
    <option value="Infant">Infant</option>
    <option value="1-2">1-2</option>
    <option value="2-4">2-4</option>
    <option value="4-7">4-7</option>
    <option value="7-10">7-10</option>
    <option value="12 & Above">12 & Above</option>
</select>

                    </div>


                    <button onClick={applyFilters}>Apply Filters</button>
            <button onClick={resetFilters}>Reset Filters</button>

                </div>

                <div className='outlet1'>
                    <div id="cartItem">
                        <div className='pages-head-img'>
                            {/* <img src={img1}></img> */}
                        </div>
                        {proAns}
                    </div>
                </div>
            </div>
        </>
    );
}
export default One;