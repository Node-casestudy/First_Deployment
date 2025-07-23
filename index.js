const express =  require('express')
const app = express();

app.get('/',(req,res)=>{
    // res.send({hi:"There"});
    res.send("Testing the Render Website Functionality");
})

app.listen(5000);