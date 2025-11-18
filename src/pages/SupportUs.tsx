import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, DollarSign, Heart } from "lucide-react";

const SupportUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Support Us</h1>
            <p className="text-xl max-w-3xl mx-auto animate-slide-in-right">
              Your generosity transforms lives. Together, we can give children in South Sudan 
              the hope, education, and care they deserve.
            </p>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-accent mb-12">Ways to Give</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ScrollAnimation>
                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-accent/20 p-4 rounded-full">
                      <DollarSign className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-accent">One-Time Donation</h3>
                  </div>
                  <p className="text-foreground mb-6">
                    Make an immediate impact with a one-time contribution. Every dollar goes 
                    directly to supporting our projects and the children we serve.
                  </p>
                  <Link to="/donate">
                    <Button className="w-full button-default">
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="bg-card p-8 rounded-lg shadow-lg border-2 border-accent">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-accent/20 p-4 rounded-full">
                      <Heart className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-accent">Monthly Sponsorship</h3>
                  </div>
                  <p className="text-foreground mb-4">
                    Become a monthly sponsor and provide sustained support that changes lives.
                  </p>
                  <ul className="mb-6 space-y-2 text-foreground">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span><strong className="text-accent">$15/month</strong> - Support a child's education</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span><strong className="text-accent">$180/year</strong> - Full orphanage sponsorship</span>
                    </li>
                  </ul>
                  <Link to="/donate">
                    <Button className="w-full button-default">
                      Become a Sponsor
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Giving Tuesday */}
        <ScrollAnimation>
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/20 p-4 rounded-full">
                    <Calendar className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-accent">Giving Tuesday</h2>
                    <p className="text-xl text-primary">December 2, 2025</p>
                  </div>
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  Mark your calendars for Giving Tuesday, a global day of generosity! 
                  Join thousands of supporters worldwide in making a difference. On this special day, 
                  we'll be raising funds for urgent projects including a new water well and 
                  educational materials for our students.
                </p>
                <p className="text-foreground font-semibold">
                  Every donation on Giving Tuesday helps us reach more children and provide 
                  essential services they desperately need.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Impact Statement */}
        <ScrollAnimation>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-accent mb-12">Your Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-card rounded-lg shadow-md">
                  <h3 className="text-5xl font-bold text-accent mb-2">$50</h3>
                  <p className="text-foreground">Provides a month of meals for one child</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow-md">
                  <h3 className="text-5xl font-bold text-accent mb-2">$180</h3>
                  <p className="text-foreground">Sponsors a child's education for a year</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow-md">
                  <h3 className="text-5xl font-bold text-accent mb-2">$500</h3>
                  <p className="text-foreground">Supports medical care for multiple children</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Start Making a Difference Today</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Your support creates lasting change in the lives of vulnerable children.
              </p>
              <Link to="/donate">
                <Button className="w-full button-default">
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

export default SupportUs;
