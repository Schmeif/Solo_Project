const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ProjectDB', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to Solo Project DB")
}).catch((err)=>{
    console.log(err)
})