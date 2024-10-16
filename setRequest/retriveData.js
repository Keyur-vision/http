
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
  });
});


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
});

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
