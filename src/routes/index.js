const newsRouter = require('./new');
const sitesRouter = require('./site');

function route(app){

    app.use('/news', newsRouter);
    app.use('/', sitesRouter);

} 

module.exports = route;