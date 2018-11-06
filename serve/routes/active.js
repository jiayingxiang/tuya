const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get('/',(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    if(!pno){
        pno=1;
    }
    if(!pageSize){
        pageSize=10;
    }
    var obj={pno:pno,pageSize:pageSize};
    var sql="select count(aid) as c from active_competition";
     pool.query(sql,(err,result)=>{
         if(err)throw err;
         //res.send(result[0].c);
         var pageCount=Math.ceil(result[0].c/pageSize);
         obj.pageCount=pageCount;
     })
    var sql="SELECT * FROM active_competition WHERE aid!=0 limit ?,?";
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) console.log(err);
        obj.data=result;
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(obj))
        res.end();
    })
})


module.exports=router;