require("dotenv").config();

const server = require("./server");

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n** Running at 127.0.0.1:${port}**\n`));
