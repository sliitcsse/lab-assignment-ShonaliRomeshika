const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

//middleware
app.use(koaBody());

//Require routes


//Use routes


app.listen(5000);