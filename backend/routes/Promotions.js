const Router = require('koa-router');

const router = new Router({
	prefix: '/promotions'
});

let promotions = [
	{ id: 100, iname: 'Quartz Analog Wrist Watch', price: 'US $4.99', percentage: '10%', newPrice: 'US $4.491',
          image: 'https://i.ebayimg.com/images/g/EwMAAOSwYpxdkCuV/s-l1600.jpg'},
	{ id: 102, iname: 'Apple iPod', price: 'US $219.99', percentage: '5%', newPrice: 'US $208.99', 
          image: 'https://i.ebayimg.com/images/g/VnIAAOSwVZ9dp3b4/s-l1600.png'}
];

router.get('/', (ctx, next) => {
	ctx.body = promotions;
	next();
});


router.post('/add', (ctx, next) => {
	if (
		!ctx.request.body.id ||
		!ctx.request.body.iname ||
		!ctx.request.body.price ||
        !ctx.request.body.percentage ||
        !ctx.request.body.newPrice ||
        !ctx.request.body.image 
	) {
		ctx.response.status = 400;
		ctx.body = 'Please enter the data';
	} else {
		let newPromotion = promotions.push({
			id: ctx.request.body.id,
			iname: ctx.request.body.iname,
			price: ctx.request.body.price,
            percentage: ctx.request.body.percentage,
            newPrice: ctx.request.body.newPrice,
            image: ctx.request.body.image
		});
		ctx.response.status = 201;
		ctx.body = `New promotion = added with id: ${ctx.request.body.id} & item name: ${
			ctx.request.body.iname
		}`;
	}
	next();
});


module.exports = router;