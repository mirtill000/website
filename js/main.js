/* ==========================================================================
   BOSE — Cyber Security Expert Portfolio
   All repeated content (services, skills, timeline, certifications,
   projects) lives in the SITE_DATA object below — edit it to customize
   the site without touching the HTML.
   ========================================================================== */

const SITE_DATA = {
  roles: [
    "Cyber Security Director",
    "IT Risk & Fraud Management Leader",
    "Global Security Program Manager",
    "CISM-Certified Security Leader"
  ],

  services: [
    {
      icon: "01",
      title: "Penetration Testing",
      desc: "Simulated attacks against your web apps, networks and infrastructure to uncover exploitable vulnerabilities.",
      tags: ["Web", "Network", "API"]
    },
    {
      icon: "02",
      title: "Vulnerability Assessment",
      desc: "Systematic scanning and manual review to identify, classify and prioritize security weaknesses.",
      tags: ["CVE", "OWASP", "Reporting"]
    },
    {
      icon: "03",
      title: "Red Team Operations",
      desc: "Full-scope adversary simulation testing your people, processes and technology against real-world TTPs.",
      tags: ["MITRE ATT&CK", "Social Eng."]
    },
    {
      icon: "04",
      title: "Security Audits & Compliance",
      desc: "Gap analysis against ISO 27001, NIST and SOC 2 to help you meet regulatory and contractual requirements.",
      tags: ["ISO 27001", "NIST", "GDPR"]
    },
    {
      icon: "05",
      title: "Incident Response",
      desc: "Rapid investigation, containment and remediation support when things go wrong — plus post-mortem reporting.",
      tags: ["Forensics", "DFIR"]
    },
    {
      icon: "06",
      title: "Security Awareness Training",
      desc: "Hands-on workshops and phishing simulations that turn your team into your strongest line of defense.",
      tags: ["Training", "Phishing"]
    }
  ],

  skillCategories: [
    {
      title: "// Offensive Security",
      skills: [
        { name: "Penetration Testing", level: 96 },
        { name: "Exploit Development", level: 85 },
        { name: "Web App Security (OWASP)", level: 94 },
        { name: "Red Teaming", level: 88 }
      ]
    },
    {
      title: "// Programming & Scripting",
      skills: [
        { name: "Python", level: 92 },
        { name: "Bash / Shell", level: 90 },
        { name: "PowerShell", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    }
  ],

  tools: [
    "Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark",
    "Cobalt Strike", "Nessus", "OWASP ZAP", "John the Ripper",
    "Hashcat", "BloodHound", "Ghidra", "Docker", "AWS Security"
  ],

  experience: [
    {
      date: "2019 — Present",
      role: "Cyber Security Director",
      company: "Campari Group",
      desc: "Leading global cyber security strategy and incident response, including the rollout of Microsoft Defender and Sentinel across the group following the 2020 ransomware attack."
    },
    {
      date: "2015 — 2019",
      role: "Cyber Security Manager",
      company: "Mediobanca",
      desc: "Managed cyber security operations, risk assessment and fraud prevention programs for one of Italy's leading investment banking groups."
    },
    {
      date: "2013 — 2015",
      role: "Cyber Security Manager",
      company: "EFSA (European Food Safety Authority)",
      desc: "Oversaw IT security and risk management, protecting the agency's systems and data across its EU-wide operations."
    },
    {
      date: "2008 — 2013",
      role: "Cyber Security Manager",
      company: "Telecom Italia",
      desc: "Managed cyber security and fraud management initiatives for one of Italy's largest telecommunications providers."
    },
    {
      date: "2008 — 2013",
      role: "Cyber Security Manager",
      company: "Emaze",
      desc: "In parallel, provided cyber security management and consulting support at Emaze."
    }
  ],

  certifications: [
    { code: "CISM", name: "Certified Information Security Manager", org: "ISACA" }
  ],

  projects: [
    {
      title: "FinTech Platform — Red Team Assessment",
      desc: "Full-scope red team engagement simulating an APT actor targeting a payments platform, resulting in critical findings across auth and infra.",
      tags: ["Red Team", "Cloud", "AWS"]
    },
    {
      title: "Healthcare SaaS — Web App Pentest",
      desc: "Identified and helped remediate a chain of vulnerabilities allowing cross-tenant data access in a multi-tenant patient records system.",
      tags: ["Web", "OWASP Top 10"]
    },
    {
      title: "Retail Network — Infrastructure Audit",
      desc: "Enterprise-wide network penetration test across 40+ store locations, uncovering a critical Active Directory privilege escalation path.",
      tags: ["Network", "Active Directory"]
    },
    {
      title: "Open Source — Recon Automation Toolkit",
      desc: "Built and maintain an open-source Python toolkit that automates OSINT and attack-surface recon for pentest engagements.",
      tags: ["Open Source", "Python"]
    },
    {
      title: "Bug Bounty — Critical RCE Disclosure",
      desc: "Responsibly disclosed a critical remote code execution vulnerability in a widely-used enterprise VPN appliance.",
      tags: ["Bug Bounty", "RCE"]
    },
    {
      title: "Gov. Agency — Security Awareness Program",
      desc: "Designed and delivered a security awareness program including phishing simulations for a 2,000+ employee public sector agency.",
      tags: ["Training", "Phishing"]
    }
  ]
};

/* ---------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initHeader();
  initMobileNav();
  initTypedRoles();
  renderServices();
  renderSkills();
  renderTools();
  renderTimeline();
  renderCertifications();
  renderProjects();
  initScrollReveal();
  initActiveNav();
  initStatCounters();
  initSkillBars();
  initContactForm();
  initBackToTop();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------- Preloader ---------- */
function initPreloader() {
  const el = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => el.classList.add("is-hidden"), 500);
  });
  // Safety net in case 'load' fires slowly / already fired
  setTimeout(() => el.classList.add("is-hidden"), 2500);
}

