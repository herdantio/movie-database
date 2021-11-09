const multer  = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/../public/images'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'-'+file.originalname)
    }
})
const upload = multer({ storage: storage })
module.exports = upload
// const upload = multer({ dest: __dirname + '../public/images' })