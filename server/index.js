const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")

// env configration 
dotenv.config();

// rest object  
const app = express();


// connect to db 
connectDB();
// middleware 
app.use(express.json())
app.use(cookieParser());

app.use(cors());


app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);
cloudinaryConnect();

// routes 

app.use("/api/v1/auth", require("./routes/authRoute"))
app.use("/api/v1/culture", require("./routes/clutureRoute"))
app.use("/api/v1/gallery", require("./routes/galleryRoute"))
app.use("/api/v1/category", require("./routes/category"))
app.use("/api/v1/subcategory", require("./routes/subcategoryRoutes"))
app.use("/api/v1/product", require("./routes/productRoute"))
app.use("/api/v1/image", require("./routes/imageRoute"))
app.use("/api/v1/subscription", require("./routes/subscriptionRoute"))
app.use("/api/v1/orders", require("./routes/orderRoute"))

app.use("/", (req, res) => {
    res.send("Ha bhai chal rha hu. Uski tarha tere ko chod kar thodi jaunga 😀")
})
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`)
})
