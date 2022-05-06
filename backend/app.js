const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

//middleware
app.use(koaBody());

//Require routes
let items = require('./routes/Items.js');
let customers = require('./routes/customers.js');
let traders = require('./routes/Traders.js');


//Use routes
app.use(items.routes());
app.use(customers.routes());
app.use(traders.routes());


app.listen(5000);