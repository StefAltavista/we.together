const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "assets")));

app.get("*", (req, res) => res.redirect("/"));

app.listen(5001, () => console.log("server connected to port 5001"));
