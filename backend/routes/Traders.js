const Router = require('koa-router');

const router = new Router({
	prefix: '/traders'
});

let traders = [
	{ id: 11, name: 'Ranil Perera', address: '12, Chennai, India' },
	{ id: 12, name: 'Vimala Galpatha', address: '23, Colombo, Sri Lanka' },
	{ id: 13, name: 'Namal Boralugoda', address: '43, Anuradhapura, Sri Lanka' },
	{ id: 14, name: 'Karuna Pieris', address: '135, Kegalle, Sri Lanka' }
];

router.get('/', (ctx, next) => {
	ctx.body = traders;
	next();
});

router.get('/:id', (ctx, next) => {
	let getCurrentTrader = traders.filter(function(trader) {
		if (trader.id == ctx.params.id) {
			return true;
		}
	});

	if (getCurrentTrader.length) {
		ctx.body = getCurrentTrader[0];
	} else {
		ctx.response.status = 404;
		ctx.body = 'Trader Not Found';
	}
	next();
});

router.post('/add', (ctx, next) => {
	// Check if any of the data field not empty
	if (
		!ctx.request.body.id ||
		!ctx.request.body.name ||
		!ctx.request.body.address
	) {
		ctx.response.status = 400;
		ctx.body = 'Please enter the data';
	} else {
		let newTrader = traders.push({
			id: ctx.request.body.id,
			name: ctx.request.body.name,
			address: ctx.request.body.address
		});
		ctx.response.status = 201;
		ctx.body = `New trader added with id: ${ctx.request.body.id} & name: ${
			ctx.request.body.name
		}`;
	}
	next();
});


module.exports = router;