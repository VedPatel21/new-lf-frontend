import React, { useState } from 'react';
import '../styles/about.css';

const About = () => {
  const [showLeadership, setShowLeadership] = useState(false);

  const toggleLeadership = () => {
    setShowLeadership((prev) => !prev);
  };

  return (
    <article className="about-page" aria-label="About Little Flowers Primary School">
      <header className="about-header">
        <h2>About Little Flowers Primary School</h2>
      </header>

      <section className="history">
        <h3>Our History</h3>
        <p>
          Founded with a vision to nurture young minds and foster a love for learning, Little Flowers
          Primary School has grown from a small community initiative into a premier institution of
          education.
        </p>
        {/* Interactive Timeline */}
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-year">1990</span>
            <p>School established</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2000</span>
            <p>Expanded facilities</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2010</span>
            <p>Integrated digital learning</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2020</span>
            <p>Recognized for academic excellence</p>
          </div>
        </div>
      </section>

      <section className="vision-mission">
        <h3>Vision, Mission &amp; Values</h3>
        <p>
          <strong>Vision:</strong> To empower every child to reach their full potential.
        </p>
        <p>
          <strong>Mission:</strong> To provide a safe, inclusive, and stimulating learning environment.
        </p>
        <p>
          <strong>Values:</strong> Integrity, Compassion, Excellence, and Innovation.
        </p>
      </section>

      <section className="leadership">
        <h3>Leadership &amp; Faculty</h3>
        <p>
          Meet our dedicated team of educators and leaders who inspire excellence.
        </p>
        <div className={`leadership-profiles ${showLeadership ? 'expanded' : ''}`}>
          <div className="profile">
            <img src="/images/english.jpg" alt="Principal Jane Doe" />
            <h4>Principal Jane Doe</h4>
            <p>With over 20 years of experience, she leads with passion and vision.</p>
          </div>
          <div className="profile">
            <img src="/images/maths.jpg" alt="Vice Principal John Smith" />
            <h4>Vice Principal John Smith</h4>
            <p>Dedicated to fostering a nurturing environment.</p>
          </div>
          {/* Additional profiles can be added here */}
        </div>
        <button
          className="toggle-button"
          onClick={toggleLeadership}
          aria-expanded={showLeadership}
        >
          {showLeadership ? 'Show Less' : 'Read More'}
        </button>
      </section>

      {/* NEW: Awards & Recognition Section */}
      <section className="awards-recognition">
        <h3>Awards &amp; Recognition</h3>
        <p>
          Over the years, we’ve been honored with numerous accolades that celebrate our commitment
          to educational excellence and community impact.
        </p>
        <ul className="awards-list">
          <li>“Excellence in Teaching” Award (2019)</li>
          <li>“Top Community Outreach” Recognition (2021)</li>
          <li>“Green Campus Initiative” Certification (2022)</li>
        </ul>
      </section>

      <section className="campus-tour">
        <h3>Interactive Campus Tour</h3>
        <p>Explore our vibrant campus through our interactive tour.</p>
        <div className="campus-tour-embed">
          {/* Embed your virtual tour here */}
          <iframe
            title="Campus Tour"
            src="https://www.example.com/virtual-tour"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* NEW: Download Prospectus CTA */}
      <section className="download-prospectus">
        <h3>Download Our Prospectus</h3>
        <p>
          Want a detailed look at our programs, curriculum, and campus facilities? Download our
          official prospectus to learn more.
        </p>
        <a
          href="/documents/LittleFlowersProspectus.pdf"
          className="prospectus-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Prospectus
        </a>
      </section>
    </article>
  );
};

export default About;
