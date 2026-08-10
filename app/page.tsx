"use client";

import { useEffect, useState } from "react";

/* =========================================================
   EASY-TO-EDIT PORTFOLIO INFORMATION
   Update these values with your real information.
   ========================================================= */

const portfolioInfo = {
  name: "Aman Hussain",
  role: "MERN Stack & WordPress Developer",
  email: "amanhus977@gmail.com",
  emailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=amanhus977@gmail.com",
  github: "https://github.com/amanhussain12",
  linkedin: "https://www.linkedin.com/in/aman-hussain-75b1a3422/",
  instagram: "https://www.instagram.com/theamxnh19",
  facebook: "https://www.facebook.com/theamxnh19",
  discord: "https://discord.com/channels/1535715521822068786/boosts",
  upwork: "https://www.upwork.com/freelancers/~01801cd98b63040220",
  resume: "/Aman-Hussain-Resume.pdf",
};

const socialLinks = [
  { name: "GitHub", href: portfolioInfo.github, icon: "github" },
  { name: "LinkedIn", href: portfolioInfo.linkedin, icon: "linkedin" },
  { name: "Instagram", href: portfolioInfo.instagram, icon: "instagram" },
  { name: "Facebook", href: portfolioInfo.facebook, icon: "facebook" },
  { name: "Discord", href: portfolioInfo.discord, icon: "discord" },
  { name: "Upwork", href: portfolioInfo.upwork, icon: "upwork" },
] as const;

type SocialIconName = (typeof socialLinks)[number]["icon"];

const navItems = [
  "home",
  "about",
  "experience",
  "skills",
  "work",
  "contact",
] as const;
type SectionId = (typeof navItems)[number];
type GoToSection = (id: SectionId) => void;

const skillGroups = [
  {
    mark: "</>",
    title: "Frontend",
    description: "Responsive interfaces with clean structure, modern styling and smooth interactions.",
    tools: ["HTML5", "CSS3", "JavaScript", "React.js"],
    accent: "purple",
  },
  {
    mark: "{ }",
    title: "Backend",
    description: "Scalable server-side applications, databases and production-ready REST APIs.",
    tools: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    accent: "cyan",
  },
  {
    mark: "WP",
    title: "WordPress & UI",
    description: "Fast business websites that are responsive, polished and simple to manage.",
    tools: ["WordPress", "Tailwind CSS", "Elementor", "Responsive UI"],
    accent: "blue",
  },
  {
    mark: "⌘",
    title: "Tools & Deployment",
    description: "A practical workflow for testing, version control and reliable deployment.",
    tools: ["Git", "Postman", "Vercel", "GitHub"],
    accent: "green",
  },
];

const services = [
  {
    icon: "</>",
    title: "Frontend Development",
    text: "Responsive, accessible and animated interfaces built with React and modern CSS.",
  },
  {
    icon: "{ }",
    title: "Backend Development",
    text: "Secure REST APIs, authentication and scalable server-side logic with Node.js.",
  },
  {
    icon: "DB",
    title: "Full Stack Applications",
    text: "End-to-end MERN applications, from database architecture to polished deployment.",
  },
  {
    icon: "WP",
    title: "WordPress Development",
    text: "Professional, responsive and easy-to-manage WordPress websites for modern businesses.",
  },
];

const projects = [
  {
    number: "01",
    title: "Athllo Platform",
    type: "MERN • Sports Tech",
    description:
      "A modern platform connecting athletes with brands and sponsors through profiles, discovery, search and sponsorship workflows.",
    tags: ["React", "Node.js", "MongoDB"],
    tone: "violet",
    image: "/projects/athllo-platform.svg",
  },
  {
    number: "02",
    title: "E-Commerce Store",
    type: "Full Stack Commerce",
    description:
      "A responsive shopping experience with authentication, product management, cart, secure checkout and an admin dashboard.",
    tags: ["MERN", "Stripe", "Redux"],
    tone: "cyan",
    image: "/projects/ecommerce-store.jpg",
  },
  {
    number: "03",
    title: "TaskFlow",
    type: "Productivity SaaS",
    description:
      "Collaborative task management with teams, filters, status updates and clean project dashboards.",
    tags: ["React", "Express", "Socket.io"],
    tone: "orange",
    image: "/projects/taskflow.jpg",
  },
  {
    number: "04",
    title: "Nexa Business Website",
    type: "WordPress • Corporate",
    description:
      "A polished corporate website with service pages, lead-focused content, responsive layouts and an easy-to-manage WordPress backend.",
    tags: ["WordPress", "Elementor", "SEO"],
    tone: "rose",
    image: "/projects/nexa-business.webp",
  },
  {
    number: "05",
    title: "Foodly Ordering App",
    type: "MERN • Food Delivery",
    description:
      "A modern food-ordering experience featuring restaurant discovery, menu browsing, cart management and a clean mobile-first interface.",
    tags: ["React", "Node.js", "MongoDB"],
    tone: "green",
    image: "/projects/foodly-ordering.webp",
  },
];

