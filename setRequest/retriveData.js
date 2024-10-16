
const https = require("https");
const http = require("http");
const url = "https://jsonplaceholder.typicode.com/posts/1";
const fs= require("fs")

let body = "";
https.get(url, res => { 
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    // console.log(body);
  });
});


// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
});

// The server will listen on port 3000
server.listen(8000, () => {
  console.log('Server is running on http://localhost:'+ 8000);
});


fs.readFile("newText.txt", (err , data ) => {
  if(err) return;
  console.log(data.toString());
})

 const data = fs.readFileSync("newText.txt")
 try {
  console.log(data.toString())  
 } catch (error) {
  console.log(error)
 }





//  fs.writeFile("newText.txt", "hello world" , (err , data) => {
//   if(err) return;
//   console.log("new file created...");
// })




// const getData = fs.readFileSync("newText.txt");
  
// try {
//   console.log("getData", getData.toString())
// } catch (error) {
//   console.log(error)
// }



// const options = {
//   host: 'jsonplaceholder.typicode.com',
//   path: '/users',
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json; charset=UTF-8'
//   }
// };

// const request = https.request(options, (res) => {
//   if (res.statusCode !== 201) {
//     console.error(`Did not get a Created from the server. Code: ${res.statusCode}`);
//     res.resume();
//     return;
//   }

//   let data = '';

//   res.on('data', (chunk) => {
//     data += chunk;
//   });

//   res.on('close', () => {
//     console.log('Added new user');
//     console.log(JSON.parse(data));
//   });
// });






















// https.get(url, res => {
//   res.setEncoding("utf8");
//   let body = "";
//   res.on("data", data => {
//     body += data;
//   });
//   res.on("end", () => {
//     body = JSON.parse(body);
//     console.log(body);
//   });
// });
