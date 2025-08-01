//@@ If the type is comon, Import the results of any function into another page

// const result = require("./pageconfig")

// result(20, 50)

//@@ If the type is module, import the result of any function into another page. Type modulus in the package json...

// import result from "./pageconfig.js"

// result(20, 30)


//@@ file create // file read // file update // all text delete // file delete ( )
const fs = require("fs")

//@@ file create
//@@ asyncunus
// fs.writeFile("create.txt", "new file create asyncunus", (error) => {
//   if (error) {
//     console.log(error)
//   }
//   console.log("file created");
// })

//@@ syncunus
// const data = fs.writeFileSync("create.txt", "new file create syncunus")

// console.log(data);

//@@ file read
// fs.readFile("create.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error)
//   }
//   console.log(data);
// })


//@@ file update
// fs.appendFile("create.txt", "update txt async", (error, data)=>{
//   if(error) {
//     console.log(error);
//   }
//   console.log(data);
// })


//@@ all text delete
// fs.readFile("create.txt", "utf-8", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     fs.writeFile("create.txt", "", (error) => {
//       if (error) {
//         console.log(error);
//       }
//     })
//   }
// })


//@@ file delete
// fs.unlink("delete.js", (error)=>{
//   if(error) {
//     console.log(error);
//   }
// })


