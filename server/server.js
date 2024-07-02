var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const { Buffer } = require('buffer');

const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended:true
}))





// Start the server
app.listen(7000, () => {
    console.log(`Server is running on port 7000.`);
});



mongoose.connect('mongodb://localhost:27017/PhotosDB')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to database successfully!");
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});


// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (req, res) => {
    res.redirect("/admin-dashboard/96-24-97-D1-C6-DF");
});

// Redirect specific path to index.html
app.get("/admin-dashboard/96-24-97-D1-C6-DF", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});



app.post("/postImage", (req, res) => {
    const { base64 } = req.body;
    const category = req.body.category;


    const imagesDetailsSchema = new mongoose.Schema(
        {
            image: String
        },
        {
            collection: category,
        }
    )
    mongoose.model("Images", imagesDetailsSchema);
    

    try{
        Images.create({image: base64});
    } catch {
        res.send({Status: "error", data:console.error()});
    }

    db.collection(category).insertOne(data, (err, result) => {
        if (err) {
            console.error("Error inserting items into DB:", err);
            return res.status(500).json({ error: "Failed to insert items into the database" });
        }
        console.log("Items added to DB Successfully!");
        res.status(200).json({ message: "Items added to the database successfully" });
    });
});




app.get("/getAdmin", async (req, res) => {
    const { username, PIN } = req.query;
    try {
        const admin = await db.collection("Admins").findOne({ username, PIN });
        if (admin) {
            res.json(admin); // Return admin data if a match is found
        } else {
            res.status(401).json({ error: "Invalid username or PIN" }); // Return error message if no match is found
        }
    } catch (error) {
        console.error("Error fetching admin:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

