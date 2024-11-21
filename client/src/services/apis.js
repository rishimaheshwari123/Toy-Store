
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = "https://news-uab9.onrender.com/api/v1";

// const BASE_URL = "http://localhost:8080/api/v1"


export const endpoints = {
  LOGIN_API: BASE_URL + "/auth/login",
  SIGNUP_API: BASE_URL + "/auth/register",
  GET_SINGEL_USER: BASE_URL + "/auth/get",
}

export const adminEndpoints = {
  ADD_NEWS_API: BASE_URL + "/news/create",
  UPDATE_NEWS_API: BASE_URL + "/news/update",
  GET_ALL_NEWS_API: BASE_URL + "/news/all",
  DELETE_NEWS_API: BASE_URL + "/news/delete",
  DETAILS_NEWS_API: BASE_URL + "/news",




  ALL_NOTIFICATIONS_API: BASE_URL + "/news/notifications",

  // ACTIVE STATUS
  STATUS_NEWS_API: BASE_URL + "/news/toggleActive",

  //bREAKING nEWS
  CREATE_BREAKING_NEWS: BASE_URL + "/breakingNews/create",
  GET_ALL_BREAKING_NEWS: BASE_URL + "/breakingNews/getAll",
  DELETE_BREAKING_NEWS: BASE_URL + "/breakingNews/delete",
  ACTIVE_BREAKING_NEWS: BASE_URL + "/breakingNews/update",



  //LIve nEWS
  CREATE_LIVE_NEWS: BASE_URL + "/live/create",
  GET_ALL_LIVE_NEWS: BASE_URL + "/live/getAll",
  DELETE_LIVE_NEWS: BASE_URL + "/live/delete",
  ACTIVE_LIVE_NEWS: BASE_URL + "/live/update",


  // Image
  IMAGE_UPLOAD: BASE_URL + "/image/multi",




  // CateGOry
  ADD_CATEGORY_API: BASE_URL + "/category/create",
  DELETE_CATEGORY_API: BASE_URL + "/category/delete",
  UPDATE_CATEGORY_API: BASE_URL + "/category/update",
  GET_ALL_CATEGORY_API: BASE_URL + "/category/all",
  DETAILS_CATEGORY_API: BASE_URL + "/category",





  // suBCateGOry
  ADD_SUBCATEGORY_API: BASE_URL + "/subcategory/create",
  DELETE_SUBCATEGORY_API: BASE_URL + "/subcategory/delete",
  UPDATE_SUBCATEGORY_API: BASE_URL + "/subcategory/update",
  GET_ALL_SUBCATEGORY_API: BASE_URL + "/subcategory/all",
  DETAILS_SUBCATEGORY_API: BASE_URL + "/subcategory",






}


export const subscription = {
  CREATE_PAYMENT: BASE_URL + "/subscription/create",
  VERIFY_PAYMENT: BASE_URL + "/subscription/payment-success",
  GET_ALL_SUB: BASE_URL + "/subscription/getAll",
}

export const order = {
  CREATE_PAYMENT: BASE_URL + "/orders/create",
  VERIFY_PAYMENT: BASE_URL + "/orders/payment-success",
  GET_ORDERS: BASE_URL + "/orders/getAll",
  GET_SINGLE_ORDERS: BASE_URL + "/orders/get"
}


export const paymentEndpoints ={
  PRODUCT_PAYMENT_API: BASE_URL + "/order/capturePayment",
  PRODUCT_VERIFY_API: BASE_URL + "/order/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/order/sendPaymentSuccessEmail",
  
  
  // Get all orders
  GET_ALL_ORDER: BASE_URL + "/order/get",

  
}