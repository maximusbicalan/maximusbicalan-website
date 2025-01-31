from flask import Blueprint, request, jsonify
from flaskr.models import db, User, Message, Skill, Project
from datetime import datetime

main_routes = Blueprint('routes_bp', __name__)

# Helper function to serialize SQLAlchemy models
def serialize_model(model):
    return {c.name: getattr(model, c.name) for c in model.__table__.columns}

### User Authentication ###
@main_routes.route('/api/users', methods=['GET'])
def get_users():
    """Retrieve all users."""
    users = User.query.all()
    return jsonify([serialize_model(user) for user in users])

@main_routes.route('/api/login', methods=['POST'])
def login():
    """Handle user login."""
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username, password=password).first()
    if user:
        return jsonify({'isAdmin': user.is_admin, 'message': 'Login successful'})
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

### Messages ###

@main_routes.route('/api/messages', methods=['POST'])
def create_message():
    """Handle sending a message."""
    data = request.get_json()
    if not data or not data.get('email') or not data.get('message'):
        return jsonify({'error': 'Email and message are required'}), 400

    message = Message(email=data['email'], content=data['message'])
    db.session.add(message)
    db.session.commit()
    return jsonify({'message': 'Message sent successfully'}), 201

@main_routes.route('/api/messages', methods=['GET'])
def get_messages():
    """Retrieve all messages (admin only)."""
    messages = Message.query.all()
    return jsonify([serialize_model(msg) for msg in messages])

### Skills ###

@main_routes.route('/api/skills', methods=['GET'])
def get_skills():
    """Retrieve all skills."""
    skills = Skill.query.all()
    return jsonify([serialize_model(skill) for skill in skills])

@main_routes.route('/api/skills', methods=['POST'])
def add_skill():
    """Add a new skill (admin only)."""
    data = request.get_json()
    if not data or not data.get('name'):
        return jsonify({'error': 'Skill name is required'}), 400

    skill = Skill(
        name=data['name'],
        type=data.get('type'),
        category=data.get('category')
    )
    db.session.add(skill)
    db.session.commit()
    return jsonify({'message': 'Skill added successfully', 'skill': serialize_model(skill)}), 201

@main_routes.route('/api/skills/<int:skill_id>', methods=['DELETE'])
def delete_skill(skill_id):
    """Delete a skill (admin only)."""
    skill = Skill.query.get_or_404(skill_id)
    db.session.delete(skill)
    db.session.commit()
    return jsonify({'message': 'Skill deleted successfully'})

### Projects ###

@main_routes.route('/api/projects', methods=['GET'])
def get_projects():
    """Retrieve all projects."""
    projects = Project.query.all()
    return jsonify([serialize_model(project) for project in projects])

@main_routes.route('/api/projects', methods=['POST'])
def add_project():
    """Add a new project (admin only)."""
    data = request.get_json()
    if not data or not data.get('title') or not data.get('description') or not data.get('image'):
        return jsonify({'error': 'Title, description, and image are required'}), 400

    project = Project(
        title=data['title'],
        description=data['description'],
        image=data['image']
    )
    db.session.add(project)
    db.session.commit()
    return jsonify({'message': 'Project added successfully', 'project': serialize_model(project)}), 201

@main_routes.route('/api/projects/<int:project_id>', methods=['DELETE'])
def delete_project(project_id):
    """Delete a project (admin only)."""
    project = Project.query.get_or_404(project_id)
    db.session.delete(project)
    db.session.commit()
    return jsonify({'message': 'Project deleted successfully'})

### Error Handling ###

@main_routes.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Resource not found'}), 404

@main_routes.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500
