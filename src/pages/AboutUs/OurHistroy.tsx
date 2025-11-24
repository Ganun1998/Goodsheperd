import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import './AboutUs.css'; // Import the CSS file

const OurHistory = () => {

   useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="history-container">
      <Navigation />
      
      <main className="history-main">
        <section className="history-hero">
          <div className="history-hero-content">
            <h1 className="history-title">Our History</h1>
            <p className="history-subtitle">
              A journey of faith, hope, and transformation
            </p>
          </div>
        </section>

        <ScrollAnimation>
          <section className="history-content">
            <div className="history-text-container">
              <div className="history-quote">
                <p className="history-quote-text">
                  "My heart is heavy yet full of hope as I share the story of the children under my care 
                  in South Sudan. These precious children lost their parents – many to war, diseases, and 
                  extreme poverty. Left alone, hungry, and without anyone to care for them, they faced a 
                  future without safety or love. When I saw their suffering, I could not turn away. By God's 
                  grace, I took them in, offering what little I had –food when possible, 
                  and comfort in time of pain."
                </p>
                <p className="history-quote-author">— Dukan Diew, Founder</p>
              </div>

              <div className="history-timeline">
                <div className="history-timeline-item">
                  <h3 className="history-timeline-title">The Beginning</h3>
                  <p className="history-timeline-text">
                    The Good Shepherd Orphanage Project,Inc was born from a vision shared by Dukan Diew and her late 
                    husband, Koang Toang. Both survivors of South Sudan's civil war, they understood the 
                    devastating impact of conflict on children and families.
                  </p>
                </div>

                <div className="history-timeline-item">
                  <h3 className="history-timeline-title">Opening Our Doors</h3>
                  <p className="history-timeline-text">
                    After obtaining 501(c)(3) nonprofit status, Dukan and her sister Char returned to their 
                    home village of Jikow and opened the orphanage with 50 children. Word spread quickly, and 
                    more children arrived – each with their own story of loss and hardship.
                  </p>
                </div>

                <div className="history-timeline-item">
                  <h3 className="history-timeline-title">Growing to Meet the Need</h3>
                  <p className="history-timeline-text">
                    Despite limited resources, the orphanage could not turn away children in need. Today, 
                    72 children are being helped. Each child receives daily meals, education, healthcare, 
                    and most importantly, a loving community that believes in their future.
                  </p>
                </div>

                <div className="history-timeline-item">
                  <h3 className="history-timeline-title">Looking Forward</h3>
                  <p className="history-timeline-text">
                    Our journey continues as we work to expand our programs, improve our facilities, and reach 
                    more children in need. With the support of donors and volunteers worldwide, we are building 
                    a foundation for lasting change in South Sudan.
                  </p>
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

export default OurHistory;