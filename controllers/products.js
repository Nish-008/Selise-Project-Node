const product = require("../models/product")

exports.findProducts = async (req,res)=>{
    const products = await product.find({});
    res.status(200).json(products);
};

exports.createProduct = async (req, res)=>{
    console.log(req.body);
    const products= new product(req.body);
    await products.save();
    res.send({data: products});
};

exports.findProduct= async (req,res)=>{
    try{
        const products = await product.findById(req.params.id);
        res.send({data: products});
    } catch {
        res.status(404).send({error: "Product is not found!"});
    }
};

exports.updateProduct = async(req,res)=>{
    const products = await product.findById(req.params.id);
    try{
        const products = await product.findById(req.params.id);
        Object.assign(products, req.body);
        products.save();
        res.send({data: products});
    } catch {
        res.status(404).send({error: "Product is not found!"});
    } 
};

exports.deleteProduct = async ( req, res)=>{
    try{
        const products = await product.findById(req.params.id);
        await products.remove();
        res.send({data: true});
    } catch {
        res.status(404).send({error: "Product is not found!"});
    }
}