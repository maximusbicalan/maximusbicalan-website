from flaskr import create_app
from flaskr.db import db

app = create_app()
with app.app_context():
    db.create_all()