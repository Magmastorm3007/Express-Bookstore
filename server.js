

// require express and bodyParser
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const { response } = require('express')
const stripe=require("stripe")("sk_test_51LEEGeSGbGUoxFPiASowylwPDLRipqVepHokW5tCidCgeKowfWukMU90FKFygftqCbtQbkjqjxAZS8HkJJNZANcj00qOg3jVUe")


// create express app
const app=express()

// define port to run express app
const  port = process.env.PORT || 5000;
app.use(express.json())
app.use('/api',require('./routes/Bookroute'))

app.use(cors())

app.post("/payments/create", cors(), async (req, res) => {

   
	let total= req.query.total
    console.log("Payment Recieved ",total)

		const paymentIntent = await stripe.paymentIntents.create({
			amount:total,
			currency: "USD"
		
		})      

		res.json({
            clientSecret: paymentIntent.client_secret,
		})
	
})


const url='mongodb+srv://user:aloo@cluster0.ybbgwrx.mongodb.net/Bookstore'
mongoose.connect(url).then(() => {
    app.listen(port, () => {

        console.log(`Server running at http://localhost:${port} and database connected`);
        });
    },
    err  => {
    {
    console.log("Error connecting Database instance due to:", err);
    }
    });

// Listen to server
