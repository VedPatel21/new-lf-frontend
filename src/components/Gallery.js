import React, { useState } from 'react';
import '../styles/gallery.css';

const Gallery = () => {
  const [activeAlbum, setActiveAlbum] = useState('Events');

  // For demonstration, we filter albums based on a simple state.
  const albums = {
    Events: [
      { src: './images/image1.jpg', alt: 'Event 1' },
      { src: './images/image2.jpg', alt: 'Event 2' }
    ],
    Academics: [
      { src: '/images/image4.jpg', alt: 'Academics 1' },
      { src: '/images/image3.jpg', alt: 'Academics 2' }
    ],
    Sports: [
      { src: '/images/image 8.jpg', alt: 'Sports 1' },
      { src: '/images/image 11.jpg', alt: 'Sports 2' }
    ]
  };

  return (
    <article className="gallery-page" aria-label="Gallery">
      <header className="gallery-page__header fade-in-up">
        <h2 className="gallery-page__title">Gallery</h2>
      </header>

      {/* Album Filter Tabs */}
      <section className="gallery-page__albums-filter fade-in-up">
        {Object.keys(albums).map((albumName) => (
          <button
            key={albumName}
            className={`album-filter-button ${activeAlbum === albumName ? 'active' : ''}`}
            onClick={() => setActiveAlbum(albumName)}
          >
            {albumName}
          </button>
        ))}
      </section>

      {/* Albums Section */}
      <section className="gallery-page__albums fade-in-up" aria-label="Photo Albums">
        <div className="gallery-page__album">
          <header className="gallery-page__album-header">
            <h4 className="gallery-page__album-title">{activeAlbum} Album</h4>
          </header>
          <div className="gallery-page__album-images">
            {albums[activeAlbum].map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="fade-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="gallery-page__videos fade-in-up" aria-label="Video Gallery">
        <header className="gallery-page__section-header">
          <h3 className="gallery-page__section-title">Video Gallery</h3>
        </header>
        <video controls className="gallery-page__video-player fade-in">
          <source src="/videos/tour.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </article>
  );
};

export default Gallery;
