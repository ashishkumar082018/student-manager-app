import React, { useState } from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';

const StudentManager = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="manager">
            <h1>Student Manager</h1>
            <button onClick={openModal}>ADD NEW STUDENT</button>
            <StudentList />
            {isModalOpen && <StudentForm closeModal={closeModal} />}
        </div>
    );
};

export default StudentManager;
