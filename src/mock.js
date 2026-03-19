export const portfolioData = {
  personal: {
    name: "Shanmukhi Sai Priya Sandaka",
    title: "Cybersecurity Response Engineer",
    location: "Boca Raton, Florida, United States",
    phone: "+1 (561) 562-0917",
    email: "saipriyasandaka@gmail.com",
    linkedin: "https://www.linkedin.com/in/shanmukhi-sai-priya-sandaka-b66391186",
    credly: "https://www.credly.com/users/shanmukhi-saipriya-sandaka.cabf3a3c",
    bio: "Cybersecurity Response Engineer with senior-level expertise in enterprise and cloud security operations across multi-location environments. Led IoMT vulnerability management program, reducing device risk scores by 30% and streamlined incident response using Microsoft Sentinel and Splunk, cutting mean time to remediation by 40%.",
    tagline: "Securing Digital Assets Through Advanced Threat Intelligence"
  },

  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Certifications", value: "9+" },
    { label: "Security Tools", value: "15+" },
    { label: "Client Projects", value: "20+" }
  ],

  skills: {
    siem: ["Azure Sentinel", "Splunk", "IBM QRadar"],
    edr: ["CrowdStrike", "Trend Micro", "Red Clock"],
    vulnerability: ["Nessus", "Qualys", "ZAP", "Cynerio", "Paloalto Cortex"],
    cloud: ["Microsoft Azure", "AWS"],
    email: ["Proofpoint", "Microsoft 365 Defender"],
    firewalls: ["Checkpoint", "Palo Alto"],
    ticketing: ["ServiceNow", "VSOC", "Swimlane"],
    programming: ["Python", "JavaScript", "SQL", "SPL"],
    networking: ["OSI Layers", "Routers", "Switches", "Windows", "Linux", "macOS"]
  },

  experience: [
    {
      id: 1,
      company: "Cyber Salus",
      role: "Cybersecurity Response Engineer",
      period: "January 2026 - Present",
      location: "United States",
      description: "Specialized in IoMT vulnerability management and incident response for healthcare security operations.",
      responsibilities: [
        "Specialized in IoMT vulnerability management, assessing risks in connected medical devices using CVSS and threat intelligence, enabling faster remediation of critical device vulnerabilities and improved compliance posture",
        "Supported incident response and vulnerability remediation using ServiceNow and VSOC tools, ensuring alignment with healthcare security and compliance standards, reducing average incident resolution time",
        "Collaborated with clinical, IT, and compliance teams to implement security controls that protected patient safety and maintained uninterrupted clinical operations, resulting in zero security-related service disruptions"
      ]
    },
    {
      id: 2,
      company: "IBM",
      role: "Technical Consultant, Cyber Security (GSOC Wood PLC)",
      period: "December 2021 - December 2023",
      location: "Bangalore, Karnataka, India",
      description: "Led enterprise cybersecurity operations managing security incidents and alerts across SIEM platforms for global clients.",
      responsibilities: [
        "Led enterprise cybersecurity operations by managing security incidents, alerts, cases, and logs across Microsoft Sentinel, IBM QRadar, and Splunk, ensuring timely detection, response, and remediation of threats",
        "Analysed cyber threat intelligence and attack surface exposure to identify risks across endpoints, networks, and cloud environments, recommending architecture and remediation changes",
        "Conducted advanced threat hunting, malware investigations, and forensic analysis using CrowdStrike and Trend Micro EDR/XDR technologies, improving detection accuracy and malware containment",
        "Collaborated with security architecture, GRC, and IT infrastructure teams using MITRE ATT&CK mapping to align remediation with NIST frameworks, ensuring audit readiness",
        "Mentored Tier 1 and Tier 2 SOC analysts, improving incident handling efficiency, investigation quality, and operational maturity"
      ]
    },
    {
      id: 3,
      company: "Infosys",
      role: "M1 Services Associate Consultant – Cloud Security Analyst",
      period: "December 2018 - December 2021",
      location: "Mysore, India",
      description: "Managed cloud security operations and cyber threat intelligence workflows with Azure Sentinel across multi-tenant enterprise environments.",
      responsibilities: [
        "Managed cloud security operations and cyber threat intelligence workflows with Azure Sentinel, enabling faster detection and remediation across multi-tenant enterprise cloud environments",
        "Conducted log analysis, phishing investigations, malware analysis, and exploitation technique validation using Splunk, Python, and ZAP aligned with MITRE ATT&CK and Cyber Kill Chain",
        "Developed and maintained incident response playbooks and automated remediation workflows using Azure Logic Apps, improving response time and consistency",
        "Supported firewall compliance and vulnerability remediation using Qualys and Microsoft Defender to identify security gaps and apply patches",
        "Produced security metrics and executive-level reports, improving visibility into threat trends, malware activity, and incident outcomes"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "IoMT Vulnerability Management",
      subtitle: "Healthcare Device Security",
      description: "Led IoMT vulnerability management program at Cyber Salus, assessing risks in connected medical devices and ensuring compliance posture across healthcare environments.",
      image: "",
      technologies: ["CVSS", "Cynerio", "ServiceNow", "VSOC"],
      challenges: "Assessing and remediating vulnerabilities in connected medical devices while maintaining uninterrupted clinical operations.",
      solution: "Implemented structured IoMT risk assessment using CVSS scoring and threat intelligence feeds, coordinating remediation with clinical and IT teams.",
      impact: "Reduced device risk scores by 30% and achieved zero security-related service disruptions across clinical operations."
    },
    {
      id: 2,
      title: "SIEM Operations & Threat Hunting",
      subtitle: "Enterprise SOC at IBM",
      description: "Led enterprise cybersecurity operations across Microsoft Sentinel, IBM QRadar, and Splunk for Wood PLC, managing incidents and driving advanced threat hunting initiatives.",
      image: "",
      technologies: ["Microsoft Sentinel", "IBM QRadar", "Splunk", "CrowdStrike", "Trend Micro", "MITRE ATT&CK"],
      challenges: "Managing high-volume security incidents across multiple SIEM platforms while minimizing false positives and alert fatigue.",
      solution: "Conducted advanced threat hunting and forensic analysis using EDR/XDR platforms, tuned detection rules, and aligned remediation efforts to NIST frameworks.",
      impact: "Improved detection accuracy, lowered false-positive alerts, and mentored Tier 1 & Tier 2 SOC analysts to increase operational maturity."
    },
    {
      id: 3,
      title: "Azure Sentinel Cloud Security",
      subtitle: "Multi-Tenant Cloud Operations",
      description: "Managed end-to-end cloud security operations at Infosys using Azure Sentinel, automating incident response and conducting threat intelligence workflows across enterprise environments.",
      image: "",
      technologies: ["Azure Sentinel", "Azure Logic Apps", "Splunk", "Python", "Qualys", "Microsoft Defender"],
      challenges: "Detecting and remediating threats across complex multi-tenant enterprise cloud environments with limited automation.",
      solution: "Developed automated incident response playbooks with Azure Logic Apps and conducted phishing/malware investigations aligned with MITRE ATT&CK and Cyber Kill Chain.",
      impact: "Cut mean time to remediation by 40% and produced executive-level security metrics improving visibility into threat trends."
    }
  ],

  certifications: [
    { name: "Microsoft Certified: Security Operations Analyst Associate", issuer: "Microsoft", year: "2024" },
    { name: "Microsoft Certified Azure Security Engineer (AZ-500)", issuer: "Microsoft", year: "2023" },
    { name: "ACE-S Applied Cyber Security Essentials Specialist", issuer: "Purdue University", year: "2023" },
    { name: "CompTIA Security+ SYO-601", issuer: "CompTIA", year: "2023" },
    { name: "SC-500: Security, Compliance, and Identity Fundamentals", issuer: "Microsoft", year: "2023" },
    { name: "Splunk Fundamentals User Certification", issuer: "Splunk", year: "2022" },
    { name: "IBM QRadar SIEM Foundation", issuer: "IBM", year: "2022" },
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2022" },
    { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2022" }
  ],

  education: [
    {
      institution: "Florida Atlantic University",
      degree: "Master of Science",
      field: "Information Technology (Specialisation in Cybersecurity)",
      period: "Jan 2024 - Dec 2025",
      gpa: "4.0 / 4.0",
      coursework: "Computer and Data Security, Artificial Intelligence, AI with Cybersecurity, Modern Cryptography, Information Assurance Security, Database Systems, Software Engineering",
      status: "Completed"
    },
    {
      institution: "Jawaharlal Nehru Technological University",
      degree: "Bachelor of Technology",
      field: "Electrical and Electronics Engineering",
      period: "Jul 2014 - Jul 2018",
      gpa: "3.25 / 4.0",
      coursework: "",
      status: "Completed"
    }
  ]
};
