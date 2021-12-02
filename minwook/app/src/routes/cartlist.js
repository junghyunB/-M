var express = require('express');
var router = express.Router();
var mysql = require('mysql');  // db 폴더를 만들어서 conn 과 info 를 만들어 코드의 길이를 최대한줄일수도있다고한다

var connection = mysql.createConnection({ // createConnection 데이터베이스 설정 입력 
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'poiuqwer!008',
    database : 'project'
});

router.get('/Selling', function(req, res, next){  // board/write 로 접속하면 글쓰기페이지로 이동
    res.render('Selling')
});

router.post('/Selling', function(req, res, next){
    var music = req.body.music;                  
    var singer = req.body.singer;
    var price = req.body.price;
    var datas = [music, singer, price]; // 모든데이터를 배열로 묶기
    // req 객체로 body 속성에서 input 파라미터 가져오기
    var sql = "insert into cart(music, singer, price) values(?,?,?)";  // ? 는 매개변수
    connection.query(sql, datas, function(err,rows){ // datas 를 매개변수로 추가
        if (err) console.error("err : " + err);
        res.redirect('/cartlist/cart')
    });
});


router.get('/cart', function(req, res, next) {  //page/1 이 아니라  /page 로만 라우팅됫을때 /page/1 로 보내준다
    res.redirect('/cartlist/cart/1');
});
router.get('/cart/:cart', function(req, res, next){ // 게시글 리스트에 :page가 추가된것임
    var cart = req.params.cart; // 현재 페이지는 params 을 req 요청받아옴
    var sql = "select idx, music, singer, price from cart";  // select 구절 그대로

    connection.query(sql, function(err, rows){
        if (err) console.error("err : " + err);
        res.render('cart', {rows:rows, cart:cart, length:rows.length-1, cart_num:10, pass:true}); 
        // length 데이터 전체넘버 랜더링,-1을 한이유는 db에서는1부터지만 for문에서는 0부터 시작 ,page_num: 한페이지에 보여줄 갯수
    });
});

module.exports = router;