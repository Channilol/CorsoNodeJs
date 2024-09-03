const fs = require("fs");
const http = require("http");
const url = require("url");

//* Synchronous
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const date = new Date(Date.now());
// const day = String(date.getDate()).padStart(2, "0");
// const month = String(date.getMonth() + 1).padStart(2, "0");
// const year = String(date.getFullYear());

// const todayDate = `${day}/${month}/${year}`;

// const textOut = `This is what we know about avocado: ${textIn}\nCreated on ${todayDate}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

//* Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log("ERROR!");
//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written!");
//       });
//     });
//   });
// });
// console.log(
//   "read-this file will appear after this even tho its written before"
// );

//* SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("Overview page");
  } else if (pathName === "/product") {
    res.end("Product page");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page does not exist</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
