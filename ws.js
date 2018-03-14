var WebSocketServer = require('ws').Server,
s = new WebSocketServer({port: 40510})

s.on('connection',function(ws){
   ws.on('message',function(message){
	   message=JSON.parse(message);
    if(message.type=='name'){
		ws.personName=message.data;
		return;
	}
     s.clients.forEach(function e(client){

     if(client!=ws)
		 {	     
		         var myimage = png.load('image.jpg');
				 client.send(myimage);
				 client.send(JSON.stringify({"type":ws.personName,"data":message.data}));
		 }
});
});
ws.on('close',function(){
  console.log('client left');

});
});
