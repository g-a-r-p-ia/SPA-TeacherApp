import teachers from "../data/teachers.json";

export const fetchTeachers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(teachers), 500); // Simulate API delay
    });
};
