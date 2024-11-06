import React, { useState, useEffect } from "react";
import { StudentInfo } from "./StudentInfo";
import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  //the point of state is that it is dynamic and can be changed
  const [students, setStudents] = useState(studentList); //initialize state as studentlist

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("https://json.link/oJbmHxLn8f.json");
      const response = await fetch("http://localhost:3000/students");
      const data = await response.json();
      console.log(data);
      setStudents(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to CTP</h1>
        <p>List of Students</p>
      </div>
      {students.map((student) => (
        <Link to={`students/${student.sId}`}>
          <StudentInfo
            key={student.sId}
            firstName={student.firstName}
            lastName={student.lastName}
            ID={student.sId}
            school={student.school}
            major={student.major}
          />
        </Link>
      ))}

      <Link to={`students/submit`}>Add a new student</Link>

      <button
        onClick={async () => {
          await fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sId: "123",
              firstName: "John",
              lastName: "Doe",
              school: "Queens College",
              major: "CS",
            }),
          });
        }}
      >
        Add new student
      </button>

      <button
        onClick={() =>
          setStudents((oldStudentList) => [
            ...oldStudentList.slice(0, oldStudentList.length - 1),
          ])
        }
      >
        Remove last student
      </button>
    </>
  );
}

const studentList = [
  {
    firstName: "Misty",
    lastName: "Knight",
    sId: "234",
    school: "Queens College",
    major: "Law",
  },
  {
    firstName: "Jessica",
    lastName: "Jones",
    sId: "434",
    school: "Brooklyn College",
    major: "CS",
  },
  {
    firstName: "Colleen",
    lastName: "Wing",
    sId: "233",
    school: "Queens College",
    major: "CS",
  },
  {
    firstName: "Dare",
    lastName: "Devil",
    sId: "876",
    school: "CCNY",
    major: "Law",
  },
  {
    firstName: "Luke",
    lastName: "Cage",
    sId: "323",
    school: "CCNY",
    major: "Math",
  },
];
