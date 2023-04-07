import "./FormStyle.css";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // console.log(name);c 
  // console.log(email);
  // console.log(subject);
  // console.log(message);

  const sendEmail = async (e) => {
    // e.preventDefault();
    
    const res = await fetch("https://react-portfolio-94614-default-rtdb.firebaseio.com/contactform.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      }
    );
    console.log(res);
  };

  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required 
        />

        <label>Subject</label>
        <input
          type="text"
          placeholder="Enter Subject"
          onChange={(e) => setSubject(e.target.value)}
        />

        <label>Message</label>
        <textarea
          rows="6"
          placeholder="type your message here"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="btn" onClick={sendEmail}>
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;
