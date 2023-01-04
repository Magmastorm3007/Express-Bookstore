const mongoose=require('mongoose')
const PaymentSchema={
  userid:String,
  amount:String,
  created:String,
  basket:Array

 
}
const Payment=mongoose.model("Payment",PaymentSchema)
module.exports=Payment