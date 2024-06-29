const port = 5000
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const fs = require("fs")

// Middleware setup
app.use(cors())
app.use(express.json())

// Ensure upload directory exists
const uploadDir = path.join(__dirname, "upload/images")
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

// Connect to MongoDB with error handling and TLS option
mongoose
  .connect(
    "mongodb+srv://ecommerce:ecommerce@cluster0.w8azixo.mongodb.net/Ecommerce",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err))

// Route for checking server status
app.get("/", (req, res) => {
  res.send("Express app is running")
})

// Image storage engine setup
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    )
  },
})
const upload = multer({ storage: storage })

// Serve static files from the upload directory
app.use("/images", express.static(uploadDir))

// Endpoint for uploading images
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: true,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  })
})

// Define the schema for the user
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
})
app.post("/addproduct", async (req, res) => {
  let products = await Product.findOne({})
  let id
  if (products.length > 0) {
    let last_product_array = products.slice(-1)
    let last_product = last_product_array[0]
    id = last_product.id + 1
  } else {
    id = 1
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  })
  console.log(product)
  await product.save()
  console.log("Product added successfully")
  res.json({ success: true, name: req.body.name })
})

//creating api for deleting products
app.post("/deleteproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id })
  console.log("Product deleted successfully")
  res.json({ success: true, name: req.body.name })
})

//creating api forgetting all products
app.get("/getproducts", async (req, res) => {
  let products = await Product.find({})
  console.log("Products fetched successfully")
  res.json(products)
})

// Start the server
app.listen(port, (error) => {
  if (error) {
    console.log("Error while starting the server")
  } else {
    console.log("Server is running on port", port)
  }
})
