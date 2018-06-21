let express = require('express')


let app = express()

app.get('/article',function (req,res) {
	res.send('asds')
})


let server = app.listen(8080,function(){
	var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})
