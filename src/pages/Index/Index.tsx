import "./Index.css";
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import HeroCarousel from "../../components/HeroCarousel";
import ScrollAnimation from "../../components/ScrollAnimation";
import AnimatedNumber from "../../components/AnimatedNumber";
import { Button } from "../../components/ui/button";
import { Heart, Clock, Star, BookOpen } from "lucide-react";
import feeding_program from "../../assets/feeding_program.jpg";
import education from "../../assets/education.jpg";
import construction_program from "../../assets/construction_program.jpg";
import water_well from "../../assets/water_well.jpg";
import clothing_donate from "../../assets/clothing_donate.jpg";
import mission_1 from "../../assets/mission_1.jpg";
import clinic_image from "../../assets/clinic_image.jpg";
import child_mission from "../../assets/child_mission.jpg";

const Index = () => {

  const programs = [
    {
      image: feeding_program,
      title: "Daily Feeding",
      description: "Providing nutritious meals to 72 children every day, ensuring no child goes to bed hungry.",
      link: "/programs/daily-feeding"
    },
    {
      image: education,
      title: "Primary Education",
      description: "Offering basic education with a focus on science, social studies, reading, and mathematics.",
      link: "/programs/primary-education"
    },
    {
      image: clinic_image,
      title: "Medical Clinic",
      description: "Essential healthcare services to treat malaria, typhoid, and other preventable diseases.",
      link: "/programs/medical-clinic"
    },
    {
      image: construction_program,
      title: "Building Construction",
      description: "Constructing safe dormitories, classrooms, and facilities for children to live and learn.",
      link: "/programs/building-construction"
    },
    {
      image: water_well,
      title: "Water Well Drilling",
      description: "Providing access to clean, safe drinking water to reduce waterborne diseases.",
      link: "/programs/water-well"
    },
    {
      image: clothing_donate,
      title: "Clothing Donations",
      description: "Providing clothes, shoes, and educational materials to children in need.",
      link: "/programs/clothing-donations"
    }
  ];


  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="layout-container">
      <Navigation />

      <main className="main-content">
        <HeroCarousel />

        <ScrollAnimation>
          <div className="support-mission">
            <img src={mission_1} alt="Support Mission" className="mission-image" />
            <div className="mission-content">
              <h2 className="mission-title">We Help children In Need in Jikow, South Sudan</h2>
              <p className="mission-text">
                Sponsoring a child through Good Shepherd Orphanage Project Inc:
                Runs a sponsorship program that connects orphanages with sponsoring families in the United States.
                Through this program, many of our orphanages can provide at least three meals per day for the children.
                In addition to nutritious meals, the program also supports access to primary education, immunizations, and clear water.
                We are deeply grateful for your support in helping create brighter futures and lasting opportunities for these children.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="support-missions">
            <div className="missions-content">
              <h2 className="missions-title">Support Our Mission</h2>
              <p className="missions-text">
                Every project we undertake is built on sustainability — designed to create long-lasting change rather than temporary fixes.
                Through your support, we aim to reach more children, inspire hope, and create a world where every child has the opportunity to live, learn, and lead.
              </p>
            </div>
            <img src={child_mission} alt="Support Mission" className="missions-image" />
          </div>
        </ScrollAnimation>


        <ScrollAnimation>
          <section className="impact-section">
            <div className="container">
              <h2 className="impact-title">Our Impact</h2>
              <div className="grid">
                <div className="impact-card">
                  <div className="icon-container">
                    <Heart className="icon" />
                  </div>
                  <AnimatedNumber value={72} />  {/* Children Fed Daily */}
                  <p className="impact-text">Children Fed Daily</p>
                </div>
                <div className="impact-card">
                  <div className="icon-container">
                    <BookOpen className="icon" />
                  </div>
                  <AnimatedNumber value={100} suffix="+" />  {/* Students Educated */}
                  <p className="impact-text">Students Educated</p>
                </div>
                <div className="impact-card">
                  <div className="icon-container">
                    <Clock className="icon" />
                  </div>
                  <AnimatedNumber value={13} />  {/* Years of Service */}
                  <p className="impact-text">Years of Service</p>
                </div>
                <div className="impact-card">
                  <div className="icon-container">
                    <Star className="icon" />
                  </div>
                  <AnimatedNumber value={98} suffix="%" />  {/* Satisfaction */}
                  <p className="impact-text">Satisfaction</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="programs-section">
            <div className="container">
              <h2 className="programs-title">Our Programs</h2>
              <p className="programs-description">
                The Good Shepherd Orphanage Project Inc in South Sudan is dedicated to building healthy, nourished,
                educated, and hope-filled communities in the rural area of Jikow. Our integrated programs
                serve as strong building blocks that empower both our orphanage and the surrounding
                communities to achieve sustainable success.
              </p>
              <div className="programs-container" ref={scrollRef}>
                {programs.map((program, index) => (
                  <ScrollAnimation key={index}>
                    <div className="program-card">
                      <img src={program.image} alt={program.title} className="program-image" />
                      <div className="program-content">
                        <h3 className="program-title">{program.title}</h3>
                        <p className="program-text">{program.description}</p>
                        <Link to={program.link}>
                          <Button className="program-button">Learn More</Button>
                        </Link>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              <button className="arrow arrow-left" onClick={scrollLeft}>◀</button>
              <button className="arrow arrow-right" onClick={scrollRight}>▶</button>

            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="donate-section">
            <div className="donate-wrapper">

              {/* LEFT — DONATION CARD */}
              <div className="donation-card">
                <h3 className="donation-title">Choose Amount</h3>

                <div className="amount-grid">
                  <button className="amount-btn">$25</button>
                  <button className="amount-btn">$50</button>
                  <button className="amount-btn">$100</button>
                </div>

                <Link to="/donate">
                  <button className="donate-submit">Proceed to Donate</button>
                </Link>
              </div>

              {/* RIGHT — TEXT + BUTTONS */}
              <div className="donate-text">
                <h2 className="donate-title">Make a Difference Today</h2>

                <p className="donate-description">
                  Your support can transform the life of a child in South Sudan.
                  Every contribution helps provide food, education, and hope.
                </p>

                <div className="button-group">
                  <Link to="/donate">
                    <button className="donates-button">Donate Now</button>
                  </Link>
                  <Link to="/contact">
                    <button className="programs-button">Contact Us</button>
                  </Link>
                </div>
              </div>

            </div>
          </section>



        </ScrollAnimation>

        <ScrollAnimation>
          <section className="video-content">
            <div className="video-text-container">
              <div className="video-placeholder">
                <iframe
                  className="video-embed"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="Our Story"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-description">
                <p className="video-description-text">
                  Experience the impact of Good Shepherd Orphanage through the eyes of the children,
                  staff, and community members. Our documentary showcases the daily life at the orphanage,
                  the challenges we face, and the incredible transformation happening in Jikow, South Sudan.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

      </main>

      <Footer />
    </div>
  );
};

export default Index;
