import { Link } from "react-router-dom";

const Shop = () => {

    return (
        <>
            <div className="mainheading">
                <h1>CheckOut</h1>
            </div>

            <table width="90%" align="center">
                <tr className="rowheading" align="center">
                    <td> </td>
                    <td> Product Name </td>
                    <td> Price per unit</td>
                    <td> Quantity </td>
                    <td> Total </td>
                    <td> Remove Item</td>
                </tr>
                <tr>
                    <td colSpan="7" >
                        <hr size="4" color="#81C408" />
                    </td>
                </tr>




            </table>
            <div className="netAmount" >
                Total Amount :
            </div>

            <br /> <br />
            <div style={{ textAlign: "center", padding: "10px" }}>
                <Link to="/buynow" id="btnbuy" > Proceed To Buy </Link>
            </div>
        </>
    );
}

export default Shop;