const express = require("express");
const path = require('path')

const bodyParser = require("body-parser");


// Create an instance of an Express application
const app = express();

app.use(express.static(path.join(__dirname,"public")))

const adminRouter = require('./routes/admin')
const shopRouter = require("./routes/shop");
const contactUs = require('./routes/contactus')

// const loginRouter = require('./routes/login')
// const chatRouter = require("./routes/chat");
const successMsg = require('./routes/success')
const errorHandlingRouter = require("./routes/errorHandling");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/admin",adminRouter)
app.use(shopRouter);
app.use(contactUs);
// app.use(loginRouter);
// app.use(chatRouter);
app.use(successMsg);
app.use(errorHandlingRouter);


const port = 7000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
