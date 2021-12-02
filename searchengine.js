function findArr(){
    app.get("/connection/test", (req, res) => {    //connection/test 이름 맘대로 짓는거임.
        const sql = "SELECT userid FROM class4 where userid Like '%value%'"; //sql 테이블 class4를 가져옴. 
        try { //시도하다 시스템에걸려지는 에러들  이프가 거는건 내가 if로 처리한다. 
            mysql.getConnection((err, connection) => {
                console.log("connection_pool GET");
                if(err) throw err;
                connection.query(sql, (err, result, fields) => { //커넥션에서 에러가났다 (에러코드가 서버가 터지거나..)
                    if(err) {
                        console.error("connection_pool GET Error / " + err); //에러가 났으면 콘솔에 이런 메세지
                        res.status(500).send("message : Internal Server Error");
                    } else {
                        if(result.length === 0){ //테이블에 든게 없다라면
                            res.status(400).send({
                                success : false,
                                message : "DB response Not Found"  
                            })
                        } else {
                            res.status(200).send({  //찍고싶었던 값
                                success : true,
                                result
                                
                            });
                        };
                    };
                });
                connection.release();               //connection pool 에서 사용하다가 반납
            })
        } catch (err) { // 첫 try에서 에러나는 부분은 이리로 온다.
            console.error("connection_pool GET Error / " + err);
            res.status(500).send("message : Internal Server Error");
        }
    });
}