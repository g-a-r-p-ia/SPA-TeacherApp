// TeachersPage.jsx
import React, { useState, useEffect } from "react";
import { fetchTeachers } from "../api/teachersApi";
import TeacherCard from "../components/TeacherCard";
import RegistrationForm from "../components/RegistrationForm";
import Footer from "../components/Footer";
import InfoBlock from "../components/InfoBlock";

const TeachersPage = () => {
    const [teachers, setTeachers] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    useEffect(() => {
        const loadTeachers = async () => {
            const data = await fetchTeachers();
            setTeachers(data);
        };
        loadTeachers();
    }, []);

    const handleRegister = (teacher) => {
        setSelectedTeacher(teacher);
    };

    const closeForm = () => {
        setSelectedTeacher(null);
    };

    return (
        <div className="main-content">
            <header>Welcome to TeacherApp</header>

            <InfoBlock />

            <div>
                <h1>Why You Need to Visit Our Classes</h1>
                <p>
                    Our teachers are highly experienced and passionate about helping
                    students succeed. We offer personalized lessons and dedicated support
                    to ensure every student reaches their full potential. Join us today!
                </p>
            </div>

            <div className="teachers-page">
                <h2>Our Teachers</h2>
                <div className="teacher-list">
                    {teachers.map((teacher) => (
                        <div key={teacher.id} className="teacher-card-wrapper">
                            <TeacherCard teacher={teacher} onRegister={handleRegister} />
                        </div>
                    ))}
                </div>
            </div>

            {selectedTeacher && (
                <RegistrationForm onClose={closeForm} teacher={selectedTeacher} />
            )}

            <Footer />
        </div>
    );
};

export default TeachersPage;
