const app = require("express")();
app.get("/",(req,res) => {res.send("Hi")});
app.listen(8080,()=>"no");
