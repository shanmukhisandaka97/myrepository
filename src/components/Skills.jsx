import React from 'react';
import { Shield, Server, Monitor, CheckCircle, Code, Mail, Wifi, Layers } from 'lucide-react';

const Tag = ({ label }) => (
  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs rounded-full font-medium">
    {label}
  </span>
);

const skillCategories = [
  { key: 'siem',          label: 'SIEM Tools',                   icon: Monitor },
  { key: 'edr',           label: 'EDR / XDR',                    icon: Shield },
  { key: 'vulnerability', label: 'Vulnerability Management',      icon: CheckCircle },
  { key: 'cloud',         label: 'Cloud Platforms',               icon: Server },
  { key: 'email',         label: 'Email Security',                icon: Mail },
  { key: 'firewalls',     label: 'Firewalls',                     icon: Layers },
  { key: 'ticketing',     label: 'Ticketing & SOAR',              icon: Wifi },
  { key: 'programming',   label: 'Programming Languages',         icon: Code },
  { key: 'networking',    label: 'Networking & OS',               icon: Server },
];

const Skills = ({ data }) => (
  <section id="skills" className="py-24 bg-slate-800">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Technical Skills</h2>
      <div className="w-24 h-1 bg-cyan-500 mx-auto mb-14 rounded-full"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map(({ key, label, icon: Icon }) => (
          <div key={key} className="bg-slate-900 border border-slate-700 hover:border-cyan-500/40 rounded-2xl p-6 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold">{label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {(data[key] || []).map(skill => <Tag key={skill} label={skill} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
