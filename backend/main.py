from app import create_app, db

# Create app instance
app = create_app()

# Ensure the app context is pushed
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)