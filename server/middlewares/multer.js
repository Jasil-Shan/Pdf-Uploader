import multer from 'multer'



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, file.originalname  + '-' + uniqueSuffix)
  }
})


const multerUpload = multer({ storage: storage }).single("file");

export default multerUpload 