const Router = require('koa-router');

const router = new Router({
	prefix: '/items'
});

let items = [
	{ id: 100, iname: 'Quartz Analog Wrist Watch', price: 'US $4.99', image: 'https://i.ebayimg.com/images/g/EwMAAOSwYpxdkCuV/s-l1600.jpg'},
	{ id: 101, iname: 'Leather Peep Pump Heels', price: 'US $33.56', image: 'https://i.ebayimg.com/images/g/YYMAAOSwAeNcyq--/s-l1600.jpg'},
	{ id: 102, iname: 'Apple iPod', price: 'US $219.99', image: 'https://i.ebayimg.com/images/g/VnIAAOSwVZ9dp3b4/s-l1600.png'},
	{ id: 103, iname: 'Prince Phantom 97P Tennnis Racket', price: 'US $50.00', image: 'https://i.ebayimg.com/images/g/lZ4AAOSwYMRicxPd/s-l1600.jpg'},
];

router.get('/', (ctx, next) => {
	ctx.body = items;
	next();
});

router.get('/:id', (ctx, next) => {
	let getCurrentItem = items.filter(function(item) {
		if (item.id == ctx.params.id) {
			return true;
		}
	});

	if (getCurrentItem.length) {
		ctx.body = getCurrentItem[0];
	} else {
		ctx.response.status = 404;
		ctx.body = 'Item Not Found';
	}
	next();
});

router.post('/add', (ctx, next) => {
	if (
		!ctx.request.body.id ||
		!ctx.request.body.iname ||
		!ctx.request.body.price ||
        !ctx.request.body.image 
	) {
		ctx.response.status = 400;
		ctx.body = 'Please enter the data';
	} else {
		let newItem = items.push({
			id: ctx.request.body.id,
			iname: ctx.request.body.iname,
			price: ctx.request.body.price,
            image: ctx.request.body.image
		});
		ctx.response.status = 201;
		ctx.body = `New item = added with id: ${ctx.request.body.id} & item name: ${
			ctx.request.body.iname
		}`;
	}
	next();
});


module.exports = router;