const express = require("express");

const app= express();
//yaha port number define kiye hai port number can be of any type that we define
const port =8000;
app.get("/",(req,res)=>{
  return res.send("Coming here is very dangeraous");
});

app.get("/login",(req,res)=>{
  return res.send("yaha karege maza");
});
app.get("/signout",(req,res)=>{
  return res.send("you are signout bro")
});
app.get("/signup",(req,res)=>{
  return res.send("you are sigup bro")
});

app.listen(port,()=>{
  console.log("server running");
})
/*const port = 3000

//request of many types get,post,put,delete 
//get-get any data
// post-sending data through frontend and expecting data to come through front end
//put-to update the exixting value
//delete-to delete data
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/