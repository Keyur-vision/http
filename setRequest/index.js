const http = require('http')

const port = 8080; 
const server = http.createServer((req,res)=>{
  console.log(req.headers);
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`)

  var options = {
    port: 8080,
  }; 
  
  var request = http.request(options);

  request.setHeader('content-type', 'text/html');

  console.log("before operation :- " + request.getHeader('content-type')) 

  request.removeHeader('content-type') 
  
  console.log("after operation :- " + request.getHeader('content-type')) 

  request.end();
})

setTimeout(()=>{
  server.close()
},2000)