var express=require('express')
var mysql=require('mysql')

var appOne=express()
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'',
	database:'item',
	port:3306
})

appOne.get('/',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql='select * from news'
		connection.query(sql,(err,data)=>{
			if(err){
				console.log(err)
				return
			}
			res.send(data)
			
			connection.end()
		})
	})
})
appOne.listen(3001)