var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')

var port = process.env.PORT || 7777

express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false}))
    .get('/',(req,res)=>{
        res.send('hello')
    })
    .post('/webhook', function (req, res) {

        res.json({
            status: 200,
            message: `Webhook is working!`
        });
    })

    .listen(port, ()=>{
        console.log(`server running port : ${port}`)

    })

