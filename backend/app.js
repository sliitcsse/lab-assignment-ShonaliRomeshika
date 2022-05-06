const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

//middleware
app.use(koaBody());

//Require routes
let items = require('./routes/Items.js');


//Use routes
app.use(items.routes());


app.listen(5000);