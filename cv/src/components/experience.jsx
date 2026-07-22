import { useState } from "react";
import "../styles/experience.css";

export default function ExperienceInfo() {
  // track whether the form is in edit mode or display mode
  const [isEditing, setIsEditing] = useState(true);

  // stores the user's work experience information
  const [info, setInfo] = useState({
    name: "",
    title: "",
    responsibility: "",
    date: "",
  });

  // prevents the page from reloading and switches to display mode
  function submitInfo(event) {
    event.preventDefault();

    setIsEditing(false);
  }

  // prevents the page from reloading and switches back to edit mode
  function editInfo(event) {
    event.preventDefault();

    setIsEditing(true);
  }

  // update the corresponding property in the info object whenever
  // the user types into an input field
  function handleChange(event) {
    const { name, value } = event.target;

    setInfo({
      // copies the existing properties from the info object
      ...info,

      // updates only the property whose name matches the input's name attribute
      [name]: value,
    });
  }

  return (
    <section className="experience-info">
      <h2>Work Experience</h2>

      {isEditing ? (
        <form className="experience-form">
          <div className="experience-form-group">
            <label htmlFor="name">Company Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={info.name}
              onChange={handleChange}
            />
          </div>

          <div className="experience-form-group">
            <label htmlFor="title">Position Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={info.title}
              onChange={handleChange}
            />
          </div>

          <div className="experience-form-group">
            <label htmlFor="responsibility">Responsibilities</label>
            <input
              type="text"
              id="responsibility"
              name="responsibility"
              value={info.responsibility}
              onChange={handleChange}
            />
          </div>

          <div className="experience-form-group">
            <label htmlFor="date">Date of Employment</label>
            <input
              type="date"
              id="date"
              name="date"
              value={info.date}
              onChange={handleChange}
            />
          </div>

          <button className="experience-submit-btn" onClick={submitInfo}>
            Submit
          </button>
        </form>
      ) : (
        <div className="experience-display">
          <p>{info.name}</p>
          <p>{info.title}</p>
          <p>{info.responsibility}</p>
          <p>{info.date}</p>

          <button className="experience-edit-btn" onClick={editInfo}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
