import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import './AboutUs.css'; // Import the CSS file

const OurFounders = () => {

    useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="founders-container">
      <Navigation />
      
      <main className="founders-main">
        <section className="founders-hero">
          <div className="founders-hero-content">
            <h1 className="founders-title">Our Founders</h1>
            <p className="founders-subtitle">From Tragedy to Hope</p>
          </div>
        </section>

        <ScrollAnimation>
          <section className="founders-story">
            <div className="founders-content">
              <div className="founders-intro">
                <h2 className="founders-story-title">Dukan's Story</h2>
                <div className="founders-story-card">
                  <p className="founders-text">
                    I was born in Jikow, which is located in the southern portion of Sudan near the Ethiopian border. Our village was a station for the northern Sudanese Army. For the longest time I thought that Jikow was a huge state because it was the only place I had ever been. Growing up in Jikow was quite different than the United States. We had a lot of small shops, but no running water or electricity. You could make phone calls, but you needed to go into town to do so. Despite this, it was a wonderful place to live. We played on the beach and did anything we could imagine.
                  </p>

                  <p className="founders-text">
                    When the SPLM reached our village, we thought the army would protect us. People from surrounding villages flocked to Jikow for protection, bringing very few items with them and things they knew the soldiers wouldn't take from them. One of the refugee camps close to where we lived was one of the first attacked, and still the Army did not protect them or fight back. One day, many village people were attacked on the riverside and most of the victims were children and the elderly. Those that weren't killed by gunfire drowned in the river.
                  </p>

                  <p className="founders-text">
                    We were forced to flee our home and we ran for three days. Any time that we stopped to rest, we would hear gunfire. One day during a stop to rest and eat, we heard gunshots very close to us. We walked and ran without stopping until the next day, and then stopped and slept in the bushes. We camped in the middle of nowhere for about three months. When we decided to try and return to our village, Jikow, everything had been burned and ruined. We began to dig into the ground to rebuild homes and mines and in the process uncovered countless dead bodies.
                  </p>

                  <p className="founders-text">
                    Hunger was rampant in the village. With such little food, my sister and I were forced to live on fish and milk, even though we were both allergic to fish. My family had one cow so I had to share my meal with my 3-year-old sister. My father would be gone from sunup to sundown just to find anything to eat to feed the two of us. Children in our village cried for food every day; if you had a cow to milk, you were very lucky. Once when my sister and I had our first real meal in three months, my father told us to eat slowly and eat small meals until our stomachs could get used to it again.
                  </p>

                  <p className="founders-text">
                    Eventually, our village was rebuilt and refurbished. Things began to look up in our village until 1986, when my father, along with seven other men, were murdered. My sister and I lived with my stepmother after my father's murder. It was very difficult for us. My stepmother was very old (my parents were divorced when I was 3) and she had two young children to take care of. The next month my older brother and cousin were killed on the battlefield.
                  </p>

                  <p className="founders-text">
                    Many nights my stepmother would tell us we had to sleep in the bushes because she had heard that the enemy was coming to attack and burn the village again. When our village finally was attacked, we had to run for our lives. We were being shot at. We ran for a very long time. The remaining members of my family were separated. It was not until the next morning that we realized that we had left my sister back at the village. We returned to the village and were relieved to find that my uncle had found her and protected her until we returned. The cattle had been taken, women and young girls had been raped and beaten, and the village had been burned again.
                  </p>

                  <p className="founders-text">
                    We decided to flee our home for good. We relocated to a refugee camp in Ethiopia where we lived for a few years. Life there was better than it ever had been. We had food to eat, milk to drink, clothes to wear, and we felt safe. In 1991, however, the Ethiopian government went to war and we were forced to flee for a second time. Our new refugee camp was located in Kenya, where we lived until we received grants that would allow us to move to the United States.
                  </p>

                  <p className="founders-text">
                    Once in the U.S., we settled in Iowa. My sister and I began our lives in our new home and graduated from North High School in Des Moines, Iowa, in 1998. It is my life story, my experiences, that motivate me to want to help others. I want to ensure that other children will not lose their homes and families, but gain opportunities and have a bright future.
                  </p>

                  <p className="founders-text founders-text-bold">
                    Dukan continues to lead this mission with faith, love, and hope – believing that with the 
                    support of kind-hearted people, these children can have the future they deserve.
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

export default OurFounders;
