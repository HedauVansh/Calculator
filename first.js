const http = require("http")
http.createServer((req,res)=>{
    res.write("SSGMCE")
    res.end()

}).listen(8080,()=>{
    console.log("server created succesfully")
})