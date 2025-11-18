import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import feeding_program from "../../assets/feeding_program.jpg";
import "./programs.css"; // Import the CSS file

const DailyFeeding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Image */}
        <ScrollAnimation>
          <section className="dailyfeeding-py-8">
            <div className="dailyfeeding-container">
              <img
                src={feeding_program}
                alt="Children enjoying meals"
                className="w-full dailyfeeding-max-w-4xl mx-auto rounded-lg dailyfeeding-shadow-xl max-h-60"
              />
            </div>
          </section>
        </ScrollAnimation>

        {/* Program Details */}
        <ScrollAnimation>
          <section className="dailyfeeding-py-16 dailyfeeding-bg-secondary">
            <div className="dailyfeeding-container">
              <div className="dailyfeeding-max-w-4xl mx-auto">
                <h2 className="dailyfeeding-text-3xl font-bold dailyfeeding-text-accent dailyfeeding-mb-6">About This Program</h2>

                <h3 className="dailyfeeding-text-2xl font-bold dailyfeeding-mb-4">Daily Feeding Program Overview</h3>
                <p className="dailyfeeding-text-lg leading-relaxed">
                  At the Good Shepherd Orphanage in Jikow, South Sudan, the Daily Feeding Program plays a vital role in supporting the health and wellbeing of 72 vulnerable children. Recognizing the critical importance of nutrition in a child's physical and cognitive development, this program provides three nutritious meals each day: breakfast, lunch, and dinner. By prioritizing consistent and balanced nutrition, the orphanage ensures that no child goes to bed hungry.
                </p>

                <h3 className="dailyfeeding-text-2xl font-bold dailyfeeding-mb-4">Importance of Nutrition</h3>
                <p className="dailyfeeding-text-lg leading-relaxed">
                  Nutrition is key to growth and development. The Daily Feeding Program provides meals rich in essential vitamins and minerals, including proteins, carbohydrates, and healthy fats.
                </p>

                <h3 className="dailyfeeding-text-2xl font-bold dailyfeeding-mb-4">Structured Meal Times</h3>
                <p className="dailyfeeding-text-lg leading-relaxed">
                  Each day begins with a hearty breakfast, followed by lunch and a nutritious dinner, promoting healthy eating habits and stability for the children.
                </p>

                <h3 className="dailyfeeding-text-2xl font-bold dailyfeeding-mb-4">Community Involvement</h3>
                <p className="dailyfeeding-text-lg leading-relaxed">
                  Local farmers and suppliers provide fresh ingredients, promoting the local economy while ensuring high-quality meals and fostering community pride.
                </p>

                <h3 className="dailyfeeding-text-2xl font-bold dailyfeeding-mb-4">Long-Term Benefits</h3>
                <p className="dailyfeeding-text-lg leading-relaxed">
                  Proper nutrition helps children focus, engage in play, and develop social skills. This program empowers them to break the cycle of poverty and aspire to brighter futures.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Funding */}
        <ScrollAnimation>
          <section className="dailyfeeding-py-16">
            <div className="dailyfeeding-container">
              <div className="dailyfeeding-max-w-4xl mx-auto dailyfeeding-bg-card p-8 rounded-lg dailyfeeding-shadow-lg">
                <h2 className="dailyfeeding-text-3xl font-bold dailyfeeding-text-accent dailyfeeding-mb-6">Funding Needed</h2>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="dailyfeeding-text-5xl font-bold dailyfeeding-text-accent">$12,960</span>
                    <span className="dailyfeeding-text-xl dailyfeeding-text-muted-foreground">/year</span>
                  </div>
                  <p className="dailyfeeding-text-lg dailyfeeding-text-foreground">or $1,080 per month for 72 children</p>
                  <p className="dailyfeeding-text-foreground dailyfeeding-mt-6">
                    Your donation will sustain the daily feeding program for 12 months, ensuring every child receives three nutritious meals every single day.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <section className="dailyfeeding-py-16 dailyfeeding-text-accent-foreground">
            <div className="dailyfeeding-container text-center">
              <h2 className="dailyfeeding-text-3xl font-bold dailyfeeding-mb-6">Support Daily Feeding</h2>
              <p className="dailyfeeding-text-xl dailyfeeding-mb-8 dailyfeeding-max-w-2xl mx-auto">
                Your contribution ensures no child goes hungry. Every meal makes a difference.
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

export default DailyFeeding;
