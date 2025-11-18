import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import water_well from "../../assets/water_well.jpg";
import "./programs.css"; // Import the CSS file

const WaterWell = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">

        {/* Hero Image */}
        <ScrollAnimation>
          <section className="waterwell-py-8">
            <div className="waterwell-container flex justify-center">
              <img
                src={water_well}
                alt="Water well providing clean water"
                className="w-full waterwell-max-w-4xl rounded-lg waterwell-shadow-xl waterwell-max-h-60"
              />
            </div>
          </section>
        </ScrollAnimation>

        {/* Program Details */}
        <ScrollAnimation>
          <section className="waterwell-py-16 waterwell-bg-secondary">
            <div className="waterwell-container">
              <div className="waterwell-max-w-4xl mx-auto">
                <h2 className="waterwell-text-3xl font-bold text-black waterwell-mb-6">About This Program</h2>
                <div className="space-y-6 waterwell-text-foreground">
                  
                  <h3 className="waterwell-text-2xl font-bold mb-4">Access to Safe Drinking Water</h3>
                  <p className="waterwell-text-lg leading-relaxed">
                    Our community has long suffered from a lack of access to safe drinking water. Every day, children and families must walk several miles to fetch water from open ponds and streams that are often contaminated. This arduous journey consumes time and energy that could otherwise be spent on education and better health.
                  </p>

                  <h3 className="waterwell-text-2xl font-bold mb-4">Health Risks from Contaminated Water</h3>
                  <p className="waterwell-text-lg leading-relaxed">
                    As a result, many people—especially young children—suffer from preventable waterborne diseases such as cholera, typhoid, diarrhea, and dysentery. These illnesses not only cause severe suffering but can also lead to the tragic loss of innocent lives. The lack of clean water compounds existing health challenges and diminishes the quality of life for the entire community.
                  </p>

                  <h3 className="waterwell-text-2xl font-bold mb-4">The Importance of Clean Water</h3>
                  <p className="waterwell-text-lg leading-relaxed">
                    Clean water is not only essential for good health but also for dignity and hope. Access to a reliable well means that children can dedicate more time to schooling instead of the exhausting task of walking long distances. Families will gain access to safe water for drinking and cooking, drastically reducing the spread of diseases and enabling healthier living standards.
                  </p>
                  
                  <h3 className="waterwell-text-2xl font-bold mb-4">A Basic Human Right</h3>
                  <p className="waterwell-text-lg leading-relaxed">
                    Clean water is a basic human right. Our efforts in drilling wells will bring life-giving water to the orphanage and the surrounding community, helping to ensure that everyone has access to this vital resource. This initiative is a step toward creating a sustainable future where health and hope can flourish.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Funding */}
        <ScrollAnimation>
          <section className="waterwell-py-16">
            <div className="waterwell-container">
              <div className="waterwell-max-w-4xl mx-auto waterwell-bg-card p-8 rounded-lg waterwell-shadow-lg">
                <h2 className="waterwell-text-3xl font-bold text-black mb-6">Funding Needed</h2>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="waterwell-text-5xl font-bold text-black">$7,040</span>
                  </div>
                  <p className="waterwell-text-foreground mt-6 text-black">
                    Your donation will drill wells to provide clean, safe drinking water, reducing waterborne diseases and improving overall health for the entire community. Funding will go directly toward well construction, ensuring long-term access to vital water resources for families and children.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <section className="waterwell-py-16 waterwell-text-accent-foreground">
            <div className="waterwell-container text-center">
              <h2 className="waterwell-text-3xl font-bold waterwell-mb-6">Support Clean Water</h2>
              <p className="waterwell-text-xl waterwell-mb-8 waterwell-max-w-2xl mx-auto">
                Give the gift of clean water. Transform lives and save futures.
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

export default WaterWell;