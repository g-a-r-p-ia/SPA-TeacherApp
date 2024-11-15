// TeacherCard.jsx
import React from "react";
import "/src/App.css";

const TeacherCard = ({ teacher, onRegister }) => (
    <div className="teacher-card">
        <div className="teacher-info">
            <img
                src={`https://via.placeholder.com/100x100?text=${teacher.name}`}
                alt={teacher.name}
                className="teacher-avatar"
            />
            <div className="teacher-details">
                <h3>{teacher.name}</h3>
                <p>Grade: {teacher.grade}</p>
                <p>Experience: {teacher.experience} years</p>
            </div>
        </div>
        <p className="teacher-description">{teacher.description}</p>
        <div className="teacher-footer">
            <span>Cost per lesson: ${teacher.cost}</span>
            <button onClick={() => onRegister(teacher)}>Register</button>
        </div>
    </div>
);

export default TeacherCard;
