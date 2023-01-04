const mongoose=require('mongoose')
const BookSchema={
    isbn:String,
    title:String,
    description:String,
    price:String,
    image:String,
    author:String,
    stars:String
    



}
const Book=mongoose.model("Book",BookSchema)
module.exports=Book