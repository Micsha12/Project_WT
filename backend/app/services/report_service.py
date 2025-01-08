from flask import jsonify
from app.models import Attendance, User

def generate_attendance_report(course_id):
    attendance_records = Attendance.query.filter_by(course_id=course_id).all()
    report = {}

    for record in attendance_records:
        student = User.query.get(record.student_id)
        if student.username not in report:
            report[student.username] = []
        report[student.username].append({
            "date": record.date.isoformat(),
            "status": record.status
        })

    return jsonify({"report": report}), 200