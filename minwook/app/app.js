const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", './src/views')
app.use(express.static(`${__dirname}/src/public`));

const host = "127.0.0.1";
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs")
});
app.get("/Selling", (req, res) => {
    res.render("Selling.ejs")
});
app.get("/board", (req, res) => {
    res.render("board.ejs")
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs")
});
app.get("/post", (req, res) => {
    res.render("post.ejs")
});

app.listen(port, host, () => {
    console.log(`Index Application running at http://${host}:${port}/`);
});