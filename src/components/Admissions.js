import React, { useState } from 'react';
import '../styles/admissions.css';

const Admissions = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    childName: '',
    dateOfBirth: '',
    fullName: '',
    email: '',
    phone: '',
    documents: null,
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [eligibilityResult, setEligibilityResult] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Admission criteria based on date ranges for 2024-25 entry
  const criteria = [
    { grade: "Junior K.G.", start: new Date(2020, 5, 2), end: new Date(2021, 5, 1) },
    { grade: "Senior K.G.", start: new Date(2019, 5, 2), end: new Date(2020, 5, 1) },
    { grade: "Balvatika", start: new Date(2018, 5, 2), end: new Date(2019, 5, 1) },
    { grade: "1", start: new Date(2017, 5, 2), end: new Date(2018, 5, 1) },
    { grade: "2", start: new Date(2016, 5, 2), end: new Date(2017, 5, 1) },
    { grade: "3", start: new Date(2015, 5, 2), end: new Date(2016, 5, 1) },
    { grade: "4", start: new Date(2014, 5, 2), end: new Date(2015, 5, 1) },
    { grade: "5", start: new Date(2013, 5, 2), end: new Date(2014, 5, 1) },
    { grade: "6", start: new Date(2012, 5, 2), end: new Date(2013, 5, 1) },
    { grade: "7", start: new Date(2011, 5, 2), end: new Date(2012, 5, 1) },
    { grade: "8", start: new Date(2010, 5, 2), end: new Date(2011, 5, 1) },
  ];

  // Basic validation per step
  const validateStep = () => {
    let newErrors = {};
    if (currentStep === 1) {
      if (!formData.childName.trim()) newErrors.childName = 'Child Name is required.';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Child\'s Date of Birth is required.';
    }
    if (currentStep === 2) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid.';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    }
    // No mandatory validation on step 3 for now
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEligibilityCheck = () => {
    setEligibilityResult('');
    if (!formData.dateOfBirth) {
      setEligibilityResult('Please enter the child’s date of birth.');
      return;
    }
    const childDOB = new Date(formData.dateOfBirth);
    let found = false;
    for (let { grade, start, end } of criteria) {
      if (childDOB >= start && childDOB <= end) {
        setEligibilityResult(`Your child is eligible for admission in ${grade}.`);
        found = true;
        break;
      }
    }
    if (!found) {
      setEligibilityResult('Sorry, your child does not meet the admission criteria for the 2024-25 entry.');
    }
  };

  const handleNext = () => {
    const formErrors = validateStep();
    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      setCurrentStep((prev) => prev + 1);
    } else {
      setErrors(formErrors);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateStep();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted', formData);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          childName: '',
          dateOfBirth: '',
          fullName: '',
          email: '',
          phone: '',
          documents: null,
          message: ''
        });
        setSubmitted(false);
        setCurrentStep(1);
      }, 3000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <article className="admissions-page" aria-label="Admissions">
      <header>
        <h2>Admissions</h2>
      </header>

      <section className="process fade-in-up">
        <h3>Admission Process</h3>
        <ol>
          <li>Review eligibility criteria and required documents.</li>
          <li>Fill out the online application form below in multiple steps.</li>
          <li>Submit your application before the deadline.</li>
        </ol>
      </section>

      {/* Multi-step Progress Indicator */}
      <div className="progress-bar">
        <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>1</div>
        <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>2</div>
        <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>3</div>
      </div>

      {/* Step 1: Child Information & Eligibility Check */}
      {currentStep === 1 && (
        <section className="eligibility-check fade-in-up">
          <h3>Child Information</h3>
          <div className="form-group">
            <label htmlFor="childName">Child's Name:</label>
            <input
              type="text"
              name="childName"
              id="childName"
              value={formData.childName}
              onChange={handleChange}
            />
            {errors.childName && <span className="error">{errors.childName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Child's Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
          </div>
          <button type="button" onClick={handleEligibilityCheck} className="btn eligibility-btn">
            Check Eligibility
          </button>
          {eligibilityResult && <p className="eligibility-result">{eligibilityResult}</p>}
          <button type="button" onClick={handleNext} className="btn next-btn">
            Next
          </button>
        </section>
      )}

      {/* Step 2: Parent/Guardian Information */}
      {currentStep === 2 && (
        <section className="parent-info fade-in-up">
          <h3>Parent/Guardian Information</h3>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="step-navigation">
            <button type="button" onClick={handleBack} className="btn back-btn">
              Back
            </button>
            <button type="button" onClick={handleNext} className="btn next-btn">
              Next
            </button>
          </div>
        </section>
      )}

      {/* Step 3: Document Upload & Comments */}
      {currentStep === 3 && (
        <section className="documents-comments fade-in-up">
          <h3>Upload Documents &amp; Additional Comments</h3>
          <div className="form-group">
            <label htmlFor="documents">Upload Documents:</label>
            <input
              type="file"
              name="documents"
              id="documents"
              onChange={handleChange}
              accept=".pdf,.doc,.docx,.jpg,.png"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message/Comments:</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="step-navigation">
            <button type="button" onClick={handleBack} className="btn back-btn">
              Back
            </button>
            <button type="submit" onClick={handleSubmit} className="btn submit-btn">
              Submit Application
            </button>
          </div>
        </section>
      )}

      {submitted && (
        <p className="success-message fade-in">Your application has been submitted successfully!</p>
      )}

      <section className="faqs fade-in-up">
        <h3>FAQs</h3>
        <p>
          For any queries regarding admissions, please contact us at{' '}
          <a href="mailto:admissions@littleflowers.edu">admissions@littleflowers.edu</a>
        </p>
      </section>
    </article>
  );
};

export default Admissions;
