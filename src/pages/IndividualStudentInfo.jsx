import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const IndividualStudentInfo = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    async function getStudent() {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/students/${id}`
      );
      const data = await response.json();
      console.log(data);
      setStudent(data);
      console.log(student);
    }
    getStudent();
  }, []);

  return (
    <div>
      <h1>
        {student.lastName}, {student.firstName}
      </h1>
      <ul>
        <li>
          <strong>ID:</strong> {student.sId}
        </li>
        <li>
          <strong>School:</strong> {student.school}
        </li>
        <li>
          <strong>Major:</strong> {student.major}
        </li>
      </ul>
    </div>
  );
};
