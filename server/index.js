const express = require('express'); // Correct import syntax
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model')


app.use(cors()); // Middleware
app.use(express.json()); // parsing into the json

mongoose.connect('mongodb://localhost:27017/mern-video')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error:', err));

app.post('/api/register', async(req, res) => {
  console.log(req.body);
  try{
    const user = await User.create({
      name : req.body.name,
      email : req.body.email,
      password : req.body.password,
    })
    res.json({status : "ok"});
  }
  
  catch(err) {
    res.json({status: "error duplicate"})
  }
});


app.post('/api/login', async(req, res) => {
  
    const user = await User.findOne({
      email : req.body.email,
      password : req.body.password,
    })
    res.json({status : "ok"});
  
   if(user){
    return res.json({status : 'ok', user: true})
   }
  else{
    return res.json({status : 'ok', user: false})

  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
