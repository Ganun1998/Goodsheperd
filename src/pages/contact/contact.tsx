import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useToast } from "../../hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // ✅ NEW

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true); // ✅ start loading

      await emailjs.send(
        "service_fzwrw4f",
        "template_457524k",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "x3TgF_PdKAJKKDa9N"
      );

      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting us. We'll get back to you soon.",
      });

      // reset after success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });

    } finally {
      setLoading(false); // ✅ stop loading ALWAYS
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow contact-container">
        <section className="py-16">
          <div className="container contact-wrapper">
            <h2 className="contact-title">Get in Touch</h2>

            <div className="contact-grid">
              {/* Left column */}
              <ScrollAnimation>
                <div className="contact-information">
                  <div className="space-y-6">
                    <div className="information-item">
                      <div className="icon-container">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email</h3>
                        <p className="text-foreground break-words">
                          info@goodshepherdorphangeprojectinc.org
                        </p>
                        <p className="text-muted-foreground text-sm">
                          We'll respond soon
                        </p>
                      </div>
                    </div>

                    <div className="information-item">
                      <div className="icon-container">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Phone</h3>
                        <p className="text-foreground">
                          +1 (515) 865-4539
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Mon-Fri, 9am-5pm CST
                        </p>
                      </div>
                    </div>

                    <div className="information-item">
                      <div className="icon-container">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Address</h3>
                        <p className="text-foreground">
                          4110 S.W.9th Street, Des Moines, Iowa 50315, USA.
                        </p>
                        <p className="text-foreground">
                          Jikow, South Sudan.
                        </p>
                      </div>
                    </div>

                    <div className="information-item">
                      <div className="icon-container">
                        <MessageCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          Social Media
                        </h3>
                        <p className="text-foreground">
                          Follow us on Facebook and Instagram
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="office-hours">
                    <h3 className="font-bold text-lg text-accent mb-3">
                      Office Hours
                    </h3>
                    <div className="space-y-2 text-foreground">
                      <p>
                        <span className="font-semibold">
                          Monday - Friday:
                        </span>{" "}
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Right column */}
              <ScrollAnimation>
                <div className="contact-form">
                  <h2 className="contact-title">Send Us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name">Name *</label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={loading} // ✅ disable while sending
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label htmlFor="message">Message *</label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="button"
                      disabled={loading} // ✅ prevent spam clicks
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>

            {/* Map */}
            <div className="contact-map mt-12">
              <div className="map-wrapper">
                <iframe
                  title="Good Shepherd Orphanage Map"
                  src="https://www.google.com/maps/embed?pb=!1m18..."
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;