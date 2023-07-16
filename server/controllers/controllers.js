const File = require('../models/Filemodel');


const addFile = async(req,res)=>{
    const fileObj = {
        path:req.file.path,
        filename:req.file.originalname
    }

    try {
        const file = await File.create(fileObj);
        console.log(file);
        res.status(200).json({path:`http://localhost:3001/file/${file._id}`})
    } catch (error) {
        console.log(error)
    }

}



const getFiles = async(req,res)=>{

    try {
        const downladFile = await File.findById(req.params.fileId);
        res.download(downladFile.path , downladFile.filename)
    } catch (error) {
        console.log(error)
    }

}

module.exports = {addFile , getFiles};