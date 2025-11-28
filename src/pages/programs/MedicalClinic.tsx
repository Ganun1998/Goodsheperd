import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import clinic_image from "../../assets/clinic_image.jpg";
import "./programs.css"; // Import the CSS file

const MedicalClinic = () => {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Image */}
        <ScrollAnimation>
          <section className="medical-py-8">
            <div className="medical-container">
              <img 
                src={clinic_image} 
                alt="Medical clinic providing care"
                className="w-full medical-max-w-4xl mx-auto rounded-lg medical-shadow-xl max-h-60"
              />
            </div>
          </section>
        </ScrollAnimation>

        {/* Program Details */}
        <ScrollAnimation>
          <section className="medical-py-16 medical-bg-secondary">
            <div className="medical-container">
              <div className="medical-max-w-4xl mx-auto">
                <h2 className="medical-text-3xl font-bold medical-text-accent medical-mb-6">About This Program</h2>
                <div className="space-y-6 medical-text-foreground">
                  <h3 className="medical-text-2xl font-bold mb-4">The Importance of Health:</h3>
                  <p className="medical-text-lg leading-relaxed">
                    Good health is essential to every child's long-term success and development. In remote and impoverished rural areas, children who fall ill with preventable diseases such as malaria often face life-threatening risks. Even minor ailments can escalate quickly without proper medical care.
                  </p>

                  <h3 className="medical-text-2xl font-bold mb-4">Historical Support from USAID:</h3>
                  <p className="medical-text-lg leading-relaxed">
                    USAID has provided essential medical supplies, vaccines, and treatment for widespread diseases, significantly reducing mortality rates and improving overall community health.
                  </p>

                  <h3 className="medical-text-2xl font-bold mb-4">Impact of the USAID Program Discontinuation:</h3>
                  <p className="medical-text-lg leading-relaxed">
                    Since the program’s discontinuation, children face severe risks due to lack of local medical facilities, forcing families to travel long distances for care.
                  </p>

                  <h3 className="medical-text-2xl font-bold mb-4">The Urgent Need for a Healthcare Facility:</h3>
                  <p className="medical-text-lg leading-relaxed">
                    Building a local healthcare facility will provide immediate medical attention, preventative care, and vaccinations, saving lives and improving community wellbeing.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Funding */}
        <ScrollAnimation>
          <section className="medical-py-16">
            <div className="medical-container">
              <div className="medical-max-w-4xl mx-auto medical-bg-card p-8 rounded-lg medical-shadow-lg">
                <h2 className="medical-text-3xl font-bold medical-text-accent medical-mb-6">Funding Needed</h2>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="medical-text-5xl font-bold medical-text-accent">$10,000</span>
                  </div>
                  <p className="medical-text-foreground mt-6">
                    Your donation will support healthcare services including routine check-ups, vaccinations, and treatment for common illnesses, ensuring children receive the medical care they need.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <section className="medical-py-16 medical-text-accent-foreground">
            <div className="medical-container text-center">
              <h2 className="medical-text-3xl font-bold medical-mb-6">Support Healthcare</h2>
              <p className="medical-text-xl medical-mb-8 medical-max-w-2xl mx-auto">
                Your contribution can save lives. Help us bring healthcare to those who need it most.
              </p>
              <Link to="/donate">
                <Button className="button-default">
                  Donate Now
                </Button>
              </Link>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default MedicalClinic;