/* ---------- Sticky header ---------- */
function initHeader() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Mobile nav ---------- */
function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Typing effect for hero roles ---------- */
function initTypedRoles() {
  const el = document.getElementById("typedRole");
  const roles = SITE_DATA.roles;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) { el.textContent = roles[0]; return; }

  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 65);
  }
  tick();
}

/* ---------- Render: Services ---------- */
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = SITE_DATA.services.map((s) => `
    <div class="card reveal">
      <div class="card__icon">${s.icon}</div>
      <h3 class="card__title">${s.title}</h3>
      <p class="card__desc">${s.desc}</p>
      <div class="card__tags">
        ${s.tags.map((t) => `<span class="card__tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ---------- Render: Skills ---------- */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SITE_DATA.skillCategories.map((cat) => `
    <div class="skill-cat reveal">
      <h3 class="skill-cat__title">${cat.title}</h3>
      ${cat.skills.map((s) => `
        <div class="skill">
          <div class="skill__head"><span>${s.name}</span><span>${s.level}%</span></div>
          <div class="skill__bar"><div class="skill__fill" data-level="${s.level}"></div></div>
        </div>
      `).join("")}
    </div>
  `).join("");
}

function renderTools() {
  const cloud = document.getElementById("toolsCloud");
  cloud.innerHTML = SITE_DATA.tools.map((t) => `<span class="tag-pill">${t}</span>`).join("");
}

/* ---------- Render: Timeline ---------- */
function renderTimeline() {
  const el = document.getElementById("timeline");
  el.innerHTML = SITE_DATA.experience.map((e) => `
    <div class="timeline-item reveal">
      <span class="timeline-item__date">${e.date}</span>
      <h3 class="timeline-item__role">${e.role}</h3>
      <p class="timeline-item__company">${e.company}</p>
      <p class="timeline-item__desc">${e.desc}</p>
    </div>
  `).join("");
}

/* ---------- Render: Certifications ---------- */
function renderCertifications() {
  const grid = document.getElementById("certsGrid");
  grid.innerHTML = SITE_DATA.certifications.map((c) => `
    <div class="cert-card reveal">
      <div class="cert-card__badge">${c.code.slice(0, 4)}</div>
      <p class="cert-card__name">${c.name}</p>
      <p class="cert-card__org">${c.org}</p>
    </div>
  `).join("");
}

/* ---------- Render: Projects ---------- */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = SITE_DATA.projects.map((p) => `
    <div class="card reveal">
      <h3 class="card__title">${p.title}</h3>
      <p class="card__desc">${p.desc}</p>
      <div class="card__tags">
        ${p.tags.map((t) => `<span class="card__tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((item) => observer.observe(item));
}

/* ---------- Active nav link on scroll ---------- */
function initActiveNav() {
  const sections = document.querySelectorAll("main > section[id], .hero[id]");
  const links = document.querySelectorAll(".nav__link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach((section) => observer.observe(section));
}

/* ---------- Animated stat counters ---------- */
function initStatCounters() {
  const stats = document.querySelectorAll(".stat__number");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach((el) => observer.observe(el));
}

/* ---------- Skill bar fill animation ---------- */
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const bars = entry.target.querySelectorAll(".skill__fill");
      bars.forEach((bar) => { bar.style.width = bar.dataset.level + "%"; });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll(".skill-cat").forEach((el) => observer.observe(el));
}

/* ---------- Contact form (client-side only — wire up a backend or a
   service like Formspree/EmailJS to actually send messages) ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const email = data.get("email");
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!form.checkValidity() || !emailValid) {
      status.textContent = "Please fill in all fields with a valid email address.";
      status.className = "form__status is-error";
      return;
    }

    status.textContent = `Message received — I'll get back to you at ${email} within 24 hours.`;
    status.className = "form__status is-success";
    form.reset();
  });
}

/* ---------- Back to top ---------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
