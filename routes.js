var authController = require('./controllers/auth');

module.exports = {
    registerRoutes: function(app) {
        // Registers controller routes.
		authController.registerRoutes(app);
    }
}