const { appendFile, readFile } = require("fs");
const http = require("http");
require("./setRequest/retriveData.js")


console.log(process.env.PORT)


const server = http.createServer((req,res) =>  {


   switch(req.url)  {
        case "/about" : {
              res.writeHead(201, {'Content-Type': 'text/html'}); 
              res.write("keyur patel")
              res.end("hello")
        }
   }

  const log = `${Date.now()} new req recieved\n`
    appendFile("data.txt", log , async (err , data) => {
        if(err) {
           console.log(err);
           return;
        }
    })

    readFile("data.txt", (err , data) => {
        if(err) {
           console.log(err);
           return;
        }

        res.end("hello world");
    })

});

server.listen(3000 , () => console.log("server started"));



