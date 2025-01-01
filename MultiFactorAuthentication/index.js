const express = require('express'); //this is require express 

const speakeasy = require('speakeasy'); //this is require speakeasy 

const uuid = require('uuid'); //this is require uuid

const cors = require('cors');
const QRCode = require('qrcode');
const fs = require('fs');
const {JsonDB} = require('node-json-db');
const {Config} = require('node-json-db/dist/lib/JsonDBConfig');
const { resolve } = require('path');
const { error } = require('console');
const pathModule = require('path');
const multer = require('multer');


const app = express(); //initialise express
app.use(express.json())
app.use(express.static(pathModule.join(__dirname, 'public')));
const db = new JsonDB(new Config('myDatabase',true,false,'/'));

app.use(cors({
    origin: 'http://localhost:3000'
}));

//Register the user and create temp secret
app.post('/api/register',(req,res)=>{
    console.log('in register api')
    //  const id = uuid.v4();
    const {formData} = req.body
    //console.log(formData)
    const id = formData.UserName;
    const password = formData.Password;
    const firstName = formData.FirstName;
    const lastName = formData.LastName;

    try {
        const path = `/user/${id}`;
        const temp_secret = speakeasy.generateSecret();
        db.push(path,{id,temp_secret,password,firstName,lastName})
        const otpAuthUrl = `otpauth://totp/${id}?secret=${temp_secret.base32}`;
        const qrFilePath = './public/fileqr.png';
        const qrFileNametoSend = '/fileqr.png';
       
        const generateQRCodePromise = new Promise((resolve,reject)=>{
            QRCode.toFile(qrFilePath,otpAuthUrl , {
                errorCorrectionLevel: 'H'
              }, function(err) {
                if (err) 
                {
                    throw err;
                    reject(err);
                }
                else{
                    console.log('QR code saved!');
                    resolve(qrFilePath);
                }
            });

        })

        generateQRCodePromise.then((qrFilePath)=>{
            const imageData = fs.readFileSync(qrFilePath);
            // Convert the image data to Base64
            const base64String = Buffer.from(imageData).toString('base64');
    
            res.json({id,secret:temp_secret.base32,password,QRCode:otpAuthUrl,qrFilePath:qrFileNametoSend,base64data:base64String})
    
        }).catch((error)=>{
            console.error('QR code generation failed:', error);
            res.status(500).json({ message: 'Error generating QR code' });
        })
        

                
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error generating the secret'});
    }
})

//Verify token and make perm token
app.post('/api/verify',(req,res)=>{
    console.log('in verify');
    const {token,userId} = req.body
    console.log(token +' token');
    console.log(userId +' userId');
    try {
        const path = `/user/${userId}`
        const user = db.getData(path);
        const userData =user.then((data)=>{
            
            if (!data || !data.temp_secret) {
                return res.status(404).json({ message: 'User or secret not found' });
            }
    
            console.log(data);

            const {base32:secret} = data.temp_secret
            const verified = speakeasy.totp.verify({
                secret,encoding:'base32',token
            });
    
            if(verified){
                db.push(path,{id:userId,secret:data.temp_secret,password:data.password,firstName:data.firstName,lastName:data.lastName})
                res.json({verified:true})
            }else{
                res.json({verified:false})
            }
        
        });

        

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Error fetching the user'}); 
    }

})

//Verify token and make perm token
app.post('/api/login',(req,res)=>{
    console.log("IN LOGIN API");
    console.log(req.body);
    const bodydata = req.body
    console.log(bodydata.formData);
    const userId = bodydata.formData.UserName;
    const token = bodydata.formData.MFACode;
    const Password = bodydata.formData.PassWord;
    try {
        const path = `/user/${userId}`
        const user = db.getData(path);
        const userData =user.then((data)=>{
            
            if (!data || !data.secret) {
                return res.status(404).json({ message: 'User or secret not found' });
            }
    
            const {base32:secret} = data.secret
            const firstName = data.firstName;
            const lastName = data.lastName;
            const verified = speakeasy.totp.verify({
                secret,encoding:'base32',token
            });
    
            if(verified){
                //db.push(path,{id:userId,secret:data.secret})
                res.json({verified:true,login:true,firstName,lastName})
            }else{
                res.json({verified:false,login:false})
            }
        
        });

        

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Error fetching the user'}); 
    }

})

const PORT = process.env.PORT || 5000; //initialise port to listen

// const storage = multer.diskStorage({
    
//     destination: function (req, file, cb) {
//         console.log('167')
//       cb(null, './public'); // Specify the folder where you want to save the files
//     },
//     filename: function (req, file, cb) {
//         console.log('171');
//         console.log(req.body.imageName);
//         const imageName =req.body.imageName;
//         // if(imageName=="Upload Profile Images"){
//              cb(null, 'specificFileName.jpg'); // Specify the file name you want to use
//         // }else {
//         //     cb(null, 'TryName.jpg'); // Specify the file name you want to use
//         // }
//     }
//   });


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('Destination');
        cb(null, './public'); // Specify the folder where you want to save the files
    },
    filename: function (req, file, cb) {
        console.log('Filename');
        const imageName = req.query.imageName; // Access imageName directly from req.body
        console.log('Image Name:', imageName);
        cb(null, imageName + '.jpg'); // Use imageName for file name
    }
});



  
  // Initialize multer middleware
  const upload = multer({ storage: storage });
  
  // Handle file upload
  app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully now');
  });

app.get('/api',(req,res)=>res.json({message:'Welcome to the two factor authentication example'}))

//app started listening
app.listen(PORT,()=>console.log(`app started listen on port ${PORT}`));
