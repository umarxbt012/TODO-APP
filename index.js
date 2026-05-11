const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router= require("./routes/todoRoutes");
const app = express();
const port= 3000;
app.use(cors());
app.use(express.json());
app.use("/todos",router);
// const liveUrl="mongodb+srv://FARUK:FARUK123@cluster0.olixmcx.mongodb.net/?appName=Cluster0"
const localUrl="mongodb://localhost:27017/userDB"
mongoose.connect(localUrl)
.then(()=> console.log("MongoDB connected"))
.catch((err)=>console.error("Error: ", err));
app.get("/", function(req, res) {
    res.send("Hello World")
})
app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
})