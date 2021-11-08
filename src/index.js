// imports
const express = require("express");
const path = require("path");


// constants
const PORT = 2000;


const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
});
