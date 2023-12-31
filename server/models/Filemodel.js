const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    filename:{
        type:String,
        required:true
    }
})

module.exports = new mongoose.model('File',FileSchema);