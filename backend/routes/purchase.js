const Router = require('koa-router');

const router = new Router({
	prefix: '/purchase'
});

let purchases = [
    //{id: "102", cardType: "", cardNo: "", expMonth: "", expYear: "", cvn: ""}
]

router.post('/add', (ctx, next) => {
	// Check if any of the data field not empty
	if (
		!ctx.request.body.id ||
		!ctx.request.body.cardType ||
		!ctx.request.body.cardNo ||
        !ctx.request.body.expMonth ||
        !ctx.request.body.expYear ||
        !ctx.request.body.cvn
	) {
		ctx.response.status = 400;
		ctx.body = 'Please enter the data';
	} else {
		let newPurchase = purchases.push({
			id: ctx.request.body.id,
			cardType: ctx.request.body.cardType,
            cardNo: ctx.request.body.cardNo,
            expMonth: ctx.request.body.expMonth,
            expYear: ctx.request.body.expYear,
			cvn: ctx.request.body.cvn
		});
		ctx.response.status = 201;
		ctx.body = `New purchase added with id: ${ctx.request.body.id}`;
	}
	next();
});

module.exports = router;