/* =========================================================
   BRAND COMPONENT
   ========================================================= */

function Brand({ go }: { go: GoToSection }) {
  return (
    <button
      className="brand"
      onClick={() => go("home")}
      aria-label="Go to homepage"
    >
      <span className="brand-icon">A</span>
      <span className="brand-name">
        Aman<span className="brand-dot">.</span>
      </span>
      <span className="brand-code">DEV</span>
    </button>
  );
}

function SocialIcon({ name }: { name: SocialIconName }) {
  const props = { viewBox: "0 0 24 24", width: 18, height: 18, "aria-hidden": true };

  if (name === "instagram") {
    return <svg {...props} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" /></svg>;
  }

  const paths: Record<Exclude<SocialIconName, "instagram">, string> = {
    github: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
    linkedin: "M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.25 6.92 1.96 1.96 0 0 0 5.25 3ZM19.5 12.98c0-3.16-1.69-4.63-3.94-4.63-1.82 0-2.63 1-3.08 1.7V8.5H9.1V19h3.38v-5.2c0-1.37.26-2.7 1.96-2.7 1.67 0 1.69 1.56 1.69 2.8V19h3.37v-6.02Z",
    facebook: "M14.2 8.2V6.4c0-.87.58-1.08 1-1.08h2.54V2.03L14.25 2C10.8 2 9.7 4.05 9.7 6.22v1.98H7v3.7h2.7V22h4.5V11.9h3.04l.47-3.7H14.2Z",
    discord: "M19.45 5.34A16.6 16.6 0 0 0 15.3 4l-.5 1.02a15.5 15.5 0 0 0-5.58 0L8.7 4a16.76 16.76 0 0 0-4.16 1.34C1.9 9.25 1.2 13.06 1.56 16.82a16.72 16.72 0 0 0 5.08 2.56l1.23-1.68c-.67-.25-1.3-.55-1.9-.9l.47-.36c3.67 1.7 7.65 1.7 11.27 0l.48.36c-.61.36-1.25.66-1.91.9l1.22 1.68a16.65 16.65 0 0 0 5.08-2.56c.43-4.36-.74-8.13-3.13-11.48ZM8.52 14.6c-1.1 0-2-1.02-2-2.27 0-1.26.88-2.28 2-2.28s2.03 1.03 2 2.28c0 1.25-.89 2.27-2 2.27Zm6.96 0c-1.1 0-2-1.02-2-2.27 0-1.26.88-2.28 2-2.28s2.03 1.03 2 2.28c0 1.25-.88 2.27-2 2.27Z",
    upwork: "M7.3 6v6.2c0 1.8-1 2.8-2.4 2.8s-2.4-1-2.4-2.8V6H0v6.3c0 3.2 2 5.2 4.9 5.2s4.9-2 4.9-5.2V6H7.3Zm10.4 0c-2 0-3.5 1.3-4.1 3.4-.8-1.2-1.5-2.6-1.9-3.9H9.1c.7 2.5 1.9 5.1 3.6 7l-1.3 5h2.7l.9-3.3c.9.3 1.8.5 2.8.5H19v-2.5h-1.2c-.6 0-1.2-.1-1.8-.3.1-2 .8-3.4 1.9-3.4.8 0 1.4.7 1.4 1.6 0 .3 0 .5-.1.8l2.3 1c.2-.6.3-1.2.3-1.8 0-2.4-1.6-4.1-4.1-4.1Z",
  };
  return <svg {...props} fill="currentColor"><path d={paths[name]} /></svg>;
}

function SocialLinks({ showLabels = false }: { showLabels?: boolean }) {
  return socialLinks.map((social) => <a className={`social-link ${social.icon}`} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} title={social.name} key={social.name}><SocialIcon name={social.icon} />{showLabels && <span>{social.name}</span>}</a>);
}

/* =========================================================
   NAVBAR COMPONENT
   ========================================================= */

