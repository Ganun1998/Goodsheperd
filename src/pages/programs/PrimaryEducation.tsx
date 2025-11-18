
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import education_program from "../../assets/education_program.jpg";
import "./programs.css"; // Import the CSS file

const PrimaryEducation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">

        {/* Hero Image */}
        <ScrollAnimation>
          <section className="primary-py-8">
            <div className="primary-container">
              <img
                src={education_program}
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
                <h2 className="primary-text-3xl font-bold primary-text-accent primary-mb-6">About This Program</h2>
                <div className="space-y-6 primary-text-foreground">

                  <h3 className="primary-text-2xl font-bold mb-4">Focus on Basic Education</h3>
                  <p className="primary-text-lg leading-relaxed">
                    The Good Shepherd Orphanage provides basic education for our children, focusing on early grade levels. Our goal is to emphasize subjects such as science, social studies, reading, and mathematics. However, due to limited funding, we are currently unable to offer a full curriculum. We strive to provide quality education that prepares students for higher education.
                  </p>

                  <h3 className="primary-text-2xl font-bold mb-4">Limited Resources for Teachers</h3>
                  <p className="primary-text-lg leading-relaxed">
                    In many rural areas of Africa, teachers have access to very few learning materials—often just a chalkboard and a piece of chalk, and sometimes not even that. The children are divided into two groups, and the teachers write lessons, draw diagrams, and demonstrate math or reading exercises entirely on the board. Because textbooks are scarce, teachers rely heavily on storytelling, repetition, songs, and memorization to help students learn. Those who have notebooks copy the lessons carefully by hand.
                  </p>

                  <h3 className="primary-text-2xl font-bold mb-4">Innovative Teaching Methods</h3>
                  <p className="primary-text-lg leading-relaxed">
                    When teaching subjects like life science or geography, teachers often use local materials—such as stones, sticks, leaves, or sand—to illustrate their lessons. With only two teachers available, older students frequently assist the younger ones through a system known as “peer teaching.” Classes are held for about five hours each day at the same center where the children receive their daily meals.
                  </p>

                  <h3 className="primary-text-2xl font-bold mb-4">Enhancing Learning Conditions</h3>
                  <p className="primary-text-lg leading-relaxed">
                    Education is the foundation for breaking the cycle of poverty. Through the Good Shepherd Orphanage Project, Inc., we hope to equip this classroom with basic educational materials such as textbooks, notebooks, chalkboards, pencils, tablets for each student, and visual aids to improve learning conditions. Additionally, we would like to bring on more teachers to better serve these children and help them develop critical thinking skills, enabling them to qualify for scholarships and pursue higher education.
                  </p>

                  <h3 className="primary-text-2xl font-bold mb-4">Building Futures Through Education</h3>
                  <p className="primary-text-lg leading-relaxed">
                    We believe that providing quality primary education will help children build bright futures and become leaders in their communities.
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
                <h2 className="primary-text-3xl font-bold primary-text-accent primary-mb-6">Funding Needed</h2>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="primary-text-5xl font-bold primary-text-accent">$10,000</span>
                  </div>
                  <p className="primary-text-foreground mt-6">
                    Your donation will fund basic education including teachers, books, supplies, and
                    classroom materials for children who would otherwise have no access to learning.
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
              <h2 className="primary-text-3xl font-bold primary-mb-6">Support Education</h2>
              <p className="primary-text-xl primary-mb-8 primary-max-w-2xl mx-auto">
                Give children the gift of education and unlock their potential.
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

export default PrimaryEducation;