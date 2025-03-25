import React, { useState, useEffect } from 'react';
import {
  FaInfoCircle,
  FaBookOpen,
  FaCalendarAlt,
  FaStar,
  FaChalkboardTeacher,
  FaUsers,
  FaChild,
  FaMedal,
  FaCalendarPlus,
  FaTrophy,
} from 'react-icons/fa';
import '../styles/homepage.css';

/* Principal's Message (Replace with actual content) */
const principalMessage = {
  name: 'Dr. Jane Smith',
  photo: '/images/principle.jpg', // Replace with actual image
  message: `Welcome to Little Flowers Primary School! 
    Our mission is to nurture young minds through creativity, critical thinking, 
    and a supportive environment. We look forward to guiding your children on their path 
    to success and personal growth.`,
};

/* Teachers Array (Sample; Replace with actual data) 
   Now includes a shortBio field to demonstrate hover effect */
const teachers = [
  {
    name: 'Mr. John Doe',
    subject: 'Mathematics',
    photo: '/images/maths.jpg',
    shortBio: 'John has 10+ years of experience making math fun and accessible.',
  },
  {
    name: 'Ms. Emily Johnson',
    subject: 'English',
    photo: '/images/english.jpg',
    shortBio: 'Emily specializes in creative writing and literature studies.',
  },
  {
    name: 'Mrs. Sarah Williams',
    subject: 'Science',
    photo: '/images/science.jpg',
    shortBio: 'Sarah focuses on hands-on experiments and STEM integration.',
  },
];

/* Testimonials Array */
const testimonialsData = [
  {
    quote: "The school has transformed my child's learning experience!",
    author: 'Parent of 3rd Grader',
    rating: 5,
  },
  {
    quote: 'A nurturing environment that promotes growth.',
    author: 'Alumni',
    rating: 4,
  },
  {
    quote: 'My child looks forward to school every day!',
    author: 'Another Parent',
    rating: 5,
  },
];

/* Announcements Array */
const announcements = [
  'Admissions open for the new academic year!',
  'School closed on public holidays.',
  'Next parent-teacher conference on April 15th.',
];

/* Upcoming Events (Example) 
   Added a placeholder "Add to Calendar" link. You can replace with dynamic links. */
const upcomingEvents = [
  {
    title: 'Science Fair',
    date: 'May 10, 2025',
    description: 'Join us for a day of experiments and fun!',
    calendarLink:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Science+Fair&dates=20250510T090000Z/20250510T120000Z&details=Join+us+for+a+day+of+experiments+and+fun!&location=Little+Flowers+Primary+School',
  },
  {
    title: 'Sports Day',
    date: 'June 5, 2025',
    description: 'Cheer on our teams and enjoy healthy competition!',
    calendarLink:
      'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sports+Day&dates=20250605T090000Z/20250605T120000Z&details=Cheer+on+our+teams+and+enjoy+healthy+competition!&location=Little+Flowers+Primary+School',
  },
];

/* Key Stats (Example) */
const keyStats = [
  {
    icon: <FaChalkboardTeacher />,
    stat: '15:1',
    label: 'Student-Teacher Ratio',
  },
  {
    icon: <FaUsers />,
    stat: '98%',
    label: 'Parent Satisfaction',
  },
  {
    icon: <FaChild />,
    stat: '20+',
    label: 'Clubs & Activities',
  },
  {
    icon: <FaMedal />,
    stat: '5',
    label: 'Academic Awards',
  },
];

