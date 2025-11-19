import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";
import { Link } from "react-router-dom";
import feeding_program from "../assets/feeding_program.jpg";
import education from "../assets/education.jpg";
import clinic_image from "../assets/clinic_image.jpg";
import construction_program from "../assets/construction_program.jpg";
import water_well from "../assets/water_well.jpg";
import clothing_donate from "../assets/clothing_donate.jpg";

const Programs = () => {
  const projects = [
  {
    image: feeding_program,
    title: "Daily Feeding",
    cost: "$12,960/year",
    description: "Provide nutritious meals to 72 children every single day. Proper nutrition is essential for their physical and cognitive development.",
    details: "This program ensures that no child goes to bed hungry. Three balanced meals per day help children grow strong and stay healthy.",
    link: "/programs/daily-feeding" // Project specific link
  },
  {
    image: education,
    title: "Primary Education",
    cost: "$10,000",
    description: "Fund basic education including teachers, books, supplies, and classroom materials for children who would otherwise have no access to learning.",
    details: "Education is the foundation for breaking the cycle of poverty. We provide quality primary education to help children build bright futures.",
    link: "/programs/primary-education" // Project specific link
  },
  {
    image: clinic_image,
    title: "Medical Clinic",
    cost: "$10,000",
    description: "Support healthcare services including routine check-ups, vaccinations, and treatment for common illnesses.",
    details: "Access to healthcare is critical. Our clinic ensures children receive the medical attention they need to stay healthy and thrive.",
    link: "/programs/medical-clinic" // Project specific link
  },
  {
    image: construction_program,
    title: "Building Construction",
    cost: "$10,000",
    description: "Construct safe dormitories, classrooms, and facilities where children can live, learn, and play in dignity and security.",
    details: "Safe, sturdy buildings provide children with a stable home and environment conducive to learning and growth.",
    link: "/programs/building-construction" // Project specific link
  },
  {
    image: water_well,
    title: "Water Well",
    cost: "$7,040",
    description: "Drill wells to provide clean, safe drinking water, reducing waterborne diseases and improving overall health.",
    details: "Clean water is a basic human right. Our wells bring life-giving water to the orphanage and surrounding community.",
    link: "/programs/water-well" // Project specific link
  },
  {
    image: clothing_donate,
    title: "Clothing Donations",
    cost: "Ongoing",
    description: "Provide clothing, shoes, and educational materials to children in need, ensuring dignity and comfort.",
    details: "Basic necessities like clothing help children maintain their dignity and focus on their education and development.",
    link: "/programs/clothing-donations" // Project specific link
  }
];

  return (
    <div className="project-container">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="hero-section">
          <h1 className="hero-title">Our Projects</h1>
          <p className="hero-text">
            Good Shepherd Orphanage in Jikow, South Sudan, provides hope and support 
            to vulnerable children through comprehensive programs focused on their wellbeing, 
            education, and future.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="projects-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ScrollAnimation key={index}>
                  <div className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-cost">{project.cost}</p>
                    <p className="project-description">{project.description}</p>
                    <p className="project-details">{project.details}</p>
                    
                    <Link to={project.link}>
                      <button className="donatess-button">
                        Read More & Donate
                      </button>
                    </Link>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <ScrollAnimation>
          <section className="py-16 text-accent-foreground text-center">
            <h2 className="text-3xl font-bold mb-6">Support These Life-Changing Projects</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Every contribution makes a real difference in the lives of children who need it most.
            </p>
            <Link to="/donate">
              <button className="donatess-button">
                Make a Donation
              </button>
            </Link>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
