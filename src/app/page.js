
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  Globe,
  Code2,
  CalendarDays,
  Megaphone,
  Settings,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites for businesses that want to grow online.",
  },
  {
    icon: CalendarDays,
    title: "Booking Systems",
    description:
      "Booking and reservation systems to simplify your business operations.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Digital marketing solutions to help your business reach more customers.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Software solutions designed around your business requirements.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description:
      "Updates and technical support to keep your website running.",
  },
];

const projects = [
  {
    title: "Hotel Website",
    category: "Website Development",
    image: "/images/hotel.jpg", // PUT HOTEL IMAGE HERE
  },
  {
    title: "Business Website",
    category: "Web Design",
    image: "/images/website.jpg", // PUT WEBSITE IMAGE HERE
  },
  {
    title: "Business Dashboard",
    category: "Custom Software",
    image: "/images/dashboard.jpg", // PUT DASHBOARD IMAGE HERE
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Service: ${form.service}\n\n` +
      `Project details:\n${form.message}`
    );

    window.location.href =
      `mailto:angeliqueeumwali@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      
      <header className="header">
        <div className="container nav">
          <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
            ALPHA <span>IWACU</span>
            <small>DIGITAL STUDIO</small>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "navigation open" : "navigation"}>
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Portfolio", "#portfolio"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-text">
              <span className="eyebrow">
                DIGITAL SOLUTIONS FOR GROWING BUSINESSES
              </span>

              <h1>
                Building digital experiences for{" "}
                <span>growing businesses.</span>
              </h1>

              <p>
                We help businesses establish their digital presence
                through modern websites, booking systems and custom
                software solutions.
              </p>

              <div className="hero-buttons">
                <a href="#contact" className="button primary">
                  Start a Project <ArrowRight size={18} />
                </a>
                <a href="#services" className="button secondary">
                  Explore Services
                </a>
              </div>

              <div className="hero-note">
                <CheckCircle2 size={17} />
                Practical digital solutions for your business
              </div>
            </div>

            <div className="hero-image">
              
              <Image
                src="/images/hero.jpg"
                alt="Modern hotel interior representing digital business solutions"
                width={800}
                height={650}
                priority
                className="main-image"
              />
              <div className="image-badge">
                <Globe size={22} />
                <div>
                  <strong>ALPHA IWACU</strong>
                  <span>Digital experiences</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="section" id="about">
          <div className="container about-grid">
            <div>
              
              <Image
                src="/images/website.jpg"
                alt="Professional website design on a computer"
                width={700}
                height={500}
                className="about-image"
              />
            </div>

            <div className="about-text">
              <span className="section-label">ABOUT US</span>
              <h2>
                Technology that helps your business{" "}
                <span>move forward.</span>
              </h2>
              <p>
                ALPHA IWACU DIGITAL STUDIO focuses on helping
                businesses build and improve their digital presence.
              </p>
              <p>
                We create websites, booking systems and software
                solutions designed around real business needs.
              </p>

              <ul>
                <li>
                  <CheckCircle2 size={18} />
                  Solutions tailored to your needs
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Responsive website design
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Practical digital experiences
                </li>
              </ul>
            </div>
          </div>
        </section>

        
        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">OUR SERVICES</span>
              <h2>What we can do for your business</h2>
              <p>
                Explore our digital services and find a solution
                for your business.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-icon">
                      <Icon size={27} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact" className="service-link">
                      Learn more <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        
        <section className="section" id="portfolio">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">OUR PORTFOLIO</span>
              <h2>Explore our digital concepts</h2>
              <p>
                Examples of the types of digital projects we can
                create for businesses.
              </p>
            </div>

            <div className="portfolio-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                 
                  <div className="project-image-wrapper">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="project-image"
                    />
                  </div>

                  <div className="project-info">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>
                      Demonstration concept showing how a digital
                      solution could support a business.
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <p className="portfolio-note">
              These are illustrative concepts, not completed client projects.
            </p>
          </div>
        </section>

        
        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div className="contact-text">
              <span className="section-label">CONTACT US</span>
              <h2>
                Let's discuss your <span>project.</span>
              </h2>
              <p>
                Tell us about your business and the digital solution
                you have in mind.
              </p>

              <div className="contact-detail">
                <Mail size={21} />
                <a href="mailto:angeliqueeumwali@gmail.com">
                  angeliqueeumwali@gmail.com
                </a>
              </div>
              <div className="contact-detail">
                <MapPin size={21} />
                <span>Rwanda</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a project inquiry</h3>

              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />

              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
              >
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>

              <label htmlFor="message">Project details</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                rows={5}
                required
              />

              <button type="submit" className="button primary">
                Prepare Email <ArrowRight size={18} />
              </button>
              <small>
                Your email application will open with your inquiry prepared.
              </small>
            </form>
          </div>
        </section>
      </main>

      
      <footer className="footer">
        <div className="container footer-inner">
          <a href="#home" className="logo footer-logo">
            ALPHA <span>IWACU</span>
            <small>DIGITAL STUDIO</small>
          </a>
          <p>Building digital experiences for growing businesses.</p>
          <span>
            © {new Date().getFullYear()} ALPHA IWACU. All rights reserved.
          </span>
        </div>
      </footer>

      
      <style jsx global>{`
        :root {
          --navy: #102a43;
          --navy-dark: #0b1f33;
          --teal: #16a085;
          --grey: #627d98;
          --light: #f4f8fa;
          --white: #ffffff;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 85px;
        }

        body {
          margin: 0;
          color: var(--navy);
          background: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 20;
          background: white;
          border-bottom: 1px solid #e5edf2;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 76px;
        }

        .logo {
          display: flex;
          flex-direction: column;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 1px;
          line-height: 1;
        }

        .logo span {
          color: var(--teal);
          display: inline;
        }

        .logo small {
          margin-top: 6px;
          font-size: 9px;
          letter-spacing: 3px;
        }

        .navigation {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .navigation a {
          font-size: 13px;
          font-weight: 600;
        }

        .navigation a:hover {
          color: var(--teal);
        }

        .menu-button {
          display: none;
          border: 0;
          background: transparent;
          color: var(--navy);
          cursor: pointer;
        }

        .hero {
          padding: 80px 0;
          background: linear-gradient(120deg, #fff, #f1f8f7);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 55px;
        }

        .eyebrow,
        .section-label {
          display: inline-block;
          color: var(--teal);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .eyebrow {
          padding: 10px 13px;
          border: 1px solid #cdece4;
          border-radius: 30px;
          background: #effaf7;
        }

        .hero h1 {
          margin: 22px 0;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.12;
          letter-spacing: -1.7px;
        }

        .hero h1 span,
        .about-text h2 span,
        .contact-text h2 span {
          color: var(--teal);
        }

        .hero-text > p,
        .about-text > p,
        .contact-text > p {
          color: var(--grey);
          font-size: 15px;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }

        .button {
          min-height: 46px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          padding: 0 19px;
          border: 1px solid transparent;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .primary {
          color: white;
          background: var(--navy);
        }

        .primary:hover {
          background: var(--teal);
        }

        .secondary {
          color: var(--navy);
          background: white;
          border-color: #d1dce5;
        }

        .secondary:hover {
          border-color: var(--teal);
        }

        .hero-note {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 25px;
          color: var(--grey);
          font-size: 12px;
        }

        .hero-note svg {
          color: var(--teal);
        }

        /* HERO IMAGE STYLING */
        .hero-image {
          position: relative;
          min-width: 0;
        }

        .main-image {
          display: block;
          width: 100%;
          height: 440px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 25px 60px rgba(16, 42, 67, 0.18);
        }

        .image-badge {
          position: absolute;
          right: -12px;
          bottom: 22px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          border-radius: 8px;
          background: white;
          box-shadow: 0 8px 30px rgba(16, 42, 67, 0.15);
        }

        .image-badge svg {
          color: var(--teal);
        }

        .image-badge div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .image-badge strong {
          font-size: 12px;
        }

        .image-badge span {
          color: var(--grey);
          font-size: 10px;
        }

        .section {
          padding: 85px 0;
        }

        .about-grid,
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 55px;
        }

        .about-image {
          display: block;
          width: 100%;
          height: 370px;
          object-fit: cover;
          border-radius: 10px;
        }

        .about-text h2,
        .contact-text h2 {
          margin: 15px 0;
          font-size: clamp(30px, 4vw, 42px);
          line-height: 1.2;
        }

        .about-text ul {
          display: grid;
          gap: 14px;
          padding: 0;
          margin-top: 24px;
          list-style: none;
        }

        .about-text li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #334e68;
          font-size: 13px;
        }

        .about-text li svg {
          color: var(--teal);
          flex-shrink: 0;
        }

        .services {
          background: var(--light);
        }

        .section-heading {
          max-width: 650px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .section-heading h2 {
          margin: 14px 0;
          font-size: clamp(29px, 4vw, 40px);
        }

        .section-heading p {
          color: var(--grey);
          font-size: 14px;
          line-height: 1.8;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .service-card {
          padding: 25px;
          border: 1px solid #e2eaf0;
          border-radius: 9px;
          background: white;
        }

        .service-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          margin-bottom: 18px;
          border-radius: 8px;
          color: var(--teal);
          background: #e9f8f4;
        }

        .service-card h3 {
          margin: 0 0 10px;
          font-size: 17px;
        }

        .service-card p {
          min-height: 60px;
          color: var(--grey);
          font-size: 12px;
          line-height: 1.8;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--teal);
          font-size: 12px;
          font-weight: 700;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .project-card {
          overflow: hidden;
          border: 1px solid #e2eaf0;
          border-radius: 9px;
          background: white;
        }

        .project-image-wrapper {
          height: 220px;
          overflow: hidden;
          background: #edf2f6;
        }

        .project-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .project-card:hover .project-image {
          transform: scale(1.04);
        }

        .project-info {
          padding: 20px;
        }

        .project-info > span {
          color: var(--teal);
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .project-info h3 {
          margin: 10px 0;
          font-size: 17px;
        }

        .project-info p {
          margin-bottom: 0;
          color: var(--grey);
          font-size: 12px;
          line-height: 1.8;
        }

        .portfolio-note {
          margin-top: 22px;
          color: var(--grey);
          font-size: 11px;
          text-align: center;
        }

        .contact {
          background: var(--light);
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 22px;
          font-size: 13px;
        }

        .contact-detail svg {
          color: var(--teal);
          flex-shrink: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 28px;
          border: 1px solid #e1e9ef;
          border-radius: 9px;
          background: white;
        }

        .contact-form h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .contact-form label {
          color: #334e68;
          font-size: 12px;
          font-weight: 700;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #d8e1e9;
          border-radius: 5px;
          outline: none;
          color: var(--navy);
          background: white;
          font-size: 12px;
        }

        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          border-color: var(--teal);
        }

        .contact-form textarea {
          resize: vertical;
        }

        .contact-form button {
          width: 100%;
          margin-top: 8px;
        }

        .contact-form small {
          color: var(--grey);
          font-size: 10px;
          line-height: 1.6;
          text-align: center;
        }

        .footer {
          padding: 30px 0;
          color: white;
          background: var(--navy-dark);
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-logo {
          color: white;
        }

        .footer-inner p,
        .footer-inner > span {
          color: #c2d0dc;
          font-size: 11px;
        }

        @media (max-width: 850px) {
          .hero-grid,
          .about-grid,
          .contact-grid {
            gap: 30px;
          }

          .navigation {
            gap: 17px;
          }

          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .container {
            width: calc(100% - 36px);
          }

          .nav {
            min-height: 68px;
          }

          .menu-button {
            display: block;
          }

          .navigation {
            position: absolute;
            top: 68px;
            left: 0;
            right: 0;
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 12px 22px 20px;
            background: white;
            border-bottom: 1px solid #e2eaf0;
          }

          .navigation.open {
            display: flex;
          }

          .navigation a {
            padding: 13px 0;
            border-bottom: 1px solid #edf1f5;
          }

          .hero {
            padding: 60px 0;
          }

          .hero-grid,
          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 43px;
          }

          .main-image {
            height: 330px;
          }

          .section {
            padding: 65px 0;
          }

          .portfolio-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .hero h1 {
            font-size: 37px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .hero-buttons .button {
            width: 100%;
          }

          .services-grid,
          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .main-image {
            height: 280px;
          }

          .about-image {
            height: 280px;
          }

          .contact-form {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}