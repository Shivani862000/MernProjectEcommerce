const functions = require("firebase-functions");

const express= require('express');
const cors=require('cors');
const { response } = require("express");
const stripe=require('stripe')
("sk_test_51JSkwcSFjVjUGeUBesuChzom8LGKV2MEGTG7zq1oukFUH19YCBmiwbF6LCP1iazevqdfFeJCZdiuGuKDGgEziwcX00zeocmCJs")
 const app=express();
 app.use(cors({origin:true}));
 app.use(express.json());
 app.get('/',(request,response)=>
     res.status(200).send("hello world"))
 exports.api=functions.https.onRequest(app);