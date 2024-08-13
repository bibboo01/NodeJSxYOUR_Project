const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {console.log("MONGO DB connected")})
    .catch(err => console.log(err));


// const Myadmin = require('./routes/admin_route');
// const Myuser = require('./routes/user_route');
const Mystudent = require('./routes/student_route');
const Myauth = require('./routes/auth_route');


// app.use('/auth',Myadmin);
// app.use('/user',Myuser);
app.use('/std',Mystudent);
app.use('/auth',Myauth);


app.listen(process.env.PORT, 
    ()=> console.log("Server run on localhost:" + process.env.PORT));