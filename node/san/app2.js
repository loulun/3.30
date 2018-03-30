var express=require('express')
var mysql=require('mysql')

var app2=express()
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'',
	database:'item',
	port:3306
})

app2.get('/',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql='delete from news where id=1'
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
app2.listen(3002)