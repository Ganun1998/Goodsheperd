import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import nhial from "../../assets/nhial.jpg"
import char1 from "../../assets/char1.jpg"
import dukan1 from "../../assets/dukan1.jpg"

const OurLeadership = () => {
  const usBoardMembers = [
    {
      name: "Dukan Diew",
      role: "Founder & Executive Director",
      bio: "A native of South Sudan who fled civil war as a child. After resettlement in the United States, Dukan founded Good Shepherd Orphanage to provide hope and opportunity to vulnerable children in her homeland.",
      image: dukan1,
    },
    {
      name: "Char Diew",
      role: "Co-Founder & Board Member",
      bio: "A key partner in establishing the orphanage. Char provides cultural insight and plays an important role in strengthening connections between U.S. supporters and South Sudan operations.",
      image: char1,
    },
    {
      name: "Nhial Chuol Tut",
      role: "Advisor",
      bio: "Provides strategic guidance and advisory support to ensure the organization remains mission-focused, effective, and aligned with long-term goals.",
      image: nhial,
    },
    {
      name: "Lori E",
      role: "Treasurer",
      bio: "Oversees the organization's financial planning, annual budgeting, reporting, stewardship to ensure transparency and responsible use of donor contributions.",
    },
    {
      name: "William Keeper",
      role: "Board Member",
      bio: "Brings extensive nonprofit management experience and strategic planning expertise to help guide the organization's growth and sustainability.",
      
    },
    {
      name: "Pouk Dak",
      role: "Board Member",
      bio: "Provides financial oversight and ensures responsible stewardship of donor funds to maximize impact for the children.",
      
    }
  ];

  const southSudanBoardMembers = [
    {
      name: "ChanKuoth Beal Diew",
      role: "Operations Manager",
      bio: "Oversees daily operations, coordinates staff, manages supplies, and ensures all programs run efficiently to support the wellbeing of the children.",
      
    },
    {
      name: "Anter Yang",
      role: "Field Coordinator",
      bio: "Coordinates and supervises field activities, supports staff on the ground, and ensures programs are delivered effectively to meet the needs of the children and the community.",
      
    },

    {
      name: "Gach Diew",
      role: "Board Member",
      bio: "Serves as a vital connection between the orphanage and local community, helping to identify needs and build partnerships with village leaders.",
      
    },
    {
      name: "Gatdet Ujuil",
      role: "Board Member",
      bio: "Manages logistics, supplies, and coordinates with local staff to ensure smooth operation of all orphanage programs and activities.",
      
    }
  ];


  return (
    <div className="board-container">
      <Navigation />

      <main className="board-main">

        {/* US SECTION */}
        <section className="us-board-hero">
          <div className="us-board-hero-content">
            <h1 className="us-board-title">US Board & Staff</h1>
            <p className="us-board-subtitle">
              Dedicated leadership guiding our mission from the United States
            </p>
          </div>
        </section>

        <ScrollAnimation>
          <section className="us-board-content">
            <div className="us-board-grid">
              {usBoardMembers.map((member, index) => (
                <div key={index} className="board-card">
                  <img src={member.image} alt={member.name} className="member-photo" />
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* SOUTH SUDAN SECTION */}
        <section className="south-sudan-board-hero">
          <div className="south-sudan-board-hero-content">
            <h1 className="south-sudan-board-title">South Sudan Board & Staff</h1>
            <p className="south-sudan-board-subtitle">
              Our dedicated team on the ground in Jikow, South Sudan
            </p>
          </div>
        </section>

        <ScrollAnimation>
          <section className="south-sudan-board-content">
            <div className="south-sudan-board-grid">
              {southSudanBoardMembers.map((member, index) => (
                <div key={index} className="board-card">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

      </main>

      <Footer />
    </div>
  );
};

export default OurLeadership;
