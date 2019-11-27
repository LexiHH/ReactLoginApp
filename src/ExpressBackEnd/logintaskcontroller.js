var express=require("express")
var app=express()
var MYSQL=require('./dbConnection')
var con=MYSQL()
var cors=require('cors')
var bodyparser=require('body-parser')
app.set('view engine','ejs')
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get('/showAll',function(req,res){
	var sql=`Select * from personal`
	con.query(sql,function(err,result){
		if(err){
			console.log(err)
		}
		else{
            console.log("Data retrieved")
            res.send(result)
		}
	})
})

app.delete('/deleteRecord',function(req,res){
    var r=req.body.regno
	var sql=`delete from personal where regno=${r}`
    con.query(sql,function(err,result){
		if(err){
			console.log(err)
		}
		else{
            console.log("Record deleted")
            res.send(result)
		}
	})    	
})

app.post('/newRecord',function(req,res){
	var name=req.body.name
	var regno=req.body.regno
	var address=req.body.address
	var sql=`insert into personal values('${name}',${regno},'${address}')`;
	con.query(sql,function(err,result){
		if(err){
			console.log(err)
		}
		else{
            console.log("Record added")
            res.send(result)
		}
	})    	
})

app.post('/newUser',function(req,res){
	var role=req.body.role
	var username=req.body.username
    var name=req.body.name
    var password=req.body.password
	var sql=`insert into users values(${role},'${username}','${name}','${password}')`;
	con.query(sql,function(err,result){
		if(err){
			console.log(err)
		}
		else{
            console.log("Record added")
            res.send(result)
		}
	})    	
})

app.put('/editRecord',function(req,res){
	var name=req.body.name
	var regno=req.body.regno
	var address=req.body.address
	var sql=`update personal set name='${name}', address='${address}' where regno=${regno}`;
	con.query(sql,function(err,result){
		if(err){
			console.log(err)
		}
		else{
            console.log("Record edited")
            res.send(result)
		}
	})    	
})

app.listen(2700)