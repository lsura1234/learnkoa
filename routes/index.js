const Router = require('koa-router');
const router = new Router();
router.get('/', (ctx, next) => {
    ctx.status = 200;
    ctx.body = { msg: 'Hello World' };
 });
 router.get('/test', (ctx, next) => {
    ctx.status = 200;
    ctx.body = { msg:'test' };
 });




 module.exports = router;

