const { createServer } = require("http");
import express from "express";
// import calculatorRoutes from "./src/routes/api/+server.js";
const calculatorRoutes = require("./src/routes/api/+server.js");
// const { request } = require("@sveltejs/kit");
// const app = require("./__sapper__/build");

const app = express();



// const server = createServer((req, res) => {
//     const { pathname, searchParams } = new URL(req.url, "http://localhost:3000");
//     const request = {
//       host: req.headers.host,
//       path: pathname,
//       query: Object.fromEntries(searchParams.entries()),
//       headers: req.headers,
//       body: null 
//     };

  

    // app.render(request).then(result => {
    //   if (result.error) {
    //     res.statusCode = result.status;
    //     res.end(result.error.message);
    //   } else {
    //     res.statusCode = result.status;
    //     res.setHeader("Content-Type", "text/html");
    //     res.end(result.body);
    //   }
    // });
  // });

  // app.use(express.json());

  // app.use("/", calculatorRoutes);

  app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
  });