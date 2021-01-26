const mongoose = require("mongoose")
const schema = mongoose.Schema

const PersonSchema = new schema ({
    name:{type:String},
    age:{type:Number},
    favoriteFoods:{type:String}
})

module.exports = mongoose.model('Person',PersonSchema)