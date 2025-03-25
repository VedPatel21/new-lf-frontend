import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import '../styles/news-events.css';

const eventsData = [
  {
    id: 1,
    title: 'School Reopens',
    date: '2025-04-01',
    category: 'Announcement',
    description:
      'After a short break, the school reopens for the new academic year. All students are expected to attend from April 1st.'
  },
  {
    id: 2,
    title: 'Annual Sports Day',
    date: '2025-05-15',
    category: 'Event',
    description:
      'Join us for an exciting day of sports competitions and activities. Parents are welcome to attend and cheer.'
  },
  {
    id: 3,
    title: 'Science Fair',
    date: '2025-06-10',
    category: 'Event',
    description:
      'Explore innovative science projects and experiments by our talented students. Don’t miss out on the demonstrations!'
  }
];

const ViewEvents = () => {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Filter and search logic
  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory = filter
      ? event.category.toLowerCase() === filter.toLowerCase()
      : true;
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle newsletter subscription (mock)
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <article className="view-events-page" aria-label="News and Events">
      {/* Page Header */}
      <header className="view-events-page__header fade-in-up">
        <h2 className="view-events-page__title">News &amp; Events</h2>
      </header>

      {/* Filter & Search Section */}
      <section className="view-events-page__controls fade-in-up">
        <div className="view-events-page__filter-group">
          <label
            htmlFor="filter"
            className="view-events-page__filter-label"
            aria-label="Filter events by category"
          >
            Category:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="view-events-page__filter-select"
          >
            <option value="">All</option>
            <option value="Announcement">Announcement</option>
            <option value="Event">Event</option>
          </select>
        </div>

        <div className="view-events-page__search-group">
          <label
            htmlFor="search"
            className="view-events-page__search-label"
            aria-label="Search events by title"
          >
            Search:
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search events..."
            className="view-events-page__search-input"
          />
        </div>
      </section>

      {/* Events List */}
      <section className="view-events-page__list fade-in-up">
        {filteredEvents.length === 0 ? (
          <p className="view-events-page__no-events">
            No events found. Please adjust your search or filter.
          </p>
        ) : (
          filteredEvents.map((event) => (
            <article key={event.id} className="view-events-page__item fade-in">
              <header className="view-events-page__item-header">
                <h3 className="view-events-page__item-title">{event.title}</h3>
                <span
                  className={`view-events-page__category-badge view-events-page__category-badge--${event.category.toLowerCase()}`}
                  aria-label={`Category: ${event.category}`}
                >
                  {event.category}
                </span>
              </header>
              <p className="view-events-page__item-date">
                <strong>Date:</strong> {format(parseISO(event.date), 'PPP')}
              </p>
              <p className="view-events-page__item-description">
                {event.description}
              </p>
            </article>
          ))
        )}
      </section>

      {/* Newsletter Section */}
      <section
        className="view-events-page__newsletter fade-in-up"
        aria-label="Newsletter Signup"
      >
        <header className="view-events-page__newsletter-header">
          <h3 className="view-events-page__newsletter-title">
            Newsletter Signup
          </h3>
        </header>
        {!subscribed ? (
          <form onSubmit={handleSubscribe} className="view-events-page__newsletter-form">
            <label
              htmlFor="newsletter-email"
              className="view-events-page__newsletter-label"
            >
              Email:
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="newsletter-email"
              required
              className="view-events-page__newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
            />
            <button type="submit" className="view-events-page__newsletter-button">
              Subscribe
            </button>
          </form>
        ) : (
          <p className="view-events-page__newsletter-thanks">
            Thank you for subscribing!
          </p>
        )}
      </section>
    </article>
  );
};

export default ViewEvents;
