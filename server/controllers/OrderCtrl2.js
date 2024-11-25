// const razorpayInstance = require ("../config/razorpay")
const Order = require("../model/orderModel")
const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require('uuid');
const Product = require("../model/product")
const { razorpayInstance } = require("../config/ragorpay")
const crypto = require("crypto")
const axios = require("axios")

const User = require("../model/auth");





const capturePayment = async (req, res) => {
  const { products } = req.body;
  console.log(req.body)
  const { id } = req.user;

  try {
    // Check if user ID exists
    if (!id) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Fetch user details including totalCredit (coins)
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // console.log("User:", user);

    // Calculate maximum allowable coin usage (20% of total amount or available coins, whichever is lower)
    let total_amount = 0;
    for (const item of products) {
      const product_id = item.product._id;
      let product;

      try {
        // Find the product by its ID
        product = await Product.findById(product_id);

        // If the product is not found, return an error
        if (!product) {
          return res.status(404).json({ success: false, message: `Product with ID ${product_id} not found` });
        }

        // Add the price of the product to the total amount
        let am = product.price * item.quantity
        total_amount += am;
    
      } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
      }
    }



    
    
    // Prepare payment options
    const options = {
      amount: total_amount * 100, // Amount in paise (multiplied by 100)
      currency: "INR",
      receipt: Math.random(Date.now()).toString(),
    };

    // Initiate payment using your preferred gateway (e.g., Razorpay)
    const paymentResponse = await razorpayInstance.orders.create(options);
    // console.log("Payment Response:", paymentResponse);
   

    // Send success response with payment data
    res.json({
      success: true,
      data: paymentResponse,
    });

  } catch (error) {
    console.error("Capture Payment Error:", error);
    res.status(500).json({ success: false, message: "Could not initiate order." });
  }
};


const paymentVerification = async (req, res) => {
  console.log("enter verify")
    const razorpay_order_id = req.body?.razorpay_order_id
    const razorpay_payment_id = req.body?.razorpay_payment_id
    const razorpay_signature = req.body?.razorpay_signature
    const product = req.body?.products
    const address = req.body?.address
    const payable = req.body?.payable
  
  const userId = req.user.id

    let body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex")
  
      if (expectedSignature === razorpay_signature) {
        try {
          // Call the createOrder function

         
          await createOrder(product, userId, address, razorpay_order_id, razorpay_payment_id, payable, res);
      
          // Send the response after the order is successfully created
          return res.status(200).json({ success: true, message: "Payment Verified" });
        } catch (error) {
          // Handle any errors that occur during order creation
          console.error("Error creating order:", error);
          return res.status(500).json({ success: false, message: "Error creating order" });
        }
      }
      
  
    return res.status(200).json({ success: false, message: "Payment Failed" })
};







const createOrder = asyncHandler(async (products, userId, fullAddress, razorpay_order_id, razorpay_payment_id,payable, res) => {
  const userDetails = await User.findById(userId);
console.log(payable)
  const {
    city,
    pincode,
    state,
    
    address,
   
  } = fullAddress;


  const email = userDetails.email;

  try {


    const order = await Order.create({
      user: userId,
      shippingInfo: {
              name: userDetails.name, // assuming user has a name field
              address: address,
              city: city,
              state: state,
              pincode: pincode,
            },
      paymentInfo: {
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
      },
      orderItems: products.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      totalPrice: payable, // Update with actual total price
    });





    



  

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

  // Send Payment Success Email


const shipRocket = asyncHandler(async(address, products,payable,userId)=>{

  console.log("product",products)

  const orderItems = products.map(p => ({
    name: p.product.title,
    sku: p.product._id,
    units: p.quantity,
    selling_price: p.product.price,
    discount: 0,
    tax: 0,
    hsn: "0000"
  }));

  console.log("items",orderItems)


const userDetails = await User.findById(userId)

  const{
    name,
    email
  } = userDetails

  const orderPayload = {
    order_id: "123",
    order_date: new Date().toISOString(),
    pickup_location: "Primary",
    channel_id: "WEB",
    comment: "Urgent delivery needed",
    billing_customer_name: name,
    billing_last_name: "",
    billing_address: address.billingAddress,
    billing_address_2: "",
    billing_city: address.billingCity,
    billing_pincode: address.billingPincode,
    billing_state: address.billingState,
    billing_country: address.billingCountry,
    billing_email: email,
    billing_phone: address.billingPhone,
    shipping_is_billing: true,
    order_items: orderItems,
    payment_method: "Prepaid",
    shipping_charges: "50",
    giftwrap_charges: "0",
    transaction_charges: "0",
    total_discount: "0",
    sub_total: payable,
    length: "10",
    breadth: "5",
    height: "2",
    weight: "0.5",
    ewaybill_no: "",
    customer_gstin: "",
    invoice_number: "",
    order_type: "ESSENTIALS"
  };

  try {
    const loginData = {
      email: "sendeepak182@gmail.com",
      password: "Vikash@123"
    };

    const loginResponse = await axios.post('https://apiv2.shiprocket.in/v1/external/auth/login', loginData);
    const token = loginResponse.data.token;

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const orderResponse = await axios.post('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', orderPayload, config);



    const { order_id, shipment_id } = orderResponse.data;

    if (order_id && shipment_id) {
      return { order_id, shipment_id };
    } else {
      throw new Error('An error occurred while creating the order');
    }
  
  } catch (error) {
    console.error('Error creating order:', error.response?.data || error.message);
    throw new Error('An error occurred while creating the order');
  }
});


const getAllOrder = async(req,res)=>{
  try {

    const userId = req.user.id
console.log(userId)
    if(!userId){
      return res.status(401).json({
        success: false,
        message: `User is not Found`,
      })
    }
    
    const orders = await Order.find({ user: userId })
    .populate({
        path: 'orderItems.product',
        model: 'Product',
    })
    .exec();

console.log('Populated Orders:', orders);

    return res.status(200).json({
      orders,
success: true,
message: `Fetch Orders Successfully`,
})

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: `Error During fetch order`,
    })
  }
}


const adminAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .populate({
        path: 'orderItems.product',
        model: 'Product',
      })
      .exec();

    return res.status(200).json({
      success: true,
      message: `Fetch All Orders Successfully`,
      orders,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Error During fetch all orders`,
    });
  }
};


module.exports = {
    capturePayment,
  paymentVerification,
  createOrder,
  shipRocket,
  getAllOrder,
  adminAllOrders
};
