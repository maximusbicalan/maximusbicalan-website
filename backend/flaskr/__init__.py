import os 
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, 
                static_folder=os.path.join(os.path.dirname(__file__), "../../frontend/dist"),
                static_url_path='', # Serve the index.html file from the root URL
                instance_relative_config=True)
    CORS(app)
    from flaskr.db import db
    db.init_app(app)

    instance_path = os.path.join(os.path.dirname(__file__), '../instance')
    os.makedirs(instance_path, exist_ok=True)

    app.config.from_mapping(
        SECRET_KEY='dev',
        SQLALCHEMY_DATABASE_URI=f'sqlite:///{os.path.join(instance_path, "flaskr.sqlite")}',  # Corrected path
        SQLALCHEMY_TRACK_MODIFICATIONS=False
    )

    if test_config is None: 
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try: 
        os.makedirs(app.instance_path)
    except OSError:
        pass 

    @app.route('/', methods=['GET'])
    def serve_react():
        return send_from_directory(app.static_folder, 'index.html')

    # Catch-all route to handle React routing
    @app.errorhandler(404)
    def not_found(e):
        return send_from_directory(app.static_folder, 'index.html')

    @app.route('/api/data', methods=['GET'])
    def get_data():
        return jsonify({"message": "Hello WORLD Flask!"})

    from flaskr.routes.routes import main_routes
    app.register_blueprint(main_routes)
    return app
