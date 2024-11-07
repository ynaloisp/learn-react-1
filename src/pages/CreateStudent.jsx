import { Link } from "react-router-dom";
import { useState } from "react";

export function CreateStudent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [major, setMajor] = useState("");
  const [school, setSchool] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = {
      sId: id,
      firstName: firstName,
      lastName: lastName,
      school: school,
      major: major,
    };
    console.log(studentData);
    await fetch(`${import.meta.env.VITE_API_URL}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });
  };

  return (
    <div>
      <h1>Add a new student</h1>
      <Link to="/">Back to home</Link>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Major"
          onChange={(e) => setMajor(e.target.value)}
        />
        <input
          type="text"
          placeholder="School"
          onChange={(e) => setSchool(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
