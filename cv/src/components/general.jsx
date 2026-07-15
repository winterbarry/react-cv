import { useState } from "react";

export default function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
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
    <section className="general-info">
      <h2>General Information</h2>

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
        <div>
          <p>
            <strong>Name:</strong> {info.name}
          </p>
          <p>
            <strong>Email:</strong> {info.email}
          </p>
          <p>
            <strong>Phone:</strong> {info.phone}
          </p>

          <button onClick={editInfo}>Edit</button>
        </div>
      )}
    </section>
  );
}
