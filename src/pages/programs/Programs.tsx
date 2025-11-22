import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Heart, GraduationCap, Stethoscope, Building, Droplet, Shirt } from "lucide-react";

const Projects = () => {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const projects = [
    {
      icon: Heart,
      title: "Daily Feeding",
      cost: "$12,960/year",
      description: "Provide nutritious meals to 72 children every single day. Proper nutrition is essential for their physical and cognitive development.",
      details: "This program ensures that no child goes to bed hungry. Three balanced meals per day help children grow strong and stay healthy."
    },
    {
      icon: GraduationCap,
      title: "Primary Education",
      cost: "$10,000",
      description: "Fund basic education including teachers, books, supplies, and classroom materials for children who would otherwise have no access to learning.",
      details: "Education is the foundation for breaking the cycle of poverty. We provide quality primary education to help children build bright futures."
    },
    {
      icon: Stethoscope,
      title: "Medical Clinic",
      cost: "$10,000",
      description: "Support healthcare services including routine check-ups, vaccinations, and treatment for common illnesses.",
      details: "Access to healthcare is critical. Our clinic ensures children receive the medical attention they need to stay healthy and thrive."
    },
    {
      icon: Building,
      title: "Building Construction",
      cost: "$10,000",
      description: "Construct safe dormitories, classrooms, and facilities where children can live, learn, and play in dignity and security.",
      details: "Safe, sturdy buildings provide children with a stable home and environment conducive to learning and growth."
    },
    {
      icon: Droplet,
      title: "Water Well Drilling",
      cost: "$7,040",
      description: "Drill wells to provide clean, safe drinking water, reducing waterborne diseases and improving overall health.",
      details: "Clean water is a basic human right. Our wells bring life-giving water to the orphanage and surrounding community."
    },
    {
      icon: Shirt,
      title: "Clothing Donations",
      cost: "Ongoing",
      description: "Provide clothing, shoes, and educational materials to children in need, ensuring dignity and comfort.",
      details: "Basic necessities like clothing help children maintain their dignity and focus on their education and development."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto animate-slide-in-right">
              Good Shepherd Orphanage in Jikow, South Sudan, provides hope and support 
              to vulnerable children through comprehensive programs focused on their wellbeing, 
              education, and future.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <ScrollAnimation>
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-accent mb-6">Our Mission</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  The Good Shepherd Orphanage Project is dedicated to transforming the lives 
                  of orphaned and vulnerable children in South Sudan. Through education, 
                  healthcare, nutrition, and safe shelter, we provide children with the 
                  foundation they need to build successful, independent lives and become 
                  leaders in their communities.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ScrollAnimation key={index}>
                  <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <project.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-accent mb-2">{project.title}</h3>
                        <p className="text-xl font-semibold text-primary">{project.cost}</p>
                      </div>
                    </div>
                    <p className="text-foreground mb-4 font-medium">{project.description}</p>
                    <p className="text-muted-foreground">{project.details}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <ScrollAnimation>
          <section className="py-16 bg-accent text-accent-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Support These Life-Changing Projects</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Every contribution makes a real difference in the lives of children who need it most.
              </p>
              <Link to="/donate">
                <Button className="button-default">
                  Make a Donation
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

export default Projects;
