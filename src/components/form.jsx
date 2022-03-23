function Form() {
  return (
    <form>
      <div className="input">
        <input type="text" placeholder="Enter your email address" />

        <img src="images/icon-error.svg" alt="error icon" className="error" />
        <span>Whoops, make sure it's an email</span>
      </div>

      <button className="btn btn--secondary">Contact Us</button>
    </form>
  );
}

export default Form;