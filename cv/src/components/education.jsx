import { useState } from "react";

export default function EducationInfo() {
  // controls whether the form or the submitted information is displayed
  const [isEditing, setIsEditing] = useState(true);

  // stores the user's education information
  const [info, setInfo] = useState({
    name: "",
    title: "",
    date: "",
  });

  // hide the form and display the submitted information
  function submitInfo(event) {
    event.preventDefault();

    setIsEditing(false);
  }

  // show the form again so the user can edit their information
  function editInfo(event) {
    event.preventDefault();

    setIsEditing(true);
  }

  // update the corresponding property in the info object whenever
  // the user types into an input field
  function handleChange(event) {
    const { name, value } = event.target;

    setInfo({
      // copy the existing properties
      ...info,

      // update only the property that matches the input's name attribute
      [name]: value,
    });
  }

  return (
    <section className="education-info">
      <h2>Education History</h2>

      {/* display the form while editing */}
      {isEditing ? (
        <form>
          <div className="form-group">
            <label htmlFor="name">School Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={info.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title of Study</label>
            <input
              type="text"
              id="title"
              name="title"
              value={info.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date of Study</label>
            <input
              type="date"
              id="date"
              name="date"
              value={info.date}
              onChange={handleChange}
            />
          </div>

          <button onClick={submitInfo}>Submit</button>
        </form>
      ) : (
        // display the saved information after submission
        <div>
          <p>{info.name}</p>
          <p>{info.title}</p>
          <p>{info.date}</p>

          <button onClick={editInfo}>Edit</button>
        </div>
      )}
    </section>
  );
}
