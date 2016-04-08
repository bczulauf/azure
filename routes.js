var authController = require('./controllers/auth');

module.exports = {
    authRoute: function(req, res) {
        // Registers controller routes.
		authController.route(req, res);
    }
}