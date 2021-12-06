const express = require("express");
const app = express();
const host = "127.0.0.1";
const port = 3000;
var bodyParser = require('body-parser')
var ejs = require('ejs')
// var boardRouter = require('./src/routes/board');


app.set("view engine", "ejs");
app.set("views", './src/views')
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.urlencoded({extended: true})); // post 할때 자꾸 cannot property  에러나서 찾아보니 router 경로 지정 전에 bodyparser 미들웨어 설정해야함
app.use(bodyParser.json());
var mysqlRouter = require('./src/routes/mysql');
var boardRouter = require('./src/routes/board')
var cartRouter = require('./src/routes/cartlist');
app.use('/mysql', mysqlRouter);
app.use('/board', boardRouter);
app.use('/cartlist', cartRouter);



app.get("/", (req, res) => {
    res.render("index.ejs")
});
app.get("/Selling", (req, res) => {
    res.render("Selling.ejs")
});
app.get("/page", (req, res) => {
    res.render("page.ejs")
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs")
});
app.get("/cart", (req, res) => {
    res.render("cart.ejs")
});

app.listen(port, host, () => {
    console.log(`Index Application running at http://${host}:${port}/`);
});