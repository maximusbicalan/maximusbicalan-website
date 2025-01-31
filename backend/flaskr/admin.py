from models import db, User

admin_user = User(username='admin', password='justdancewithmetwice', is_admin=True)
db.session.add(admin_user)
db.session.commit()