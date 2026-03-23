import { useState } from 'react';
import './StudentManager.css';

const initialStudents = [
  { id: '101', name: 'Aarav', course: 'Mathematics' },
  { id: '102', name: 'Diya', course: 'Physics' },
  { id: '103', name: 'Karthik', course: 'Computer Science' },
  { id: '104', name: 'Meera', course: 'Chemistry' },
  { id: '105', name: 'Rahul', course: 'Biology' },
];

const emptyStudent = {
  id: '',
  name: '',
  course: '',
};

function StudentManager() {
  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState(emptyStudent);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addStudent = () => {
    const trimmedStudent = {
      id: newStudent.id.trim(),
      name: newStudent.name.trim(),
      course: newStudent.course.trim(),
    };

    if (!trimmedStudent.id || !trimmedStudent.name || !trimmedStudent.course) {
      return;
    }

    setStudents((prev) => [...prev, trimmedStudent]);
    setNewStudent(emptyStudent);
  };

  const deleteStudent = (studentId) => {
    setStudents((prev) => prev.filter((student) => student.id !== studentId));
  };

  return (
    <div className="student-manager">
      <h2>Student Manager</h2>

      <div className="student-form">
        <input
          type="text"
          name="id"
          placeholder="Enter ID"
          value={newStudent.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={newStudent.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={newStudent.course}
          onChange={handleChange}
        />
        <button type="button" onClick={addStudent}>
          Add Student
        </button>
      </div>

      {students.length === 0 ? (
        <p className="empty-message">No students available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentManager;
