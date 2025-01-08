from flask import Blueprint
from app.services.report_service import generate_attendance_report

teacher_bp = Blueprint('teacher', __name__)

@teacher_bp.route('/report/<int:course_id>', methods=['GET'])
def generate_report_route(course_id):
    return generate_attendance_report(course_id)