/* Awards & Achievements (New Section) */
const awardsData = [
  {
    title: 'Best Innovative School Award',
    year: '2023',
    description:
      'Recognized for implementing cutting-edge teaching methodologies and interactive classrooms.',
  },
  {
    title: 'Community Leadership Recognition',
    year: '2024',
    description:
      'Honored for outstanding involvement in community-based service and social responsibility programs.',
  },
];

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* Testimonial Slider */
  useEffect(() => {
    if (!isTestimonialPaused) {
      const testimonialInterval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
      }, 4000);
      return () => clearInterval(testimonialInterval);
    }
  }, [isTestimonialPaused]);

  /* Show Back to Top Button */
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="main-content" className="homepage" aria-label="Homepage">
      {/* SINGLE HERO BANNER */}
      <section className="homepage__hero-banner" aria-label="Hero Banner">
        <div className="hero-banner-image-container">
          {/* Replace with a static image OR a short looping video */}
          <img
            src="/images/image1.jpg"
            alt="Happy Students at Little Flowers"
            className="hero-banner-image"
            loading="lazy"
          />
          {/* Hero Overlay Text */}
          <div className="hero-banner-overlay">
            <h1 className="hero-banner-title">Welcome to Little Flowers Primary School</h1>
            <p className="hero-banner-subtitle">
              Empowering young minds through excellence in education.
            </p>
            <a href="/admissions" className="btn hero-banner-btn">Enroll Now</a>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION (OPTIONAL EXTRA SECTION) */}
      <section className="homepage__cta fade-in-up" aria-label="Quick Actions">
        <h2 className="homepage__cta-title">Ready to Explore?</h2>
        <p className="homepage__cta-text">
          Take a virtual tour, discover our latest news, or find out how to join us!
        </p>
        <div className="homepage__cta-buttons">
          <a href="/virtual-tour" className="btn">Virtual Tour</a>
          <a href="/news-events" className="btn">News &amp; Announcements</a>
          <a href="/contact" className="btn">Contact Us</a>
        </div>
      </section>

      {/* PRINCIPAL'S MESSAGE */}
      <section
        className="homepage__principal-message fade-in-up"
        aria-label="Message from Principal"
      >
        <h2 className="principal-title">A Note from Our Principal</h2>
        <div className="principal-content">
          <div className="principal-photo-container">
            <img
              src={principalMessage.photo}
              alt={`Principal ${principalMessage.name}`}
              className="principal-photo"
            />
          </div>
          <div className="principal-text">
            <p>{principalMessage.message}</p>
            <p className="principal-signature">— {principalMessage.name}</p>
          </div>
        </div>
      </section>

      {/* OPTIONAL VIDEO INTRO SECTION (New) */}
      <section className="homepage__video-intro fade-in-up" aria-label="Video Introduction">
        <h3 className="video-intro-title">Get to Know Us Better</h3>
        <p className="video-intro-text">
          Take a quick peek into our daily school life and see why Little Flowers stands out.
        </p>
        <div className="video-intro-embed">
          {/* Replace with your own hosted or YouTube embed link */}
          <iframe
            title="School Intro Video"
            src="https://www.youtube.com/embed/VIDEO_ID"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* QUICK NAVIGATION (with icons) */}
      <nav className="homepage__quick-nav fade-in-up" aria-label="Quick Navigation">
        <h3 className="homepage__quick-nav-title">Quick Links</h3>
        <ul className="homepage__quick-nav-list">
          <li>
            <a href="/about">
              <FaInfoCircle className="quick-nav-icon" /> About Us
            </a>
          </li>
          <li>
            <a href="/academics">
              <FaBookOpen className="quick-nav-icon" /> Academics
            </a>
          </li>
          <li>
            <a href="/news-events">
              <FaCalendarAlt className="quick-nav-icon" /> Events
            </a>
          </li>
        </ul>
      </nav>

      {/* WHY CHOOSE US + KEY STATS */}
      <section className="homepage__why-choose-us fade-in-up" aria-label="Why Choose Us">
        <h3 className="why-choose-us-title">Why Choose Us</h3>
        <div className="why-choose-us-content">
          <p>
            At Little Flowers, we pride ourselves on small class sizes, dedicated teachers,
            and a curriculum designed to inspire creativity and critical thinking. Our campus
            offers modern facilities, a nurturing environment, and a vibrant community that
            supports each student’s growth and success.
          </p>
        </div>

        {/* Key Stats / Infographics */}
        <div className="why-choose-us-stats">
          {keyStats.map((item, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-icon">{item.icon}</div>
              <h4 className="stat-value">{item.stat}</h4>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEET OUR TEACHERS */}
      <section className="homepage__teachers fade-in-up" aria-label="Meet Our Teachers">
        <h3 className="teachers-title">Meet Our Dedicated Teachers</h3>
        <div className="teachers-grid">
          {teachers.map((teacher, index) => (
            <div key={index} className="teacher-card">
              <div className="teacher-photo-container">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="teacher-photo"
                />
                {/* Hover overlay with shortBio */}
                <div className="teacher-hover-overlay">
                  <p>{teacher.shortBio}</p>
                </div>
              </div>
              <h4 className="teacher-name">{teacher.name}</h4>
              <p className="teacher-subject">{teacher.subject}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING EVENTS PREVIEW */}
      <section className="homepage__events fade-in-up" aria-label="Upcoming Events">
        <h3 className="events-title">Upcoming Events</h3>
        <div className="events-grid">
          {upcomingEvents.map((event, idx) => (
            <div key={idx} className="event-card">
              <h4>{event.title}</h4>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
              <div className="event-buttons">
                <a
                  href="/news-events"
                  className="btn btn-sm"
                  title="Learn more"
                >
                  Learn More
                </a>
                <a
                  href={event.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-calendar"
                  title="Add to Calendar"
                >
                  <FaCalendarPlus /> Add to Calendar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AWARDS & ACHIEVEMENTS (New Section) */}
      <section className="homepage__awards fade-in-up" aria-label="Awards & Achievements">
        <h3 className="awards-title">Awards &amp; Achievements</h3>
        <div className="awards-grid">
          {awardsData.map((award, idx) => (
            <div key={idx} className="award-card">
              <FaTrophy className="award-icon" />
              <h4>{award.title}</h4>
              <p className="award-year">({award.year})</p>
              <p className="award-description">{award.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section
        className="homepage__testimonials fade-in-up"
        aria-label="Community Testimonials"
        onMouseEnter={() => setIsTestimonialPaused(true)}
        onMouseLeave={() => setIsTestimonialPaused(false)}
      >
        <h3 className="homepage__testimonials-title">What Our Community Says</h3>
        <div className="homepage__testimonials-slider">
          {testimonialsData.map((testimonial, index) => (
            <blockquote
              key={index}
              className={`homepage__testimonial ${
                currentTestimonial === index ? 'active' : ''
              }`}
            >
              <p>“{testimonial.quote}”</p>
              <footer>
                <strong>– {testimonial.author}</strong>
                {testimonial.rating && (
                  <span className="homepage__testimonial-rating">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
        {/* Testimonials Controls (Dots) */}
        <div className="homepage__testimonials-controls">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`homepage__testimonials-dot ${
                currentTestimonial === index ? 'active' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ANNOUNCEMENTS TICKER */}
      <section className="homepage__announcements" aria-label="Latest Announcements">
        <div className="homepage__announcement-ticker">
          <div className="homepage__ticker-inner">
            {announcements.map((item, index) => (
              <p key={index} className="homepage__ticker-item">
                {item}
                <span className="homepage__ticker-separator"> | </span>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT OUR SCHOOL (New Section) */}
      <section className="homepage__support fade-in-up" aria-label="Support Our School">
        <h3 className="support-title">Support Our School</h3>
        <p className="support-text">
          Help us continue providing a top-quality education and a nurturing environment.
          Your contributions go a long way in enhancing facilities, resources, and opportunities
          for our students.
        </p>
        <a href="/donate" className="btn btn-support">Donate Now</a>
      </section>

      {/* BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          className="homepage__back-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
        >
          ↑
        </button>
      )}
    </main>
  );
};

export default Homepage;
