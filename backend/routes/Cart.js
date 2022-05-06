const Router = require('koa-router');

const router = new Router({
	prefix: '/cart'
});

let cart = [
	{ id: 50, iname: 'Quartz Analog Wrist Watch', unitPrice: 'US $4.99', quantity: 2, total: 'US $9.98',
                image: 'https://i.ebayimg.com/images/g/EwMAAOSwYpxdkCuV/s-l1600.jpg'},
	{ id: 51, iname: 'Leather Peep Pump Heels', unitPrice: 'US $33.56', quantity: 2, total: 'US $67.12',
                image: 'https://i.ebayimg.com/images/g/YYMAAOSwAeNcyq--/s-l1600.jpg'},
	{ id: 52, iname: 'Apple iPod', unitPrice: 'US $219.99', quantity: 1, total: 'US $219.99',
                image: 'https://i.ebayimg.com/images/g/VnIAAOSwVZ9dp3b4/s-l1600.png'},
	{ id: 53, iname: 'Prince Phantom 97P Tennnis Racket', unitPrice: 'US $50.00', quantity: 4, total: 'US $200.00',
    image: 'https://i.ebayimg.com/images/g/lZ4AAOSwYMRicxPd/s-l1600.jpg'},
];

router.get('/', (ctx, next) => {
	ctx.body = cart;
	next();
});


router.post('/add', (ctx, next) => {
	if (
		!ctx.request.body.id ||
		!ctx.request.body.iname ||
		!ctx.request.body.unitPrice ||
        !ctx.request.body.quantity ||
        !ctx.request.body.total ||
        !ctx.request.body.image 
	) {
		ctx.response.status = 400;
		ctx.body = 'Please enter the data';
	} else {
		let newCart = cart.push({
			id: ctx.request.body.id,
			iname: ctx.request.body.iname,
			price: ctx.request.body.unitPrice,
            quantity: ctx.request.body.quantity,
            total: ctx.request.body.total,
            image: ctx.request.body.image
		});
		ctx.response.status = 201;
		ctx.body = `New cart = added with id: ${ctx.request.body.id} & item name: ${
			ctx.request.body.iname
		}`;
	}
	next();
});


module.exports = router;