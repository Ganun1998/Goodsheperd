// src/pages/Gallery.tsx
import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";

import "./Gallery.css";

/* Direct imports from src/assets/gallery/ */
import gallery1 from "../../assets/gallery/gallery1.jpg";
import gallery2 from "../../assets/gallery/gallery2.jpg";
import gallery3 from "../../assets/gallery/gallery3.jpg";
import gallery4 from "../../assets/gallery/gallery4.jpg";
import gallery5 from "../../assets/gallery/gallery5.jpg";
import gallery6 from "../../assets/gallery/gallery6.jpg";
import gallery7 from "../../assets/gallery/gallery7.jpg";
import gallery8 from "../../assets/gallery/gallery8.jpg";
import gallery9 from "../../assets/gallery/gallery9.jpg";
import gallery10 from "../../assets/gallery/gallery10.jpg";
import gallery11 from "../../assets/gallery/gallery11.jpg";
import gallery12 from "../../assets/gallery/gallery12.jpg";
import gallery13 from "../../assets/gallery/gallery13.jpg";
import gallery14 from "../../assets/gallery/gallery14.jpg";
import gallery15 from "../../assets/gallery/gallery15.jpg";
import gallery16 from "../../assets/gallery/gallery16.jpg";
import gallery17 from "../../assets/gallery/gallery17.jpg";
import gallery18 from "../../assets/gallery/gallery18.jpg";
import gallery19 from "../../assets/gallery/gallery19.jpg";
import gallery20 from "../../assets/gallery/gallery20.jpg";
import gallery21 from "../../assets/gallery/gallery21.jpg";
import gallery22 from "../../assets/gallery/gallery22.jpg";
import gallery23 from "../../assets/gallery/gallery23.jpg";

/* Put imports into an array to map over */
const galleryImages: string[] = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
];

const Gallery: React.FC = () => {
  return (
    <div className="gallery-page">
      <Navigation />

      <main>
        <section className="gallery-header">
          <ScrollAnimation>
            <h1 className="gallery-title">Our Gallery</h1>
          </ScrollAnimation>
        </section>

        <section className="gallery-section">
          <div className="gallery-container">
            <div className="gallery-grid">
              {galleryImages.map((img, index) => (
                <ScrollAnimation key={index}>
                  <div className="gallery-card">
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="gallery-img"
                      loading="lazy"
                    />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
