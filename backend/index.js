const express = require("express");
const app = express();
require("dotenv").config();
require("./models/db.js");
const cors = require("cors");
app.use(cors()); //require for request from other source
app.use(express.json()); //require for post method request


const AuthRouter = require("./routes/AuthRouter.js")
app.use("/auth",AuthRouter)
const UserRouter = require("./routes/UserRouter.js");
app.use("/user",UserRouter)

app.get("/",(req,res)=>{
    console.log("hi");
    res.send("Hello World");
})
const path = require("path");
// --- FRONTEND BUILD ---
app.use(express.static(path.join(__dirname, "dist")));

// --- CATCH-ALL ROUTE ---
app.get("/.*/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is runnning at ${PORT}`)
})