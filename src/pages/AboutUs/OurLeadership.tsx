import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";

const OurLeadership = () => {
  const usBoardMembers = [
    {
      name: "Dukan Diew",
      role: "Founder & CEO",
      bio: " A native of South Sudan who fled the civil war as a child. After resettlement in the United States, Dukan Founded the Good Shepherd Orphanage Project with younger sister to provide hope and opportunity to vulnerable children in her homeland.",
    },
    {
      name: "Nyachar Diew",
      role: "Co-Founder & Communication Specialist",
      bio: "Leads communication strategies, manages public relations, and strengthens community engagement through storytelling and outreach.",
    },
    {
      name: "Lori E",
      role: "Chief Finance Oficer (CFO)",
      bio: "Oversees the organization's financial planning, annual budgeting, reporting, stewardship to ensure transparency and responsible use of donor contributions.",
    },
    {
      name: "Puok Dak",
      role: "Development Director",
      bio: "Manages fundraising initiatives, partnership development, and resource mobilization to support program growth.",
    },
    {
      name: "Nhial Chuol Tut",
      role: "Advisor",
      bio: "Provides strategic guidance and advisory support to ensure the organization remains mission-focused, effective, and aligned with long-term goals.",
    },
    {
      name: "Nyajuok Toang",
      role: "Administrative Assistant",
      bio: "Supports daily administrative functions, documentation, and office coordination to keep operations running smoothly.",
    },
    {
      name: "William Keeper",
      role: "Board Member",
      bio: "Brings extensive nonprofit management experience and strategic planning expertise to help guide the organization's growth and sustainability.",
    },
    {
      name: "Bill Pieper",
      role: "Board Member",
      bio: "Supports strategic leadership, compliance, and organizational development through board-level guidance.",
    },
  ];

  const southSudanBoardMembers = [
    {
      name: "ChangKuoth Diew",
      role: "Executive Director",
      bio: "Oversees all in-country operations, program execution, and team leadership to ensure impactful work on the ground.",
    },
    {
      name: "Gatdat Ujol",
      role: "Field Manager",
      bio: "Directs daily field activities, supervises project implementation, and coordinates logistics in rural communities.",
    },
    {
      name: "Anter Nyang",
      role: "Operations Manager",
      bio: "Manages operational workflows, staff coordination, and resource distribution to support smooth program delivery.",
    },
    {
      name: "Gach Beal",
      role: "Community Outreach Manager",
      bio: "Engages directly with local communities, builds relationships, and ensures programs reflect community needs and priorities.",
    },
  ];

  return (
    <div className="board-container">
      <Navigation />

      <main className="board-main">
        {/* US SECTION */}
        <section className="us-board-hero">
          <div className="us-board-hero-content">
            <h1 className="us-board-title">Board of Directors</h1>
          </div>
        </section>

        <ScrollAnimation>
          <section className="us-board-content">
            <div className="us-board-grid">
              {usBoardMembers.map((member, index) => (
                <div key={index} className="board-card">
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
            <h1 className="south-sudan-board-title">On-Site Staff Management</h1>
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
