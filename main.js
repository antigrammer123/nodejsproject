var http = require('http');
var dispatcher = require('httpdispatcher');

const PORT=8080; 

function handleRequest(request, response){
    //response.end('It Works!! Path Hit: ' + request.url);
    try{console.log("request.url");
        dispatcher.dispatch(request, response);
    }catch(err){console.log(err);}
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
    dispatcher.setStatic('resources');
    dispatcher.onGet("/page1", function(req, res){res.writeHead(200, {'Content-Type': 'text/pain'}); res.end('page one')});
});
