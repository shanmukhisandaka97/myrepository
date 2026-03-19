import { useState, useEffect } from "react";
import {
  Shield, Lock, Database, Activity,
  Mail, Linkedin, ExternalLink, Send,
  Award, Briefcase, GraduationCap,
  Code, Server, Monitor, CheckCircle,
  ChevronRight, Calendar, Star
} from "lucide-react";

/* ─── Inline CSS (from App.css + index.css animations) ─────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'IBM Plex Sans', sans-serif; background: #0f172a; }
    section { scroll-margin-top: 80px; }
    ::-webkit-scrollbar { width: 10px; }
    ::-webkit-scrollbar-track { background: #0f172a; }
    ::-webkit-scrollbar-thumb { background: #06b6d4; border-radius: 5px; }
    ::-webkit-scrollbar-thumb:hover { background: #0891b2; }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .animate-float        { animation: float 3s ease-in-out infinite; }
    .animate-fade-in      { animation: fade-in 0.6s ease-out; }
    .animate-fade-in-d1   { animation: fade-in 0.6s ease-out 0.2s both; }
    .animate-fade-in-d2   { animation: fade-in 0.6s ease-out 0.4s both; }
    .animate-fade-in-d3   { animation: fade-in 0.6s ease-out 0.6s both; }
    .animate-fade-in-d4   { animation: fade-in 0.6s ease-out 0.8s both; }
    .gradient-text {
      background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
  `}</style>
);

/* ─── Portfolio Data ────────────────────────────────────────────────────── */
const portfolioData = {
  personal: {
    name: "Shanmukhi Sai Priya Sandaka",
    title: "Technical Consultant | Microsoft Security, Azure Sentinel",
    location: "Boca Raton, Florida, United States",
    email: "saipriyasandaka@gmail.com",
    linkedin: "https://www.linkedin.com/in/shanmukhi-sai-priya-sandaka-b66391186",
    credly: "https://www.credly.com/users/shanmukhi-saipriya-sandaka.cabf3a3c",
    bio: "Cybersecurity Consultant with hands-on experience in cloud security, SIEM solutions, and threat detection. Proficient in managing enterprise security tools, analyzing security events, and ensuring compliance in cloud environments.",
    tagline: "Securing Digital Assets Through Advanced Threat Intelligence"
  },
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Certifications", value: "5+" },
    { label: "Security Tools", value: "10+" },
    { label: "Client Projects", value: "20+" }
  ],
  skills: {
    cloud: ["Microsoft Azure", "Azure Sentinel", "Azure Security Center", "AWS"],
    siem: ["IBM QRadar", "Azure Sentinel", "Splunk", "ArcSight"],
    security: ["CrowdStrike", "Endpoint Security", "Threat Intelligence", "Incident Response"],
    compliance: ["SIEM Management", "Security Monitoring", "Vulnerability Assessment", "Risk Management"],
    programming: ["Python", "PowerShell", "KQL", "SQL"]
  },
  experience: [
    {
      id: 1, company: "Cyber Salus", role: "Cybersecurity Intern",
      period: "January 2026 - Present", location: "United States",
      description: "Contributing to advanced cybersecurity initiatives and threat analysis projects.",
      responsibilities: ["Assisting in security assessments and vulnerability analysis", "Supporting incident response operations", "Researching emerging cyber threats and mitigation strategies"]
    },
    {
      id: 2, company: "IBM", role: "Technical Consultant",
      period: "December 2021 - December 2023", location: "Bangalore, Karnataka, India",
      description: "Led enterprise security implementations and managed SIEM solutions for global clients.",
      responsibilities: ["Implemented and managed IBM QRadar SIEM for enterprise clients", "Conducted advanced threat analysis and incident response", "Developed custom security rules and correlation logic", "Provided technical consultation on cloud security architecture"]
    },
    {
      id: 3, company: "Infosys", role: "Senior System Engineer",
      period: "December 2018 - December 2021", location: "Mysore, India",
      description: "Managed security operations and implemented threat detection solutions.",
      responsibilities: ["Monitored and analyzed security events using SIEM platforms", "Performed vulnerability assessments and penetration testing", "Automated security workflows and incident response procedures", "Collaborated with cross-functional teams on security initiatives"]
    }
  ],
  projects: [
    {
      id: 1, title: "Azure Sentinel Implementation", subtitle: "Cloud-Native SIEM Solution",
      description: "Deployed and configured Azure Sentinel for enterprise cloud security monitoring and threat detection across multi-cloud environments.",
      image: "https://images.unsplash.com/photo-1714846201700-356b34475448?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxzZWN1cml0eSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NzM0MTA5Mzd8MA&ixlib=rb-4.1.0&q=85",
      technologies: ["Azure Sentinel", "KQL", "Azure Logic Apps", "Microsoft Defender", "SOAR"],
      challenges: "Integrating multiple data sources and creating custom detection rules for sophisticated threats.",
      solution: "Designed and implemented 50+ custom analytics rules, automated incident response workflows, and integrated threat intelligence feeds.",
      impact: "Reduced incident detection time by 60% and improved security posture through automated threat hunting."
    },
    {
      id: 2, title: "IBM QRadar SIEM Optimization", subtitle: "Enterprise Security Operations",
      description: "Architected and optimized IBM QRadar deployment for large-scale enterprise security monitoring and compliance reporting.",
      image: "https://images.unsplash.com/photo-1675627453084-505806a00406?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NzM0MTA5Mzd8MA&ixlib=rb-4.1.0&q=85",
      technologies: ["IBM QRadar", "Python", "Custom Rules", "Threat Intelligence", "API Integration"],
      challenges: "High volume of security events causing alert fatigue and delayed response times.",
      solution: "Implemented advanced correlation rules, tuned false positives, and created automated response playbooks using Python scripts.",
      impact: "Decreased false positives by 75% and enhanced threat detection accuracy with custom use cases."
    },
    {
      id: 3, title: "CrowdStrike Endpoint Protection", subtitle: "Advanced Threat Detection & Response",
      description: "Deployed CrowdStrike Falcon platform for endpoint detection and response across 5,000+ endpoints in enterprise environment.",
      image: "https://images.unsplash.com/photo-1762340915700-356b34475448?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx0aHJlYXQlMjBkZXRlY3Rpb258ZW58MHx8fHwxNzczNDEwOTQxfDA&ixlib=rb-4.1.0&q=85",
      technologies: ["CrowdStrike Falcon", "EDR", "Threat Hunting", "PowerShell", "IOC Analysis"],
      challenges: "Detecting and responding to advanced persistent threats (APTs) in real-time.",
      solution: "Configured behavioral analytics, implemented proactive threat hunting procedures, and integrated with SIEM for centralized visibility.",
      impact: "Identified and mitigated 15+ advanced threats before they could cause damage, achieving 99.9% endpoint protection rate."
    }
  ],
  certifications: [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
    { name: "Certified in Cybersecurity (CC)", issuer: "ISC2", year: "2023" },
    { name: "Microsoft Security, Compliance, and Identity Fundamentals", issuer: "Microsoft", year: "2023" },
    { name: "Ethical Hacking", issuer: "Infosys", year: "2022" },
    { name: "Energy, Environment and Utilities Industry Jumpstart", issuer: "IBM", year: "2022" }
  ],
  education: [
    { institution: "Florida Atlantic University", degree: "Master of Science", field: "Information Technology", period: "2024 - 2025", status: "In Progress" },
    { institution: "Jawaharlal Nehru Technological University", degree: "Bachelor of Technology", field: "Computer Science", period: "2014 - 2018", status: "Completed" }
  ]
};

