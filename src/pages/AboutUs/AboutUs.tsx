import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Heart, Users } from "lucide-react";
import './AboutUs.css';
import about from '../../assets/about.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Navigation />

      <main className="about-us-main">
        {/* Hero Section */}
        <section className="about-us-hero">
          <div className="about-us-hero-content">
            <ScrollAnimation>
              <h1 className="about-us-hero-title">About Us</h1>
              <p className="about-us-hero-text">
                Discover the mission and vision of the Good Shepherd Orphanage, where we strive to create a nurturing environment for vulnerable children and empower communities in South Sudan.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* About Us Description */}
        <ScrollAnimation>
          <section className="about-us-section">
            <div className="about-us-content">
              <div className="about-us-grid">
                <div className="about-us-image">
                  <img
                    src={about}
                    alt="Children at Good Shepherd Orphanage"
                    className="about-us-img"
                  />
                </div>
                <div className="about-us-description">
                  <h1 className="about-us-title">About Us</h1>
                  <p className="about-us-text">
                    Good Shepherd Orphanage Project, Inc is a registered 501©(3) nonprofit organization founded in 2012 by
                    Dukan Diew, a South Sudanese refugee and a devoted Christian now living in Des Moines, Iowa.
                    It is located in South Sudan and is dedicated to building healthy, nourished,
                    educated, and hope-filled communities in the rural area of Jikow, South Sudan.
                  </p>
                  <p className="about-us-text">
                    Our integrated programs serve as a strong building block that empowers both our orphanage
                    and the surrounding communities to achieve sustainable success. Through these initiatives,
                    Good Shepherd aims to be a catalyst for lasting transformation. We believe that our devoted
                    team and the vibrant communities we serve can accomplish remarkable things – working together
                    to inspire, uplift, and realize a brighter future for all.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Mission & Vision */}
        <ScrollAnimation>
          <section className="about-us-mission-vision">
            <div className="about-us-content">
              <div className="about-us-grid">
                <div className="about-us-card">
                  <h3 className="about-us-card-title">
                    <Heart size={24} className="icon" /> Our Mission
                  </h3>
                  <p className="about-us-card-text">
                    To provide comprehensive care, education, and support to orphaned and
                    vulnerable children in South Sudan, empowering them to break the cycle
                    of poverty and become leaders in their communities.
                  </p>
                </div>
                <div className="about-us-card">
                  <h3 className="about-us-card-title">
                    <Users size={24} className="icon" /> Our Vision
                  </h3>
                  <p className="about-us-card-text">
                    A South Sudan where every child has access to education, healthcare,
                    and opportunities to reach their full potential, regardless of their
                    circumstances.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Statement of Need */}
        <ScrollAnimation>
          <section className="about-us-statement">
            <div className="about-us-content">
              <h2 className="about-us-title">Statement of Need</h2>
              <ScrollAnimation>
                <p className="about-us-text">
                  South Sudan continues to face significant humanitarian challenges due to years of conflict, displacement,
                  poverty, and inadequate social services.
                  These hardships have left thousands of children orphanage, homeless, and without access to basic needs such as shelter,
                  education, and healthcare.
                  In Jikow, many orphaned and vulnerable children live in deteriorating mud huts or rely on the generosity of
                  relatives and neighbors who often lack the resources to support them.
                  Others sleep in unsafe temporary shelters, leaving them exposed to illness, hunger, and exploitation.
                </p>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="about-us-text">
                  Currently, the children under our care come to our center each morning to receive meals – breakfast and lunch
                   – and participate in learning and worship activities.
                  However, after lunch, they must return to unsafe and unstable living conditions,
                  making it difficult for them to study and grow in a nurturing environment.
                </p>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="about-us-text">
                  To address this urgent need, we seek to construct a safe, durable, and permanent home that will
                  serve as both a residence and a center for education, worship, and holistic care.
                  This facility will provide proper shelter, classroom, sanitation facilities,
                  and a worship space where children can thrive spiritually, emotionally, and academically.
                </p>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="about-us-text">
                  We are blessed to already own five acres of land designated for this purpose.
                  With the support of our partners, we aim to create a loving,
                  stable environment where children can live, learn, and grow under the guidance of dedicated caregivers and teachers.
                </p>
              </ScrollAnimation>
            </div>
          </section>
        </ScrollAnimation>

      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
