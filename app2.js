// multiple handler for the same path /foo 
var express = require('express'); 
var app = express(); 
app.get('/foo', function (req, res) { 
   res.send('hi'); 
}); 
// add a second foo route handler 
app.get('/foo2', function (req, res) { 
   res.send('hi2'); 
}); 

// call in a loop for different paths 

// for (i = 0; i < paths.length; i++) { 

//    app.get('/foo'+paths[i], function (req, res) { 
//       res.send('hi ' + paths[i]); 
//    }); 
// } 

console.log('stack', app._router.stack); 
app.listen(3000);