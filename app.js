const express = require('express');

const app = express();

PORT= 8000;

const users = [
    {username:"alice",age:25,email:"alice@example.com"},
    {username:"bob",age:30,email:"bob@example.com"},
    {username:"charlie",age:28,email:"charlie@example.com"}
]

app.get('/user',(req,res)=>{
    const username = req.query.user;

    if (!username) {
        return res.status(400).json({message:"user can not be empty"});
    };

    const user = users.find(u=> u.username === username);

    if (user) {
        return res.json({message:"user found",data:user});
    } else {
        return res.status().json({message:"user not found"});
    }
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})