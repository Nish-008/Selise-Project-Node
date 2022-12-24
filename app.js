const express= require('express')
const mongoose = require('mongoose')
// const cors=require('cors');
// const cookieParser=require('cookie-parser');
// const bodyParser=require('body-parser');
const productsController = require('./controllers/products')

mongoose.set('strictQuery', true);



mongoose
  .connect("mongodb://127.0.0.1:27017/products", {
    
    useNewUrlParser: true
  })
  .then(() => {
    console.log("mongodb started");
    const app = express();
    app.use(express.json());
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    app.get("/products", productsController.findProducts );
    app.post("/products", productsController.createProduct );
    app.get("/products/:id", productsController.findProduct );
    app.patch("/products/:id", productsController.updateProduct );
    app.delete("/products/:id", productsController.deleteProduct);

    app.listen(3000, () => {
      console.log("Server has started at port 3000");
    });
  })
  .catch(() => {
    console.log("Database connection failed!");
  });


