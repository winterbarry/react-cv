import { useState } from "react";
import "../styles/general.css";

export default function GeneralInfo() {
  // controls whether the form or the submitted information is displayed
  const [isEditing, setIsEditing] = useState(true);

  // stores the user's general information
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // hide the form and display the submitted information
  function submitInfo(event) {
    event.preventDefault();

    setIsEditing(false);
  }

  // show the form so the user can edit their information
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
    <section className="general-info">
      <h2>General Information</h2>

      {/* display the form if isEditing === true */}
      {isEditing ? (
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={info.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={info.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={info.phone}
              onChange={handleChange}
            />
          </div>

          <button onClick={submitInfo}>Submit</button>
        </form>
      ) : (
        // otherwise, display the saved information after submission
        <div className="cv-header">
          <h1>{info.name}</h1>

          <div className="contact-info">
            <span>{info.email}</span>
            <span>{info.phone}</span>
          </div>

          <button onClick={editInfo}>Edit</button>
        </div>
      )}
    </section>
  );
}
