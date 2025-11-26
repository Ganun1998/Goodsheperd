import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import nhial from "../../assets/nhial.jpg"
import char2 from "../../assets/char2.png"
import dukan1 from "../../assets/dukan1.png"

const OurLeadership = () => {
  const usBoardMembers = [
    {
      name: "Dukan Diew",
      role: "Founder & CEO",
      image: dukan1,
    },
    {
      name: "Nyachar Diew",
      role: "Co-Founder & Communication Specialist",
      image: char2,
    },
    {
      name: "Lori E",
      role: "Chief Finance Oficer (CFO)",
    },
    {
      name: "Puok Dak",
      role: "Board Member",
    },
    {
      name: "Nhial Chuol Tut",
      role: "Advisor",
      image: nhial,
    },
    {
      name: "William Keeper",
      role: "Board Member",
    }, 
  ];

  const southSudanBoardMembers = [
    {
      name: "ChangKuoth Beal Diew",
      role: "Operations Manager",
      image: "image/chang.png",   
    },
    {
      name: "Anter Yang",
      role: "Field Coordinator",
      image: "image/anter.png", 
    },

    {
      name: "Gach Diew",
      role: "Board Member",
      image: "image/gach.png", 
    },
    {
      name: "Gatdet Ujuil",
      role: "Board Member",
      image: "image/gatdet.png", 
    }
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
                  <img src={member.image} alt={member.name} className="member-photo" />
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
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
                  <img src={member.image} alt={member.name} className="member-photo" />
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
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
