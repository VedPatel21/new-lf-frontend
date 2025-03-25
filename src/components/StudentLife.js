import React from 'react';
import '../styles/student-life.css';

const StudentLife = () => {
  return (
    <article className="student-life-page" aria-label="Student Life & Extra-Curricular">
      <header className="student-life-page__header fade-in-up">
        <h2 className="student-life-page__title">Student Life &amp; Extra-Curricular</h2>
      </header>
      <section className="student-life-page__section student-life-page__section--clubs fade-in-up">
        <header className="student-life-page__section-header">
          <h3 className="student-life-page__section-title">Clubs</h3>
        </header>
        <p className="student-life-page__text">
          We have a variety of clubs ranging from art to science, music, and more. Explore our interactive club directory for more details.
        </p>
      </section>
      <section className="student-life-page__section student-life-page__section--sports fade-in-up">
        <header className="student-life-page__section-header">
          <h3 className="student-life-page__section-title">Sports</h3>
        </header>
        <p className="student-life-page__text">
          Our sports teams excel in local and regional competitions. Check out our live score updates and game schedules.
        </p>
      </section>
      <section className="student-life-page__section student-life-page__section--cultural fade-in-up">
        <header className="student-life-page__section-header">
          <h3 className="student-life-page__section-title">Cultural Events</h3>
        </header>
        <p className="student-life-page__text">
          Experience vibrant cultural celebrations and performances. Join our upcoming festivals and art exhibitions.
        </p>
      </section>
      <section className="student-life-page__section student-life-page__section--achievements fade-in-up">
        <header className="student-life-page__section-header">
          <h3 className="student-life-page__section-title">Student Achievements</h3>
        </header>
        <p className="student-life-page__text">
          Our students have earned accolades in academics, sports, and arts. Read inspiring stories and view award galleries.
        </p>
      </section>
    </article>
  );
};

export default StudentLife;
