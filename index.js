const http = require('http');
const fs = require('fs');

const content = `<h1> Hello World </h1> 
<p> This is Hitesh... </p>`

fs.writeFile('index.html', `${content}`, (err) =>{
    if(err){
        console.log(err);
    }
    console.log("Successfully created file");
})


let httpServer = http.createServer((req,res)=>{
    fs.readFile('index.html', (data,err) => {
        res.write(data);
        res.end();
    })
})

httpServer.listen('5000', () => {
    console.log("Server listening on port 5000...");
})