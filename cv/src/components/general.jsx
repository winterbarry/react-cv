export default function GeneralInfo() {
  function submitInfo() {
    event.preventDefault();

    console.log("Saving info...");
  }

  return (
    <section className="general-info">
      <h2>General Information</h2>

      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="08012345678" />
        </div>

        <button className="submit" onClick={submitInfo}>
          Submit
        </button>
        <button className="edit">Edit</button>
      </form>
    </section>
  );
}
