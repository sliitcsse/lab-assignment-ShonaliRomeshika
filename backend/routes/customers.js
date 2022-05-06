const Router = require('koa-router');

const router = new Router({
	prefix: '/customers'
});

let customers = [
	{ id: 01, name: 'Kamal Perera', address: '12, Chennai, India' },
	{ id: 02, name: 'Mala Galpatha', address: '23, Colombo, Sri Lanka' },
	{ id: 03, name: 'Sunil Boralugoda', address: '43, Anuradhapura, Sri Lanka' },
	{ id: 04, name: 'Vimal Pieris', address: '135, Kegalle, Sri Lanka' }
];

router.get('/', (ctx, next) => {
	ctx.body = customers;
	next();
});

router.get('/:id', (ctx, next) => {
	let getCurrentCustomer = customers.filter(function(customer) {
		if (customer.id == ctx.params.id) {
			return true;
		}
	});

	if (getCurrentCustomer.length) {
		ctx.body = getCurrentCustomer[0];
	} else {
		ctx.response.status = 404;
		ctx.body = 'Customer Not Found';
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
		let newCustomer = customers.push({
			id: ctx.request.body.id,
			name: ctx.request.body.name,
			address: ctx.request.body.address
		});
		ctx.response.status = 201;
		ctx.body = `New customer added with id: ${ctx.request.body.id} & name: ${
			ctx.request.body.name
		}`;
	}
	next();
});


module.exports = router;