from flask_migrate import Migrate
from config.database import create_app, db
from app.routes.admin_routes import auth_bp

# Create app instance
app = create_app()

# Enable migrations
migrate = Migrate(app, db)

# Register routes
app.register_blueprint(auth_bp, url_prefix='/api/auth')

if __name__ == '__main__':
    app.run(debug=True)
