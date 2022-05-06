const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

//middleware
app.use(koaBody());

//Require routes
let items = require('./routes/Items.js');
let customers = require('./routes/customers.js');
let traders = require('./routes/Traders.js');
let cart = require('./routes/Cart.js');
let wishList = require('./routes/wishList.js');
let Promotions = require('./routes/Promotions.js');


//Use routes
app.use(items.routes());
app.use(customers.routes());
app.use(traders.routes());
app.use(cart.routes());
app.use(wishList.routes());
app.use(Promotions.routes());

app.listen(5000);