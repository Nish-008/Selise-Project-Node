const express= require('express')
const mongoose = require('mongoose')

const productsController = require('./controllers/products')

mongoose.set('strictQuery', true);

mongoose
  .connect("mongodb://127.0.0.1:27017/products", {
    useNewUrlParser: true
  })
  .then(() => {
    const app = express();
    app.use(express.json());

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


