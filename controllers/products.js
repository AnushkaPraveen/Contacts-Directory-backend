import  mongoose  from 'mongoose';
import Product from '../models/product.js';


// @route  GET 
// @desc   Get all products
//@access  Public
export const getProducts = async (req,res)=>{
   
    try{
        const product = await Product.find();
        res.status(200).json(product);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};


// @route  GET 
// @desc   Get a product
//@access  Public
export const getProduct = async (req,res)=>{
    const {id:_id} = req.params;
    try{
        const product = await Product.findById(_id);
        res.status(200).json(product);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};

// @route  POST
// @desc   Add new product
//@access  Public
export const addProduct = async (req,res)=>{
    const {code,name,description,price,quantity} = req.body;
    console.log(req.body);
        
    try {
        let productCode = await Product.findOne({code});
        if(productCode){
        res.status(400).json({errors:[{msg : 'Product already exists'}]});
        }

        const newProduct = new Product ({
            code,
            name,
            description,
            price,
            quantity
        });

        await newProduct.save();
        res.status(201).json(newProduct);

    } catch (error) {
        res.status(409).json({message : error.message});
    }
};

// @route  PUT
// @desc   Update product
//@access  Public
export const updateProduct = async (req,res)=>{
    const{id:_id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No product found');

    const updatedProduct = await Product.findByIdAndUpdate(_id,product,{new:true});
    res.status(200).json(updatedProduct);
    
};

// @route  DELETE 
// @desc   delete a product
//@access  Public
export const deleteProduct = async (req,res)=>{
    const {id:_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No product found');
    await Product.findByIdAndRemove(_id);
    res.json({message:'Deleted successfully'});
   
};