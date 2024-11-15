import React, { useState } from "react";

const RegistrationForm = ({ teacher, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registered ${name} for ${teacher.name}'s lesson!`);
        onClose();
    };

    return (
        <div className="registration-form">
            <h3>Register for {teacher.name}'s Lesson</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
