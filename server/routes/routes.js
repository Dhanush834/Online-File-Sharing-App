const express = require('express');
const uploadtoMulter = require('../middlewares/multer')
const {getFiles , addFile} = require('../controllers/controllers')

const router = express.Router();

router.post('/uploadFile' , uploadtoMulter.single('file') ,addFile)
router.get('/file/:fileId' , getFiles )

module.exports = router;