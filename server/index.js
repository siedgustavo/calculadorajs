const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Result = require('./models')
const app = express()

const url = 'mongodb+srv://mongobridge:mongo1241@cluster0-keyts.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true }, (error) => {
    if(error){
        console.log(error)
    }else{
        console.log('BD Conectada')
    }
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/suma/:firstValue/:secondValue/', function (req, res) {
    //console.log(req.params)
    
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    
    let result
    
    result = firstValue + secondValue;            

    const newResult = new Result({ value: result })
    newResult.save((error, result)=> {
        if(error){
            console.log(error)
        }else{
            console.log(result)
        }
    })

    res.send({ result: result })
})

app.get('/resta/:firstValue/:secondValue/', function (req, res) {
    //console.log(req.params)
    
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    
    let result
    
    result = firstValue + secondValue;  

    const newResult = new Result({ value: result })
    newResult.save((error, result)=> {
        if(error){
            console.log(error)
        }else{
            console.log(result)
        }
    })          

    res.send({ result: result })
})

app.get('/divide/:firstValue/:secondValue/', function (req, res) {
    //console.log(req.params)
    
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    
    let result
    
    result = firstValue / secondValue;            

    const newResult = new Result({ value: result })
    newResult.save((error, result)=> {
        if(error){
            console.log(error)
        }else{
            console.log(result)
        }
    })

    res.send({ result: result })
})

app.get('/multiplica/:firstValue/:secondValue/', function (req, res) {
    //console.log(req.params)
    
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    
    let result
    
    result = firstValue * secondValue;            
    const newResult = new Result({ value: result })
    newResult.save((error, result)=> {
        if(error){
            console.log(error)
        }else{
            console.log(result)
        }
    })
    res.send({ result: result })
})
 
app.listen(3000, () => {
    console.log("Server Corriendo en el puerto 3000")
})