import React, { useContext, useState } from 'react';
import { StudentContext } from '../store/StudentContext';
import StudentForm from './StudentForm';

const StudentList = () => {
  const { students, deleteStudent, updateStudent } = useContext(StudentContext);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const openEditModal = (student) => {
    setCurrentStudent(student);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setCurrentStudent(null);
  };

  return (
    <div className="student-list">
      <h2>All Students</h2>
      <p>Total Students: {students.length}</p>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} {student.mobile} {student.address}
            <button onClick={() => openEditModal(student)}>Edit</button>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {isEditModalOpen && (
        <StudentForm
          closeModal={closeEditModal}
          student={currentStudent}
          isEditMode={true}
        />
      )}
    </div>
  );
};

export default StudentList;
