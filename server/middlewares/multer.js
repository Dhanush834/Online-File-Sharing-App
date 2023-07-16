const multer = require('multer');

const uploadtoMulter = multer({
    dest:'Filestorage'
});

module.exports = uploadtoMulter;