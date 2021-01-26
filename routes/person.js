const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Schema = mongoose.Schema;


//test
//localhost:5000/contacts/test
//@path
//test route
//public or private

// Person schema
var personSchema = new Schema({
    name: String,
    age: Number,
    favouriteFoods: String  
  })

const Person = mongoose.model('person', personSchema)

//instance using the Person constructor
var person = new Person({name: 'Ben', age: 23, favouriteFoods: 'kabeb'})

//Save the Person Record
person.save((err, data)=>{
if (err){ console.log(err)}})

router.get('/test',(req,res)=>{
    res.send("tested")
})


//find all documents by name

router.post('/addPerson',(req,res)=>{
    const {name,age,favoriteFoods}=req.body
    const newPerson = new Person({
        name,age,favoriteFoods
    })
    newPerson.save()
    .then(persons=>res.send(persons))
    .catch(err=>console.log(err))
})

module.exports = router