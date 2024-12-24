const express = require("express");

const app = express();

//load config form env files

require("dotenv").config();


const PORT = process.env.PORT || 4000; // Change 3000 to 4000 or another port


//middleware to parse JSON request body
app.use(express.json());    

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo ASPI ROUTES
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
});


//connect to the database
const dbConnect = require("./config/database");
dbConnect();


//default route
app.get("/", (req,res) => {
    res.send(`<h1>This is HOMEPAGE BABY </h1>`)
})