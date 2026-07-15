import { useState } from "react";

export default function ExperienceInfo() {
  const [isEditing, setIsEditing] = useState(true);

  const [info, setInfo] = useState({
    name: "",
    title: "",
    responsibility: "",
    date: "",
  });

  function submitInfo(event) {
    event.preventDefault();

    setIsEditing(false);
  }

  function editInfo(event) {
    event.preventDefault();

    setIsEditing(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setInfo({
      ...info,
      [name]: value,
    });
  }

  return (
    <section className="education-info">
      <h2>Education History</h2>

      {isEditing ? (
        <form>
          {/* name */}
          <div className="form-group">
            <label htmlFor="name">Company Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={info.name}
              onChange={handleChange}
            />
          </div>

          {/* title */}
          <div className="form-group">
            <label htmlFor="title">Position Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={info.title}
              onChange={handleChange}
            />
          </div>

          {/* responsibility */}
          <div className="form-group">
            <label htmlFor="responsibility">Responsibilities</label>
            <input
              type="text"
              id="responsibility"
              name="responsibility"
              value={info.responsibility}
              onChange={handleChange}
            />
          </div>

          {/* date */}
          <div className="form-group">
            <label htmlFor="date">Date of Employment</label>
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
        <div>
          <p>{info.name}</p>
          <p>{info.title}</p>
          <p>{info.responsibility}</p>
          <p>{info.date}</p>

          <button onClick={editInfo}>Edit</button>
        </div>
      )}
    </section>
  );
}
