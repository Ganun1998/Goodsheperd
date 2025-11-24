import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import construction_program from "../../assets/construction_program.jpg";
import "./programs.css"; // Import the CSS file

const PrimaryEducation = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Image */}
        <ScrollAnimation>
          <section className="primary-py-8">
            <div className="primary-container">
              <img
                src={construction_program}
                alt="Children learning in classroom"
                className="w-full primary-max-w-4xl mx-auto rounded-lg primary-shadow-xl max-h-60"
              />
            </div>
          </section>
        </ScrollAnimation>

        {/* Program Details */}
        <ScrollAnimation>
          <section className="primary-py-16 primary-bg-secondary">
            <div className="primary-container">
              <div className="primary-max-w-4xl mx-auto">
                <h2 className="primary-text-3xl font-bold primary-text-accent primary-mb-6">
                  About This Program
                </h2>

                <div className="space-y-6 primary-text-foreground">
                  <h3 className="primary-text-2xl font-bold mb-4">
                    Current Living Conditions
                  </h3>
                  <p className="primary-text-lg leading-relaxed">
                    The existing structure at the Good Shepherd Orphanage Project,Inc is a small hut constructed from mud
                    and sticks. This temporary shelter is severely deteriorating
                    and poses significant safety risks. During rainy seasons, the
                    hut leaks, creating an uncomfortable and unhealthy living
                    environment. Such substandard conditions hinder not only the
                    children's safety but also their overall wellbeing.
                  </p>

                  <h3 className="primary-text-2xl font-bold mb-4">
                    Need for Proper Facilities
                  </h3>
                  <p className="primary-text-lg leading-relaxed">
                    There is an immediate need for a suitable building that can
                    provide a safe and functional environment for the children.
                    Currently, there are no designated classrooms, desks, or
                    proper sanitation facilities like latrines. To ensure the
                    children's safety, comfort, and educational growth, the
                    construction of a sturdy facility is essential.
                  </p>

                  <h3 className="primary-text-2xl font-bold mb-4">
                    Long-Term Impact
                  </h3>
                  <p className="primary-text-lg leading-relaxed">
                    Constructing a safe and durable building will significantly
                    impact the lives of these children. It will provide them with
                    a stable home and an environment conducive to learning and
                    personal development. By improving living conditions, we not
                    only enhance their daily lives but also promote their dignity
                    and self-worth.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Funding */}
        <ScrollAnimation>
          <section className="primary-py-16">
            <div className="primary-container">
              <div className="primary-max-w-4xl mx-auto primary-bg-card p-8 rounded-lg primary-shadow-lg">
                <h2 className="primary-text-3xl font-bold primary-text-accent primary-mb-6">
                  Funding Needed
                </h2>

                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="primary-text-5xl font-bold primary-text-accent">
                      $170,000
                    </span>
                  </div>

                  <p className="primary-text-foreground mt-6">
                    Your donation will construct safe dormitories, classrooms,
                    and facilities where children can live, learn, and play in
                    dignity and security. Durable materials will ensure these
                    structures last for years to come.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <section className="primary-py-16 primary-text-accent-foreground">
            <div className="primary-container text-center">
              <h2 className="primary-text-3xl font-bold primary-mb-6">
                Support Construction
              </h2>

              <p className="primary-text-xl primary-mb-8 primary-max-w-2xl mx-auto">
                Help us build safe spaces where children can thrive. Every
                contribution builds hope.
              </p>

              <Link to="/donate">
                {/* ✔ Removed variant & size */}
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

export default PrimaryEducation;
