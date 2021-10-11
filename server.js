//import express
const express=require('express')
//initialistation :instance :na3mlo instance des methodes express fi const nsamouh app en general
const app=express()
// import and configure dotenv
require('dotenv').config()
//console.log(require('dotenv').config())

//conncetDb
const DbConncet=require('./config/DbConnect')
DbConncet()

//middleware parseExp:ay requete gbal mata5dem il fonction mta3ha tet3ada 3al mdlw hatha
app.use(express.json())
//create Routes:kf nodthro 3al path /api/.. imchi i5dmli midd hatha 
app.use('/api/contact',require('./routes/contacts'))


//creation server (|| si port occupé)
const MY_PORT= process.env.MY_PORT
app.listen(MY_PORT,(err)=>{err?console.log(err):console.log(`server is listening in port :${MY_PORT}`)})