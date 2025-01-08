from datetime import date
from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app import db
from app.models import Attendance

@jwt_required()
def mark_attendance():
    data = request.get_json()
    student_id = get_jwt_identity()['id']
    course_id = data.get('course_id')
    attendance_date = data.get('date', date.today().isoformat())
    status = data.get('status', 'Present')

    attendance = Attendance(
        student_id=student_id,
        course_id=course_id,
        date=attendance_date,
        status=status
    )
    db.session.add(attendance)
    db.session.commit()
    return jsonify({"message": "Attendance marked successfully!"}), 201

@jwt_required()
def get_attendance(course_id):
    attendance_records = Attendance.query.filter_by(course_id=course_id).all()
    result = [
        {
            "student_id": record.student_id,
            "course_id": record.course_id,
            "date": record.date.isoformat(),
            "status": record.status
        }
        for record in attendance_records
    ]
    return jsonify({"attendance": result}), 200