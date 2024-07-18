

const One = () => {
    return (
        <>
            <div className="toygames">
                <div className="sidenav1">
                    <div className='filter-head'>
                        <h3>Filters</h3>
                    </div>

                    <hr />
                    <div className='filter'>
                        <div className='filters'>
                            <label for="categories" >Categories</label>
                            <select id="categories" name="category">
                                <option value="">Select Category</option>
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
                            <select id="price" name="price">
                                <option value="">Select price</option>
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
                            <select id="brand" name='brand'>
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
                    </div>


                    <button id='click'>Apply Filters</button>
                    <button id='click'>Reset Filters</button>

                </div>

                <div className='outlet1'>
                    <div id="cartItem">
                        <div className='pages-head-img'>
                            {/* <img src={img1}></img> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default One;