var fs = require('fs')  
var file = process.argv[2] 
function read(){
    fs.readFile(file, function (err, contents){
        var lines = contents.toString().split('\n').length-1  
        
        console.log(lines)
    })} 

read();