//Creating a middleware object
const logger = (req, res, next) => {
    console.log(`request made on: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}


module.exports = logger;