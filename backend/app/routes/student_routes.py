from flask import Blueprint
from app.services.attendance_service import mark_attendance, get_attendance

student_bp = Blueprint('student', __name__)

@student_bp.route('/attendance/mark', methods=['POST'])
def mark_attendance_route():
    return mark_attendance()

@student_bp.route('/attendance/<int:course_id>', methods=['GET'])
def get_attendance_route(course_id):
    return get_attendance(course_id)