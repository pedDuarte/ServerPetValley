var multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/petImages')
    },
    filename: function (req, file, cb) {
      var ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
      cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
    }
})
  
var upload = multer({ storage: storage });

modules.exports = upload;

/*
Como deve ser utilizado:

module.exports = function(app){

    app.post('/file', upload.single('file'), function(req, res){
       /* if(error){
            console.log(error);
            return res.status(400).json(error);
        }
        else{
            //console.log(result);
            return res.status(200).json(result);
        }
        console.log(req.file.path);
        //Salva os dados no banco de dados
    });
}*/