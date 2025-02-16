from flask import Blueprint, request, jsonify
from flaskr.models import db, User, Message, Skill, Project
from datetime import datetime

main_routes = Blueprint('routes_bp', __name__)

def serialize_model(model):
    return {c.name: getattr(model, c.name) for c in model.__table__.columns}

# User Routes
@main_routes.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([serialize_model(user) for user in users])

@main_routes.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify(serialize_model(user))

@main_routes.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    if not data or not data.get('username') or not data.get('password'):
        return jsonify({'error': 'Username and password are required'}), 400
    user = User(username=data['username'], password=data['password'], is_admin=data.get('is_admin', False))
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User created successfully', 'user': serialize_model(user)}), 201

@main_routes.route('/api/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json()
    user.username = data.get('username', user.username)
    user.password = data.get('password', user.password)
    user.is_admin = data.get('is_admin', user.is_admin)
    db.session.commit()
    return jsonify({'message': 'User updated successfully', 'user': serialize_model(user)})

@main_routes.route('/api/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'})

# Message Routes
@main_routes.route('/api/messages', methods=['GET'])
def get_messages():
    messages = Message.query.all()
    return jsonify([serialize_model(msg) for msg in messages])

@main_routes.route('/api/messages/<int:message_id>', methods=['GET'])
def get_message(message_id):
    message = Message.query.get_or_404(message_id)
    return jsonify(serialize_model(message))

@main_routes.route('/api/messages', methods=['POST'])
def create_message():
    data = request.get_json()
    if not data or not data.get('email_field') or not data.get('message_content'):
        return jsonify({'error': 'Email and message content are required'}), 400
    message = Message(email_field=data['email_field'], message_content=data['message_content'])
    db.session.add(message)
    db.session.commit()
    return jsonify({'message': 'Message sent successfully', 'message_data': serialize_model(message)}), 201

@main_routes.route('/api/messages/<int:message_id>', methods=['DELETE'])
def delete_message(message_id):
    message = Message.query.get_or_404(message_id)
    db.session.delete(message)
    db.session.commit()
    return jsonify({'message': 'Message deleted successfully'})

# Skill Routes
@main_routes.route('/api/skills', methods=['GET'])
def get_skills():
    skills = Skill.query.all()
    return jsonify([serialize_model(skill) for skill in skills])

# Error Handling
@main_routes.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Resource not found'}), 404

@main_routes.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500
