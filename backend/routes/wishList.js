const Router = require('koa-router');

const router = new Router({
	prefix: '/wishList'
});

let wishList = [
	{ id: 100, iname: 'Quartz Analog Wrist Watch', image: 'https://i.ebayimg.com/images/g/EwMAAOSwYpxdkCuV/s-l1600.jpg'},
	{ id: 101, iname: 'Leather Peep Pump Heels', image: 'https://i.ebayimg.com/images/g/YYMAAOSwAeNcyq--/s-l1600.jpg'},
	{ id: 102, iname: 'Apple iPod', image: 'https://i.ebayimg.com/images/g/VnIAAOSwVZ9dp3b4/s-l1600.png'},
	{ id: 103, iname: 'Prince Phantom 97P Tennnis Racket', image: 'https://i.ebayimg.com/images/g/lZ4AAOSwYMRicxPd/s-l1600.jpg'},
];

router.get('/', (ctx, next) => {
	ctx.body = wishList;
	next();
});


router.post('/add', (ctx, next) => {
	if (
		!ctx.request.body.id ||
		!ctx.request.body.iname ||
        !ctx.request.body.image 
	) {
		ctx.response.status = 400;
		ctx.body = 'Please enter the data';
	} else {
		let newwishList = items.push({
			id: ctx.request.body.id,
			iname: ctx.request.body.iname,
            image: ctx.request.body.image
		});
		ctx.response.status = 201;
		ctx.body = `New wishList = added with id: ${ctx.request.body.id} & item name: ${
			ctx.request.body.iname
		}`;
	}
	next();
});


module.exports = router;