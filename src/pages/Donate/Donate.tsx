import "./Donate.css"; 
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { CreditCard, Mail, Heart } from "lucide-react";

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">

        {/* Donation Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold text-accent mb-8 text-center">
                  Help Us Make a Difference
                </h2>
                <p className="mt-6 text-lg">
                  Your generosity can make a significant difference for these children and their families. 
                  Together, we can provide hope, health, and a brighter future. 
                  Please consider making a donation today!
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Donation Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                  {/* Online Donation */}
                  <Card className="p-6 md:p-8 w-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-accent/20 p-4 rounded-full">
                        <CreditCard className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-accent">
                        Online Donation
                      </h3>
                    </div>

                    <p className="text-foreground mb-6 text-base">
                      Make a secure online donation using your credit card or PayPal account.
                    </p>

                    <a
                      href="https://www.paypal.com/US/fundraiser/charity/1897383"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto"
                    >
                      <Button className="donate-button px-6 py-3 text-lg w-full">
                        Donate Online
                      </Button>
                    </a>
                  </Card>

                  {/* Mail a Check */}
                  <Card className="p-6 md:p-8 w-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-accent/20 p-4 rounded-full">
                        <Mail className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-accent">
                        Mail a Check
                      </h3>
                    </div>

                    <p className="text-foreground mb-4 text-base">
                      Send your donation by mail to:
                    </p>

                    <div className="bg-secondary p-4 rounded-lg text-foreground mb-6 text-base">
                      <p className="font-semibold">Good Shepherd Orphanage</p>
                      <p>goodshepherdorphangeproject@gmail.com</p>
                      <p>P.O. Box 12345</p>
                      <p>Des Moines, IA 50309, USA</p>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Please make checks payable to "Good Shepherd Orphanage Project"
                    </p>
                  </Card>

                </div>
              </ScrollAnimation>

              {/* Monthly Giving */}
              <ScrollAnimation>
                <Card className="p-8 bg-accent text-accent-foreground mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-foreground/20 p-4 rounded-full">
                      <Heart className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold">Become a Monthly Donor</h3>
                  </div>

                  <p className="mb-6 text-lg">
                    Join our community of sustaining supporters. 
                    Monthly donations provide predictable funding 
                    that allows us to plan and expand our programs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-foreground/10 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold mb-2">$25/mo</p>
                      <p>Child Education</p>
                    </div>
                    <div className="bg-foreground/10 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold mb-2">$50/mo</p>
                      <p>Full Support</p>
                    </div>
                    <div className="bg-foreground/10 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold mb-2">$100/mo</p>
                      <p>Leadership Circle</p>
                    </div>
                  </div>

                  <a
                    href="https://www.paypal.com/US/fundraiser/charity/1897383"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="donate-button w-full py-3 text-lg">
                      Set Up Monthly Donation
                    </Button>
                  </a>
                </Card>
              </ScrollAnimation>

              {/* Tax Info */}
              <ScrollAnimation>
                <div className="bg-secondary p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-accent mb-3">Tax Deductible</h3>
                  <p className="text-foreground">
                    Good Shepherd Orphanage Project is a 501(c)(3) nonprofit organization.
                    Your donation is tax-deductible to the extent allowed by law.
                    Tax ID: 0746809
                  </p>
                </div>
              </ScrollAnimation>

            </div>
          </div>
        </section>

        {/* Impact */}
        <ScrollAnimation>
          <section className="py-16 bg-white text-brown">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Your Impact</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div>
                  <p className="text-5xl font-bold text-accent mb-2">100%</p>
                  <p className="text-lg">goes directly to programs</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-accent mb-2">72</p>
                  <p className="text-lg">children supported daily</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-accent mb-2">$360</p>
                  <p className="text-lg">supports a child for a year</p>
                </div>
              </div>

            </div>
          </section>
        </ScrollAnimation>

      </main>

      <Footer />
    </div>
  );
};

export default Donate;
