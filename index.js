const { appendFile, readFile } = require("fs");
const http = require("http");
// require("./setRequest/index.js")
require("./setRequest/retriveData.js")
// require("./osmodule/index");
// const dotenv = require('dotenv');
// dotenv.config();


console.log(process.env.PORT)


const server = http.createServer((req,res) =>  {

    // console.log("=========header=======",req.headers , "=========header end=======");

    // console.log(req.url)
    // console.log("new req recive");

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
        // res.write(data)
    })

    readFile("data.txt", (err , data) => {
        if(err) {
           console.log(err);
           return;
        }
        // console.log("request", data.toString())
        // res.write(data)
        res.end("hello world");
    })

});

server.listen(3000 , () => console.log("server started"));









// const http = require('http')
// // const hostname = '127.0.01'
// const port = 8080


// const options = {
//     hostname: 'jsonplaceholder.typicode.com',
//     path: '/posts',
//     method: 'GET',
// };

 
// const server = http.createServer();

//   server.on("request", () => {
//     console.log("Request received");

//     http.get(options, (response) => {
//         // Initialize a variable to store the response data
//         let data = '';
      
//         // Listen to the data event
//         response.on('data', (chunk) => {
//           // Append the chunk to the data variable
//           data += chunk.toString();
//         });
//     })
// })


 

//  server.listen(port, () => {
//         console.log(`Server running at http:/${port}/`)
// })




// // Importing https module
// const http = require('http');
 
// // Setting the configuration for
// // the request
// const options = {
//     hostname: 'jsonplaceholder.typicode.com',
//     path: '/posts',
//     method: 'GET',
//     port: 3000
// };
 
// // Sending the request



// const server = http.createServer();



// server.













// const http = require('https');
// const port = 3000;


//  const server = http.createServer();


//  server.on(() => {
//     console.log('server is running');
//  })


// server.listen(3000)

// // const server = http.createServer((req, res) => {
// //     const parsedUrl = url.parse(req.url, true);
// //     console.log(parsedUrl , req , res)
// //     if (parsedUrl.pathname === '/read-file' && req.method === 'GET') {
// //         fs.readFile(filePath, 'utf8', (err, data) => {
// //             if (err) {
// //                 res.writeHead(500, { 'Content-Type': 'text/plain' });
// //                 return res.end('Error reading file');
// //             }
// //             res.writeHead(200, { 'Content-Type': 'text/plain' });
// //             res.end(data);
// //         });
// //     }

// //     req.end()
// // })

// // server.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// // });
