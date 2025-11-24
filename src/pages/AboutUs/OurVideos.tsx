import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import video1 from "../../assets/video1.jpg"
import video2 from "../../assets/video2.jpg"

const OurVideo = () => {
  return (
    <div className="video-container">
      <Navigation />

      <main className="video-main">
        <section className="video-hero">
          <div className="video-hero-content">
            <h1 className="video-title">Our Video</h1>
            <p className="video-subtitle">
              Watch our story unfold and meet the children whose lives are being transformed.
            </p>
          </div>
        </section>

        <ScrollAnimation>
          <section className="video-content">

            {/* Row 1: Two images */}
            <div className="video-row">
              <a
                href="https://www.facebook.com/share/v/1A9e39xxEn/"
                target="_blank"
                rel="noopener noreferrer"
                className="video-image-link"
              >
                <img src={video1} alt="Facebook Reel Preview 1" className="video-thumb" />
              </a>

              <a
                href="https://www.facebook.com/share/v/1A9e39xxEn/"
                target="_blank"
                rel="noopener noreferrer"
                className="video-image-link"
              >
                <img src={video2} alt="Facebook Reel Preview 2" className="video-thumb" />
              </a>
            </div>

            {/* Row 2: Description */}
            <div className="video-description">
              <p className="video-description-text">
                Experience the impact of Good Shepherd Orphanage Project, Inc through
                the eyes of the children, staff, and community members. Our documentary
                showcases the daily life at the orphanage, the challenges we face, and
                the incredible transformation happening in Jikow, South Sudan.
              </p>
            </div>

          </section>
        </ScrollAnimation>

      </main>

      <Footer />
    </div>
  );
};

export default OurVideo;