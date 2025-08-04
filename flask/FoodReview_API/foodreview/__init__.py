from flask import Flask, jsonify
from .routes import auth_bp, restaurants_bp
from .db import init_database


def create_app():
    app = Flask(__name__, instance_relative_config=True)

    # Initialize database tables on startup
    with app.app_context():
        init_database()

    # Root route for API documentation
    @app.route('/')
    def welcome():
        return jsonify({
            'message': 'Welcome to FoodReview API! 🧩',
            'version': '1.0.0',
            'database': 'Connected to Neon PostgreSQL',
            'endpoints': {
                'auth': {
                    'register': 'POST /auth/register',
                    'login': 'POST /auth/login'
                },
                'restaurants': {
                    'list': 'GET /restaurants (requires auth)',
                    'create': 'POST /restaurants (requires auth)',
                    'reviews': {
                        'list': 'GET /restaurants/{id}/reviews (requires auth)',
                        'create': 'POST /restaurants/{id}/reviews (requires auth)'
                    }
                }
            },
            'documentation': 'See README.md for detailed API documentation'
        })

    app.register_blueprint(auth_bp)
    app.register_blueprint(restaurants_bp)

    return app
