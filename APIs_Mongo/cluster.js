const cluster = require("cluster"); //system package
const os = require("os"); //system package
const express = require("express");

let app = express();

let cpus = os.cpus().length;
console.log(cpus);

if (cluster.isPrimary) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork(); //initializing node instances in worker
  }
} else {
  app.get("/", (req, resp) => {
    return resp.json({ msg: `process id is ${process.pid}` });
  });
  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
}
