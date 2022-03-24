import React, { useState } from 'react';

function Form() {
  const [error,setError] = useState(false)
  const [email,setEmail] = useState("")

  const checkEmail = (event) => {
    event.preventDefault()
    const validator = /^[a-zA-Z0-9#$^&*{}?-]+(\.[a-zA-Z0-9#$^&*{}?-]+)*@[a-zA-Z0-9#$^&*{}?-]+(\.[a-zA-Z0-9#$^&*{}?-]+)*\.[a-z]+$/
    if (!validator.test(email)) {
      setError(true)
      return
    }
    setError(false)
  }

  return (
    <form>
      <div className={`input ${error ? "input--error" : ""}`}>
        <input onInput={event => setEmail(event.target.value)} type="text" placeholder="Enter your email address" />

        <img src="images/icon-error.svg" alt="error icon" />
        <span>Whoops, make sure it's an email</span>
      </div>

      <button onClick={checkEmail} className="btn btn--secondary">Contact Us</button>
    </form>
  );
}

export default Form;