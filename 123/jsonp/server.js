let express = require('express');
let app = express();
app.get('/getData',function(req,rea){
    res.end('我喜欢你')
})
app.listen(3000);