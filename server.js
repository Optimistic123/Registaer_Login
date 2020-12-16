const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const users = require("./routes/api/users");
const app = express();

const port = process.env.PORT || 5000;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(cors());
app.use(bodyParser.json());


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || db, { useNewUrlParser :true ,useUnifiedTopology: true, useCreateIndex: true})
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

mongoose.connection.on('connected',() => {
  console.log('Mongoose is connected');
})

// Routes
app.use("/api/users", users);

//serve static assets if in production

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*' ,(req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}

// var __dirname = path.resolve()
// // console.log(__dirname);
// app.use(express.static(path.join(__dirname,`/client/build`)))
// app.get( `*`, (req,res) => res.sendFile(path.resolve(__dirname , `client`,`build`,`index.html`)))




app.listen(port, () => console.log(`Server up and running on port ${port} !`));