function Navbar({
  menu,
  active,
  setMenu,
  go,
}: {
  menu: boolean;
  active: SectionId;
  setMenu: (value: boolean) => void;
  go: GoToSection;
}) {
  return (
    <header className="navbar">
      <Brand go={go} />

      <nav
        className={menu ? "nav open" : "nav"}
        aria-label="Main navigation"
      >
        <div className="nav-menu">
          {navItems.map((item, index) => (
            <button
              key={item}
              className={`nav-item ${active === item ? "active" : ""}`}
              onClick={() => go(item)}
            >
              <small>0{index + 1}</small>
              <span>{item}</span>
            </button>
          ))}
        </div>

        <button className="mobile-hire" onClick={() => go("contact")}>
          Start a project <span>↗</span>
        </button>
      </nav>

      <button className="hire" onClick={() => go("contact")}>
        <span className="hire-status" />
        <span className="hire-text">
          Let&apos;s talk
          <small>Available now</small>
        </span>
        <span className="hire-arrow">↗</span>
      </button>

      <button
        className={`hamburger ${menu ? "active" : ""}`}
        onClick={() => setMenu(!menu)}
        aria-label="Toggle navigation menu"
        aria-expanded={menu}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

/* =========================================================
   HERO COMPONENT
   ========================================================= */

function HeroSection({ go }: { go: GoToSection }) {
  return (
    <section id="home" className="hero">
      <div className="grid-bg" />
      <div className="glow one" />
      <div className="glow two" />

      <div className="hero-copy">
        <div className="hero-badge">
          <span className="status-dot" />
          <span>
            Available for new opportunities
            <small>Open to remote and freelance work</small>
          </span>
        </div>

        <div className="hero-heading">
          <p className="hello">
            <span>01.</span> Hello, I&apos;m
          </p>

          <h1>
            Aman<span className="name-gradient"> Hussain.</span>
          </h1>

          <h2>
            I build modern experiences
            <br />
            for the <em>web.</em>
          </h2>
        </div>

        <p className="intro">
          I&apos;m a <strong>MERN Stack &amp; WordPress Developer</strong> building
          fast, scalable and user-friendly websites and web applications.
        </p>

        <div className="hero-tech">
          <span>React</span><i />
          <span>Node.js</span><i />
          <span>Express</span><i />
          <span>MongoDB</span><i />
          <span>WordPress</span>
        </div>

        <div className="actions">
          <button className="primary" onClick={() => go("work")}>
            <span>View my work</span>
            <b>↗</b>
          </button>

          <a
            className="resume-button"
            href={portfolioInfo.resume}
            download
          >
            <span className="resume-icon">↓</span>
            <span className="resume-text">
              Download Resume
              <small>PDF document</small>
            </span>
          </a>
        </div>

        <div className="social">
          <span>Connect with me</span>
          <i />
          <SocialLinks />
        </div>
      </div>

      <HeroPortrait />
    </section>
  );
}

function HeroPortrait() {
  return (
    <div className="hero-visual portrait-visual" aria-label="Portrait of Aman Hussain">
      <div className="portrait-glow" />
      <div className="portrait-grid" />
      <div className="portrait-frame">
        <span className="portrait-label">MERN × WORDPRESS</span>
        <img
          src="/images/aman-hussain-professional.png"
          alt="Aman Hussain, MERN Stack and WordPress Developer"
        />
        <div className="portrait-caption">
          <span>Based in Pakistan</span>
          <b>Available worldwide</b>
        </div>
      </div>
      <div className="float react">⚛ <span>React</span></div>
      <div className="float node">JS <span>Node.js</span></div>
      <div className="float mongo">WP <span>WordPress</span></div>
      <div className="orbit a" />
      <div className="orbit b" />
    </div>
  );
}

/* =========================================================
   ABOUT COMPONENT
   ========================================================= */

function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="kicker reveal"><span>01.</span> About me</div>

      <div className="about-grid">
        <div className="reveal">
          <h2>Turning ideas into<br /><span>digital reality.</span></h2>
          <div className="terminal"><b>$</b> whoami <span>_</span></div>
        </div>

        <div className="about-text reveal">
          <p>
            Hello! I&apos;m Aman Hussain, a MERN Stack and WordPress Developer. I
            create digital experiences that are functional, fast, intuitive
            and enjoyable to use.
          </p>
          <p>
            I work across the complete development cycle, from planning
            databases and building secure APIs to crafting responsive React
            interfaces, professional WordPress websites and production-ready
            applications.
          </p>

          <div className="facts">
            <div><strong>100%</strong><span>Commitment</span></div>
            <div><strong>Full</strong><span>Stack focus</span></div>
            <div><strong>24/7</strong><span>Learning mode</span></div>
          </div>
        </div>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card reveal" key={service.title}>
            <div>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <span>Learn more →</span>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   EXPERIENCE COMPONENT
   ========================================================= */

function ExperienceSection() {
  return (
    <section id="experience" className="experience section">
      <div className="kicker reveal"><span>02.</span> Experience</div>

      <div className="section-head reveal">
        <h2>Where I&apos;ve<br /><span>worked.</span></h2>
        <p>
          Building reliable digital products across modern web development and
          content-managed business websites.
        </p>
      </div>

      <article className="experience-card reveal">
        <div className="experience-logo">
          <img src="/images/nowa-technologies.png" alt="Nowa Technologies logo" />
        </div>

        <div className="experience-company">
          <span>Professional Experience</span>
          <h3>Nowa Technologies</h3>
          <p>MERN Stack &amp; WordPress Developer</p>
        </div>

        <div className="experience-details">
          <p>
            Developing responsive web applications, reusable React interfaces,
            secure backend APIs and professional WordPress websites focused on
            performance, usability and real business goals.
          </p>

          <div className="experience-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>WordPress</span>
          </div>
        </div>
      </article>
    </section>
  );
}

/* =========================================================
   SKILLS COMPONENT
   ========================================================= */

function SkillsSection() {
  const mernStack = [
    ["M", "MongoDB", "Database"],
    ["E", "Express", "Backend"],
    ["R", "React", "Frontend"],
    ["N", "Node.js", "Runtime"],
  ];

  return (
    <section id="skills" className="skills section">
      <div className="kicker reveal"><span>03.</span> My toolkit</div>

      <div className="section-head reveal">
        <h2>Technologies I<br /><span>work with.</span></h2>
        <p>
          I use modern, reliable tools to transform ideas into performant and
          maintainable digital products.
        </p>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <article className={`skill-group ${group.accent} reveal`} key={group.title}>
            <div className="skill-group-top">
              <span className="skill-mark">{group.mark}</span>
              <small>0{index + 1}</small>
            </div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-tools">
              {group.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </article>
        ))}
      </div>

      <div className="mern reveal">
        {mernStack.map(([letter, name, category], index) => (
          <div className="mern-item" key={letter}>
            <span>{letter}</span>
            <p><b>{name}</b><small>{category}</small></p>
            {index < mernStack.length - 1 && <i>+</i>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS COMPONENT
   ========================================================= */

function WorkSection() {
  return (
    <section id="work" className="work section">
      <div className="kicker reveal"><span>04.</span> Selected work</div>

      <div className="section-head reveal">
        <h2>Things I&apos;ve<br /><span>built.</span></h2>
        <p>
          Projects that demonstrate my approach to solving problems with clean
          code and thoughtful user experiences.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project reveal" key={project.title}>
            <ProjectPreview project={project} alignRight={index % 2 === 1} />

            <div className="project-copy">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => <b key={tag}>{tag}</b>)}
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectPreview({
  project,
  alignRight,
}: {
  project: (typeof projects)[number];
  alignRight: boolean;
}) {
  const slug = project.title.toLowerCase().replaceAll(" ", "-");

  return (
    <div className={`project-screen ${project.tone} ${alignRight ? "right" : ""}`}>
      <div className="browser-bar">
        <i /><i /><i />
        <span>aman.dev/{slug}</span>
      </div>

      <div className="project-cover">
        <img src={project.image} alt={`${project.title} project cover`} loading="lazy" />
      </div>

      <small>{project.number}</small>
    </div>
  );
}

/* =========================================================
   CONTACT & FOOTER COMPONENTS
   ========================================================= */

function ContactSection({ go }: { go: GoToSection }) {
  return (
    <section id="contact" className="contact section">
      <div className="contact-glow" />
      <div className="kicker reveal"><span>05.</span> What&apos;s next?</div>

      <div className="contact-inner reveal">
        <div className="available"><i /> Available for freelance work</div>
        <h2>Let&apos;s build something<br /><span>great together.</span></h2>
        <p>
          Have a project in mind, a question, or just want to say hello? My
          inbox is always open.
        </p>
        <div className="contact-actions">
          <a
            className="email"
            href={portfolioInfo.emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Email ${portfolioInfo.email}`}
          >
            {portfolioInfo.email} <span>↗</span>
          </a>
          <a className="upwork-button" href={portfolioInfo.upwork} target="_blank" rel="noopener noreferrer">
            <SocialIcon name="upwork" /> Hire me on Upwork <span>↗</span>
          </a>
        </div>
      </div>

      <Footer go={go} />
    </section>
  );
}

function Footer({ go }: { go: GoToSection }) {
  return (
    <footer>
      <Brand go={go} />
      <p>Designed and built by Aman Hussain © 2026</p>
      <div className="footer-socials">
        <SocialLinks showLabels />
      </div>
    </footer>
  );
}

/* =========================================================
   MAIN PAGE COMPONENT
   ========================================================= */

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("show");

          if (entry.target.id && navItems.includes(entry.target.id as SectionId)) {
            setActive(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.18 },
    );

    document
      .querySelectorAll(".reveal, section[id]")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const go: GoToSection = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navbar menu={menu} active={active} setMenu={setMenu} go={go} />
      <HeroSection go={go} />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection go={go} />
    </main>
  );
}