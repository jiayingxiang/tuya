const express=require('express');
const bodyParser=require('body-parser');
const app=express();

/*路由 */
var example=require('./routes/example')
var active=require('./routes/active')

//监听端口
app.listen(3000);


app.use('/example',example);
app.use('/active',active);

