//@@ If the type is common js, Import the results of any function into another page

const result = require("./pageconfig")

result(20, 50)

//@@ If the type is module, import the result of any function into another page. Type modulus in the package json...

import result from "./pageconfig.js"

result(20, 30)

//@@ fs modiul
//@@ file create // file read // file update // text replace // all text delete // file delete // folder create // specific folder in file create ( )

const fs = require("fs")

//@@ file create
//@@ asyncunus
fs.writeFile("create.txt", "new file create", (error) => {
  if (error) {
    console.log(error)
  }
  console.log("file created");
})

//@@ syncunus
const data = fs.writeFileSync("create.txt", "new file create")

console.log(data);

//@@ file read
fs.readFile("create.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error)
  }
  console.log(data);
})


//@@ file update
fs.appendFile("create.txt", "new txt", (error, data)=>{
  if(error) {
    console.log(error);
  }
  console.log(data);
})


//@@ text replace
fs.readFile("create.txt", "utf8", (error, data) => {
  let textreplace = data.replace("mern2406","update txt")
  fs.writeFile("create.txt", textreplace,(err)=> {
     if (error) {
    console.log(error)
  }
  console.log(textreplace);
  })
})


//@@ all text delete
fs.readFile("create.txt", "utf-8", (error) => {
  if (error) {
    console.log(error);
  } else {
    fs.writeFile("create.txt", "", (error) => {
      if (error) {
        console.log(error);
      }
    })
  }
})


//@@ file delete
fs.unlink("delete.js", (error)=>{
  if(error) {
    console.log(error);
  }
})


//@@ folder create
fs.mkdir("newfolder", (error)=>{
  if (error) {
    console.log(err);
  }
  console.log("folder create");
})


//@@ specific folder in file create
fs.writeFile("newfolder/newfile.txt", "new file create", (error) => {
  if (error) {
    console.log(error)
  }
  console.log("file created");
})

//@@ path modiul (file location)
//@@ file name // file extention // directory name // file name // path join // path resolve // path parse //

const path = require("path")

//@@ file name
const filename = path.basename("/newfolder/newfile.txt")
console.log(filename);


//@@ file extention
const fileextention = path.extname("/newfolder/newfile.txt")
console.log(fileextention);


//@@ directory name
console.log(__dirname);

//@@ file name
console.log(__filename);

//@@ path join
const fullpath = path.join("/newfolder", "newfile.txt")
console.log(fullpath);

//@@ path resolve (problem solve) no test
const resolve = path.resolve("/newfolder", "newfile.txt")
console.log(resolve);

//@@ path parse
const parse = path.parse("/newfolder/newfile.txt")
console.log(parse);


//@@ os modiul (system location)
//@@ architecture // memory store // free memory store // cpu // ip address

const os = require("os")

//@@ architecture
console.log(os.arch());

//@@ memory store
console.log(os.totalmem()/(1024*1024*1024));

// @@ free memory store
console.log(os.freemem()/(1024*1024*1024));

// @@ cpu
console.log(os.cpus());

// @@ ip address
console.log(os.networkInterfaces());


//@@ url modiul (link location)
//@@ url // url parse

const url = require("url")

//@@ url
let urllink = "https://www.w3schools.com/react/default.asp"
console.log(urllink);

//@@ url parse
let adr = "https://www.https://www.figma.com/files/team/1392598710001733481/recents-and-sharing?fuid=1392598705731773924.com/react/default.asp"
const urlparse = url.parse(adr, true)
console.log(urlparse);


//@@ http modiul (server)
const http = require("http")

// @@ server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" })
  res.end("<h2> server response </h2>")
})

server.listen(3000, () => {
  console.log("server runing....");

})