/* ─── Tiny helpers ─────────────────────────────────────────────────────── */
const Tag = ({ label }) => (
  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs rounded-full font-medium">{label}</span>
);
const SectionHeading = ({ children }) => (
  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{children}</h2>
    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full" />
  </div>
);

/* ─── Header ───────────────────────────────────────────────────────────── */
const Header = ({ activeSection, scrollTo }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navItems = [
    { id: "home", label: "Home" }, { id: "about", label: "About" },
    { id: "skills", label: "Skills" }, { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" }, { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">SSP Sandaka</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 cursor-pointer bg-transparent border-0 ${activeSection === item.id ? "text-cyan-400" : "text-gray-300"}`}>
                {item.label}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo("contact")}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer shadow-lg shadow-cyan-500/25">
            Get In Touch
          </button>
        </div>
      </nav>
    </header>
  );
};

/* ─── Hero ─────────────────────────────────────────────────────────────── */
const Hero = ({ data, stats, scrollTo }) => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* BG */}
    <div className="absolute inset-0 z-0"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwwfHx8fDE3NzM0MTA5Mjh8MA&ixlib=rb-4.1.0&q=85)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
    </div>
    {/* Grid overlay */}
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(6,182,212,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,.1) 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
    </div>
    <div className="container mx-auto px-6 z-10 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Floating icons */}
        <div className="flex justify-center gap-6 mb-8 animate-float">
          {[Shield, Lock, Database, Activity].map((Icon, i) => (
            <div key={i} className={`p-3 rounded-lg border backdrop-blur-sm ${i % 2 === 0 ? "bg-cyan-500/10 border-cyan-500/30" : "bg-blue-500/10 border-blue-500/30"}`}>
              <Icon className={`w-8 h-8 ${i % 2 === 0 ? "text-cyan-400" : "text-blue-400"}`} />
            </div>
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">{data.name}</h1>
        <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-4 animate-fade-in-d1">{data.title}</p>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-d2">{data.tagline}</p>
        <div className="flex flex-wrap justify-center gap-4 mb-14 animate-fade-in-d3">
          <button onClick={() => scrollTo("projects")}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors cursor-pointer shadow-lg shadow-cyan-500/25">
            View My Work
          </button>
          <button onClick={() => scrollTo("contact")}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-lg text-lg font-semibold transition-colors cursor-pointer bg-transparent">
            Contact Me
          </button>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-d4">
          {stats.map((s, i) => (
            <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">{s.value}</div>
              <div className="text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── About ────────────────────────────────────────────────────────────── */
const About = ({ data }) => (
  <section id="about" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>About Me</SectionHeading>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">{data.bio}</p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            With over 5 years of experience in cybersecurity, I have successfully secured client infrastructures using advanced tools like{" "}
            <span className="text-cyan-400 font-semibold">Azure Sentinel</span>,{" "}
            <span className="text-cyan-400 font-semibold">IBM QRadar</span>, and{" "}
            <span className="text-cyan-400 font-semibold">CrowdStrike</span>. My expertise lies in providing advanced threat analysis to mitigate cyber risks and ensure robust security postures.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Currently pursuing my Master's in Information Technology at Florida Atlantic University, I am seeking opportunities as a{" "}
            <span className="text-cyan-400 font-semibold">Cybersecurity Analyst</span> or{" "}
            <span className="text-cyan-400 font-semibold">Technical Consultant</span> where I can apply my expertise in incident response, security monitoring, and cloud security.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Skills ───────────────────────────────────────────────────────────── */
const skillCategories = [
  { key: "cloud", label: "Cloud Platforms", icon: Server },
  { key: "siem", label: "SIEM Solutions", icon: Monitor },
  { key: "security", label: "Security Tools", icon: Shield },
  { key: "compliance", label: "Compliance & Risk", icon: CheckCircle },
  { key: "programming", label: "Programming", icon: Code }
];
const Skills = ({ data }) => (
  <section id="skills" className="py-24 bg-slate-800">
    <div className="container mx-auto px-6">
      <SectionHeading>Technical Skills</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map(({ key, label, icon: Icon }) => (
          <div key={key} className="bg-slate-900 border border-slate-700 hover:border-cyan-500/40 rounded-2xl p-6 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-cyan-500/10 rounded-lg"><Icon className="w-5 h-5 text-cyan-400" /></div>
              <h3 className="text-white font-semibold">{label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">{data[key].map(s => <Tag key={s} label={s} />)}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Experience ───────────────────────────────────────────────────────── */
const Experience = ({ data }) => (
  <section id="experience" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <SectionHeading>Experience</SectionHeading>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cyan-500/20" />
        <div className="space-y-10">
          {data.map(exp => (
            <div key={exp.id} className="relative pl-16">
              <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-cyan-500 border-2 border-slate-900 shadow-lg shadow-cyan-500/50" />
              <div className="bg-slate-800 border border-slate-700 hover:border-cyan-500/40 rounded-2xl p-6 md:p-8 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                      <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />{r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Project card visual banners (SVG, no external URLs) ──────────────── */
const ProjectBanner = ({ id }) => {
  const configs = {
    1: {
      gradient: "from-blue-900 via-cyan-900 to-slate-900",
      icon: <Monitor className="w-12 h-12 text-cyan-400 opacity-80" />,
      label: "AZURE SENTINEL",
      dots: "#06b6d4"
    },
    2: {
      gradient: "from-slate-900 via-indigo-900 to-blue-900",
      icon: <Database className="w-12 h-12 text-indigo-400 opacity-80" />,
      label: "IBM QRADAR",
      dots: "#818cf8"
    },
    3: {
      gradient: "from-slate-900 via-red-900/50 to-slate-900",
      icon: <Shield className="w-12 h-12 text-red-400 opacity-80" />,
      label: "CROWDSTRIKE",
      dots: "#f87171"
    }
  };
  const c = configs[id] || configs[1];
  return (
    <div className={`relative overflow-hidden h-48 bg-gradient-to-br ${c.gradient} flex items-center justify-center`}>
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(${c.dots}33 1px, transparent 1px), linear-gradient(90deg, ${c.dots}33 1px, transparent 1px)`,
        backgroundSize: "24px 24px"
      }} />
      {/* Glowing circle behind icon */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="p-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
          {c.icon}
        </div>
        <span className="text-xs font-bold tracking-widest text-white/40 font-mono">{c.label}</span>
      </div>
      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/20 rounded-tl" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/20 rounded-tr" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white/20 rounded-bl" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/20 rounded-br" />
    </div>
  );
};

