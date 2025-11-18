import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Calendar, Users, HandHeart, Share2, Megaphone } from "lucide-react";
import './GetInvolved.css'; // Import the CSS file
import "./Programs/programs.css";

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Plane,
      title: "Mission Trips",
      description: "Join us on the ground in South Sudan. Experience firsthand the impact of your support and help with hands-on projects.",
      details: "Travel dates available throughout the year. Includes accommodation, meals, and guidance from local staff."
    },
    {
      icon: Calendar,
      title: "Fundraising Events",
      description: "Host or attend fundraising events in your community. From charity runs to benefit dinners, there are many ways to raise awareness and funds.",
      details: "We provide resources and support to help you organize successful events."
    },
    {
      icon: Users,
      title: "Volunteer Programs",
      description: "Contribute your skills remotely or in person. We need help with marketing, administration, fundraising, and more.",
      details: "Flexible volunteer opportunities that fit your schedule and expertise."
    },
    {
      icon: HandHeart,
      title: "Corporate Partnerships",
      description: "Partner your business with our mission. Corporate sponsorships create lasting impact and demonstrate social responsibility.",
      details: "Customized partnership packages available for businesses of all sizes."
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Help us reach more supporters by sharing our mission on social media and with your networks.",
      details: "Follow us on social media and share our stories to amplify our impact."
    },
    {
      icon: Megaphone,
      title: "Become an Advocate",
      description: "Use your voice to advocate for children's rights and raise awareness about the challenges facing South Sudan.",
      details: "We provide resources and talking points to help you become an effective advocate."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="header-section">
          <div className="container mx-auto px-4 text-center">
            <h1 className="header-title">Get Involved</h1>
            <p className="header-description">
              There are many ways to support our mission beyond financial donations. 
              Your time, skills, and voice can make a tremendous difference.
            </p>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="opportunities-section py-16">
          <div className="container mx-auto px-4">
            <h2 className="opportunities-title">Ways to Get Involved</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {opportunities.map((opportunity, index) => (
                <ScrollAnimation key={index}>
                  <div className="opportunity-card">
                    <div className="icon-container">
                      <opportunity.icon className="icon" />
                    </div>
                    <h3 className="opportunity-title">{opportunity.title}</h3>
                    <p className="opportunity-description">{opportunity.description}</p>
                    <p className="opportunity-details">{opportunity.details}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>


        {/* CTA */}
        <ScrollAnimation>
          <section className="cta-section py-16 bg-accent text-accent-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="cta-title">Ready to Make an Impact?</h2>
              <p className="cta-description">
                Whether you can give your time, talent, or treasure, there's a place for you 
                in our mission to transform lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="donatess-button">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button className="donatess-button">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default GetInvolved;