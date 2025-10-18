require('dotenv').config()
const express = require('express')  // style : 1
// import express from "express"    // style : 2
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('sameerdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at website</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Good Leather</h2>')})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
