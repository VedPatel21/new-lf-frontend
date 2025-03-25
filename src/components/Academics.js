import React, { useState } from 'react';
import '../styles/academics.css';

const Academics = () => {
  const [activeMedium, setActiveMedium] = useState('Gujarati');

  return (
    <article className="academics-page" aria-label="Academics at Little Flowers Primary School">
      <header>
        <h2>Academics at Little Flowers Primary School</h2>
      </header>
      <section className="curriculum fade-in-up" aria-label="Curriculum Overview">
        <h3>Our Curriculum</h3>
        <p>
          We offer both Gujarati and English medium education, ensuring a comprehensive curriculum tailored to each student's needs.
        </p>
        <div className="tabs">
          <button 
            className={`tab-button ${activeMedium === 'Gujarati' ? 'active' : ''}`} 
            onClick={() => setActiveMedium('Gujarati')}
          >
            Gujarati Medium
          </button>
          <button 
            className={`tab-button ${activeMedium === 'English' ? 'active' : ''}`} 
            onClick={() => setActiveMedium('English')}
          >
            English Medium
          </button>
        </div>
        <div className="tab-content fade-in-up">
          {activeMedium === 'Gujarati' && (
            <div className="medium-detail">
              <h4>Gujarati Medium</h4>
              <p>
                Our Gujarati medium curriculum integrates local culture with modern teaching methodologies to create a balanced learning experience.
              </p>
            </div>
          )}
          {activeMedium === 'English' && (
            <div className="medium-detail">
              <h4>English Medium</h4>
              <p>
                The English medium curriculum is designed to foster critical thinking, creativity, and global awareness while maintaining core academic excellence.
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="teaching-methods fade-in-up" aria-label="Teaching Methodologies">
        <h3>Teaching Methodologies</h3>
        <p>
          We employ innovative teaching methods, personalized attention, and modern classroom technologies to enhance learning. Our educators are trained in the latest pedagogical techniques to ensure every child thrives.
        </p>
      </section>
      <section className="academic-calendar fade-in-up" aria-label="Academic Calendar">
        <h3>Academic Calendar</h3>
        <p>
          Stay updated with important dates and events. You can download our academic calendar or add it directly to your personal calendar.
        </p>
        <div className="calendar-actions">
          <a className="download-btn" href="/downloads/academic-calendar.pdf" target="_blank" rel="noopener noreferrer">
            Download Calendar
          </a>
          <a className="add-calendar-btn" href="/calendar.ics" target="_blank" rel="noopener noreferrer">
            Add to Calendar
          </a>
        </div>
      </section>
    </article>
  );
};

export default Academics;
