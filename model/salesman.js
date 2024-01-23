import mongoose from "mongoose";
const salesmanSchema = new mongoose.Schema({
    salesman_id:Number,
    name:String,
    city:String,
    commission:Number
})
export default  Salesman = mongoose.model('Salesman', salesmanSchema);


 