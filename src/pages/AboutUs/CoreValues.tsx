import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { BookOpen, Users, Heart, MessageSquare, Handshake, Award } from "lucide-react";
import './AboutUs.css'; // Import the CSS file

const CoreValues = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Education",
      description: "We believe that children, especially girls, have a right to quality education and basic healthcare."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We use our resources of time, talent, and money responsibly and strategically."
    },
    {
      icon: Heart,
      title: "Respect",
      description: "We value the South Sudanese culture and way of life."
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "We honestly and openly share our ideas and organizational decision-making."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We foster teamwork and value relationships with our volunteers, donors, partners, and friends as we work to achieve our goals in partnership with the people of South Sudan."
    },
    {
      icon: Users,
      title: "A Passion to Serve",
      description: "We empower people with opportunities to help children and others in need. We strengthen and grow the organization in a positive and constructive way."
    }
  ];

  return (
    <div className="core-values-container">
      <Navigation />
      
      <main className="core-values-main">
        <section className="core-values-hero">
          <div className="core-values-hero-content">
            <h1 className="core-values-title">Our Core Values</h1>
            <p className="core-values-subtitle">
              The principles that guide our work and shape our future
            </p>
          </div>
        </section>

        <ScrollAnimation>
          <section className="core-values-description">
            <div className="core-values-content">
              <div className="core-values-intro">
                <p className="core-values-intro-text">
                  Core Values guide us in the work we do. They are the foundations upon which our future, 
                  both in South Sudan and the US, is built. Good Shepherd Orphanage Project, Inc for South 
                  Sudan subscribes to the following core values:
                </p>
              </div>

              <div className="core-values-grid">
                {values.map((value, index) => (
                  <div key={index} className="core-value-card">
                    <div className="core-value-icon">
                      <value.icon className="icon" />
                    </div>
                    <h3 className="core-value-title">{value.title}</h3>
                    <p className="core-value-description">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default CoreValues;