/* ─── Projects ─────────────────────────────────────────────────────────── */
const Projects = ({ data }) => (
  <section id="projects" className="py-24 bg-slate-800">
    <div className="container mx-auto px-6">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map(p => (
          <div key={p.id} className="bg-slate-900 border border-slate-700 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all group">
            <div className="relative">
              <ProjectBanner id={p.id} />
              <div className="absolute bottom-3 left-4">
                <span className="text-xs text-cyan-400 font-medium bg-cyan-500/10 border border-cyan-500/30 px-2 py-1 rounded-full">{p.subtitle}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">{p.technologies.map(t => <Tag key={t} label={t} />)}</div>
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-3">
                <p className="text-cyan-400 text-xs font-semibold mb-1">IMPACT</p>
                <p className="text-gray-300 text-xs leading-relaxed">{p.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Certifications ───────────────────────────────────────────────────── */
const Certifications = ({ data, credly }) => (
  <section id="certifications" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <SectionHeading>Certifications</SectionHeading>
      <div className="max-w-4xl mx-auto grid gap-4">
        {data.map((cert, i) => (
          <div key={i} className="bg-slate-800 border border-slate-700 hover:border-cyan-500/40 rounded-xl p-5 flex items-center gap-5 transition-all">
            <div className="p-3 bg-cyan-500/10 rounded-lg flex-shrink-0">
              <Award className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">{cert.name}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </div>
            <span className="text-cyan-400 text-sm font-bold bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full flex-shrink-0">{cert.year}</span>
          </div>
        ))}
        <div className="text-center mt-6">
          <a href={credly} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors text-sm shadow-lg shadow-cyan-500/25">
            <Star className="w-4 h-4" /> View All on Credly
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Education ────────────────────────────────────────────────────────── */
const Education = ({ data }) => (
  <section id="education" className="py-24 bg-slate-950">
    <div className="container mx-auto px-6">
      <SectionHeading>Education</SectionHeading>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((edu, i) => (
          <div key={i} className="bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-2xl p-6 transition-all group">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="flex-1">
                <span className={`inline-block mb-2 text-xs font-semibold px-3 py-1 rounded-full border ${
                  edu.status === "In Progress"
                    ? "bg-green-500/20 text-green-400 border-green-500/30"
                    : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                }`}>{edu.status}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
                <p className="text-cyan-400 font-semibold text-sm mt-1">{edu.field}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 font-medium">{edu.institution}</p>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{edu.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Contact ──────────────────────────────────────────────────────────── */
const Contact = ({ data }) => (
  <section id="contact" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <SectionHeading>Get In Touch</SectionHeading>
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12">
          <p className="text-gray-300 text-center text-lg mb-8">
            I'm currently seeking opportunities as a Cybersecurity Analyst or Technical Consultant.
            Let's connect and discuss how I can help secure your organization's digital assets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="flex flex-col items-center p-6 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all group">
              <div className="p-4 bg-cyan-500/10 rounded-full mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href={`mailto:${data.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm break-all text-center mb-4">
                {data.email}
              </a>
              <a href={`mailto:${data.email}`}
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                <Send className="w-4 h-4" /> Send Email
              </a>
            </div>
            {/* LinkedIn */}
            <div className="flex flex-col items-center p-6 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all group">
              <div className="p-4 bg-cyan-500/10 rounded-full mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Linkedin className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm mb-4 text-center">Connect with me professionally</p>
              <a href={data.linkedin} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                <ExternalLink className="w-4 h-4" /> View Profile
              </a>
            </div>
          </div>
          <div className="mt-8 p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-center">
            <p className="text-gray-400 text-sm">
              <span className="text-cyan-400 font-semibold">Location:</span> {data.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Footer ───────────────────────────────────────────────────────────── */
const Footer = ({ data }) => (
  <footer className="bg-slate-950 border-t border-slate-800">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">SSP Sandaka</span>
          </div>
          <p className="text-gray-400 text-sm">Cybersecurity professional specializing in cloud security, SIEM solutions, and threat detection.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            {["about", "projects", "experience", "contact"].map(id => (
              <a key={id} href={`#${id}`}
                className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm capitalize">{id}</a>
            ))}
          </div>
        </div>
        {/* Connect */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="space-y-3">
            <a href={`mailto:${data.email}`} className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href={data.credly} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              <ExternalLink className="w-4 h-4" /> Credly
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} {data.name}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

/* ─── Root ─────────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home","about","skills","experience","projects","certifications","education","contact"];
      const pos = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id); break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { personal, stats, skills, experience, projects, certifications, education } = portfolioData;

  return (
    <>
      <GlobalStyles />
      <div style={{ background: "#0f172a", minHeight: "100vh" }}>
        <Header activeSection={activeSection} scrollTo={scrollTo} />
        <Hero data={personal} stats={stats} scrollTo={scrollTo} />
        <About data={personal} />
        <Skills data={skills} />
        <Experience data={experience} />
        <Projects data={projects} />
        <Certifications data={certifications} credly={personal.credly} />
        <Education data={education} />
        <Contact data={personal} />
        <Footer data={personal} />
      </div>
    </>
  );
}
