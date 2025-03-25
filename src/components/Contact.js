import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Basic validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Contact form submitted:', formData);
      setSubmitted(true);
      // Clear form after a short delay (simulate submission)
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <article className="contact-page" aria-label="Contact Us">
      <header className="contact-page__header fade-in-up">
        <h2>Contact Us</h2>
      </header>

      <section className="contact-form-section fade-in-up" aria-label="Contact Form">
        {submitted && <p className="success-message">Your message has been sent successfully!</p>}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange}
              placeholder="Subject"
              required
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange}
              placeholder="Your message here..."
              required
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" className="btn submit-btn">Send Message</button>
        </form>
      </section>

      <section className="contact-details-section fade-in-up" aria-label="Contact Details">
        <div className="contact-details">
          <h3>Our Contact Information</h3>
          <p>
            <strong>Address:</strong> 123 Main Street, City, State, ZIP
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:1234567890">123-456-7890</a>
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@littleflowers.edu">info@littleflowers.edu</a>
          </p>
        </div>
        <div className="map-container fade-in-up">
          <iframe 
            title="Location Map" 
            src="https://www.google.com/maps/embed?pb=..." 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="social-media fade-in-up">
          <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </section>
    </article>
  );
};

export default Contact;
