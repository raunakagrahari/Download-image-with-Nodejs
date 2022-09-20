const https = require('https');
const fs = require('fs');
const path = require('path');


function downloadFile(url){
    const fileName = path.basename(url);

    const req = https.get(url,(res)=>{
    const fileStream = fs.createWriteStream(fileName);
    res.pipe(fileStream);

    fileStream.on('error',(err)=>{
        console.log('Error writting to the system');
        console.log(err);
    })

    fileStream.on('finish',()=>{
        fileStream.close();
        console.log('Done');
    })
});

req.on('error',(err)=>{
    console.log('error downloading the file.');
    console.log(err);
})
}

downloadFile('https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg');