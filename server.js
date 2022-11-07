var http=require('http')

var server = http.createServer(function(req,res){
    res.end("Hellow World");
});

server.listen(5050);
console.log("Server run Successfully");