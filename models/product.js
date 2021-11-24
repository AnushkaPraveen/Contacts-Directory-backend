import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    code:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    description :{
        type:String,
    },
    price  :{
        type :String,
    }, 
    quantity :{
        type:Number,
    },
    createdAt:{
        type:Date,
        default: new Date()
   
   
    },
});

const Product = mongoose.model('product',productSchema);
export default Product;