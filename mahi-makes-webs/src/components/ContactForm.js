import React, { useState } from "react";
import "../css/Contact.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please use a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.status === 201) {
        setResponseMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again later.");
    }

    setShowPopup(true);
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="container con-container" id="contact">
      <h2 className="heading">Contact Us</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label className="label">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea"
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <div className="button-container">
          <button type="submit" className="button">
            Send Message
          </button>
        </div>
      </form>


      <hr className="horizontal-bar" />


      <p className="reach-text">Or you can reach me on:</p>
      <div className="social-icons">

        <a href="https://www.linkedin.com/in/maheen-ali-73aa2427b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="social-icon" />
        </a>

        <a href="mailto:maheenali.dev@gmail.com" rel="noopener noreferrer">
          <FaEnvelope size={30} className="social-icon" />
        </a>
      </div>


      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h4>{responseMessage.startsWith("Failed") ? "Error" : "Success"}</h4>
            <p>{responseMessage}</p>
            <button onClick={handleClosePopup} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
