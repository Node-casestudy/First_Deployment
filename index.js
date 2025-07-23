const express =  require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send({hi:"There"});
    console.log("Running Get API. See your Browser")
})

app.listen(5000);