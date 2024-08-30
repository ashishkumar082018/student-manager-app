import React, { useContext, useState, useEffect } from 'react';
import { StudentContext } from '../store/StudentContext';

const StudentForm = ({ closeModal, student = {}, isEditMode = false }) => {
  const { addStudent, updateStudent } = useContext(StudentContext);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: ''
  });

  useEffect(() => {
    if (isEditMode && student) {
      setFormData({
        name: student.name,
        mobile: student.mobile,
        address: student.address
      });
    }
  }, [isEditMode, student]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, mobile, address } = formData;
    if (!name || !mobile || !address) {
      alert("All fields are required!");
      return;
    }

    if (isEditMode) {
      updateStudent(student.id, formData);
    } else {
      addStudent(formData);
    }
    closeModal();
  };

  return (
    <div className="modal" >
      <div className="modal-content">

        <form onSubmit={handleSubmit} >

          <div className="form-field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-buttons">
            <button type="submit">{isEditMode ? 'Update' : 'Add'}</button>
            <button type="button" onClick={closeModal}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
