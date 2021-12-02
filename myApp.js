const mysql = require('mysql');
require("dotenv").config(); //dotenv 가 프로세스를 읽게해준다? env 읽게해준다?
// const dbConfig = require('./dbconfig.json');  // 5~10번째 대신 사용 12랑 세트

var con = mysql.createConnection({
    host: process.env.HOST,                //env 에다가 미리 적어준 내용ㅇ 있다. 노출해서 적어야해 env에 안쓰면
    user: process.env.USER,                    // node myApp.js 하면 콘솔찍힘
    password: process.env.PASSWORD,
   database: process.env.DATABASE
});

// var con = mysql.createConnection(dbConfig); // 5~10번째 대신 사용 3이랑 세트

con.connect(function(err) {
    
    var sQuery = "SELECT * FROM customers1 where name='James Hetfield'";
    if(err) throw err;
    console.log('Database connected!');

    // var sQuery = "CREATE DATABASE NODEPORTFOLIO";   //그냥 데이터베이스 만든것 sql 왼쪽에 나와있음.
    // var sQuery = "CREATE TABLE customers1 (name varchar(128), addr varchar(256))";
    // var sQuery = "INSERT INTO customers1 (name, addr) VALUES ('james Hetfield', 'New York City')";
    // var sQuery = "INSERT INTO customers1 (name, addr) VALUES ('Kirk Hetfield', 'New York City')";
    // var sQuery = "INSERT INTO customers1 (name, addr) VALUES ('Adams', 'New York City')";
    // var sQuery = "SELECT * FROM customers1 where name='James Hetfield'";
    // var sQuery = "UPDATE customers1 SET addr = 'Missisifi Liver' where name = 'Kirk Hetfield'";
    // var sQuery = "DELETE FROM customers1 WHERE name = 'Adams'";
    // var sQuery = "drop table customers1"; //드랍은 테이블이 지워진다. 딜리트는 데이터만 지운다.

    con.query(sQuery, (err, result, fields)=>{   //fields 나중에 추가하심
        if(err) throw err;
        
        console.log(result);    //fields 콘솔안에 또는 result 다 나온다.
        // console.log("Table customers Create success!!!");
    });
});

// con.end();