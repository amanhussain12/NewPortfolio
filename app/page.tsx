"use client";

import { useEffect, useState } from "react";

/* =========================================================
   EASY-TO-EDIT PORTFOLIO INFORMATION
   Update these values with your real information.
   ========================================================= */

const portfolioInfo = {
  name: "Aman Hussain",
  role: "MERN Stack Developer",
  email: "amanhus977@gmail.com",
  github: "https://github.com/amanhussain12",
  linkedin: "https://www.linkedin.com/in/aman-hussain-75b1a3422/",
  resume: "/Aman-Hussain-Resume.pdf",
};

const navItems = ["home", "about", "skills", "work", "contact"] as const;
type SectionId = (typeof navItems)[number];
type GoToSection = (id: SectionId) => void;

const skills = [
  ["HTML5", "HTML"],
  ["CSS3", "CSS"],
  ["JavaScript", "JS"],
  ["React.js", "⚛"],
  ["Node.js", "NODE"],
  ["Express.js", "EX"],
  ["MongoDB", "M"],
  ["Tailwind", "TW"],
  ["Github", "GIT"],
  ["REST APIs", "API"],
  ["Postman", "POST"],
  ["Vercel", "▲"],
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
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    number: "02",
    title: "E-Commerce Store",
    type: "Full Stack Commerce",
    description:
      "A responsive shopping experience with authentication, product management, cart, secure checkout and an admin dashboard.",
    tags: ["MERN", "Stripe", "Redux"],
    tone: "cyan",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    number: "03",
    title: "TaskFlow",
    type: "Productivity SaaS",
    description:
      "Collaborative task management with teams, filters, status updates and clean project dashboards.",
    tags: ["React", "Express", "Socket.io"],
    tone: "orange",
    liveUrl: "#",
    sourceUrl: "#",
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
          I&apos;m a <strong>MERN Stack Developer</strong> building fast,
          scalable and user-friendly web applications with React, Node.js,
          Express and MongoDB.
        </p>

        <div className="hero-tech">
          <span>React</span><i />
          <span>Node.js</span><i />
          <span>Express</span><i />
          <span>MongoDB</span>
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
          <a href={portfolioInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
          <a href={portfolioInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">IN</a>
        </div>
      </div>

      <CodePreview />
    </section>
  );
}

function CodePreview() {
  return (
    <div className="hero-visual" aria-label="Animated developer code preview">
      <div className="code-card">
        <div className="code-top">
          <div><i /><i /><i /></div>
          <span>aman.jsx</span>
          <b>⌘</b>
        </div>

        <pre><code>
          <span className="purple">const</span> developer = {"{"}<br />
          {"  "}name: <span className="green">&quot;Aman Hussain&quot;</span>,<br />
          {"  "}role: <span className="green">&quot;MERN Developer&quot;</span>,<br />
          {"  "}skills: [<span className="green">&quot;React&quot;</span>, <span className="green">&quot;Node&quot;</span>,<br />
          {"           "}<span className="green">&quot;Express&quot;</span>, <span className="green">&quot;MongoDB&quot;</span>],<br />
          {"  "}passion: <span className="purple">true</span>,<br />
          {"  "}build: () =&gt; <span className="green">&quot;Great products&quot;</span><br />
          {"}"};
        </code></pre>

        <div className="status">
          <span>● JavaScript</span>
          <span>Ln 8, Col 2</span>
        </div>
      </div>

      <div className="float react">⚛ <span>React</span></div>
      <div className="float node">JS <span>Node</span></div>
      <div className="float mongo">M <span>MongoDB</span></div>
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
            Hello! I&apos;m Aman Hussain, a passionate full-stack developer
            specializing in the MERN stack. I create digital experiences that
            are functional, fast, intuitive and enjoyable to use.
          </p>
          <p>
            I work across the complete development cycle, from planning
            databases and building secure APIs to crafting responsive React
            interfaces and deploying production-ready applications.
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
      <div className="kicker reveal"><span>02.</span> My toolkit</div>

      <div className="section-head reveal">
        <h2>Technologies I<br /><span>work with.</span></h2>
        <p>
          I use modern, reliable tools to transform ideas into performant and
          maintainable digital products.
        </p>
      </div>

      <div className="skill-grid">
        {skills.map(([name, mark]) => (
          <div className="skill reveal" key={name}>
            <b>{mark}</b>
            <span>{name}</span>
            <i />
          </div>
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
      <div className="kicker reveal"><span>03.</span> Selected work</div>

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

              <div className="links">
                <a href={project.liveUrl}>Live demo ↗</a>
                <a href={project.sourceUrl}>Source code ↗</a>
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

      <div className="mock">
        <aside />
        <div>
          <i /><b /><b />
          <section><span /><span /><span /></section>
        </div>
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
      <div className="kicker reveal"><span>04.</span> What&apos;s next?</div>

      <div className="contact-inner reveal">
        <div className="available"><i /> Available for freelance work</div>
        <h2>Let&apos;s build something<br /><span>great together.</span></h2>
        <p>
          Have a project in mind, a question, or just want to say hello? My
          inbox is always open.
        </p>
        <a className="email" href={`mailto:${portfolioInfo.email}`}>
          {portfolioInfo.email} <span>↗</span>
        </a>
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
      <div>
        <a href={portfolioInfo.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={portfolioInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${portfolioInfo.email}`}>Email</a>
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
      <SkillsSection />
      <WorkSection />
      <ContactSection go={go} />
    </main>
  );
}