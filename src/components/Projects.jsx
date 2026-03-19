import React from 'react';
import { Monitor, Database, Shield, Activity } from 'lucide-react';

const Tag = ({ label }) => (
  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs rounded-full font-medium">
    {label}
  </span>
);

const ProjectBanner = ({ id }) => {
  const configs = {
    1: { gradient: 'from-green-900 via-teal-900 to-slate-900',   icon: <Activity className="w-12 h-12 text-green-400 opacity-80" />,  label: 'IOMT SECURITY',    dots: '#4ade80' },
    2: { gradient: 'from-blue-900 via-indigo-900 to-slate-900',  icon: <Monitor className="w-12 h-12 text-blue-400 opacity-80" />,    label: 'SIEM & SOC OPS',   dots: '#60a5fa' },
    3: { gradient: 'from-cyan-900 via-blue-900 to-slate-900',    icon: <Shield className="w-12 h-12 text-cyan-400 opacity-80" />,     label: 'AZURE SENTINEL',   dots: '#06b6d4' },
  };
  const c = configs[id] || configs[1];
  return (
    <div className={`relative overflow-hidden h-48 bg-gradient-to-br ${c.gradient} flex items-center justify-center`}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(${c.dots}33 1px, transparent 1px), linear-gradient(90deg, ${c.dots}33 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="p-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">{c.icon}</div>
        <span className="text-xs font-bold tracking-widest text-white/40 font-mono">{c.label}</span>
      </div>
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/20 rounded-tl" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/20 rounded-tr" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white/20 rounded-bl" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/20 rounded-br" />
    </div>
  );
};

const Projects = ({ data }) => (
  <section id="projects" className="py-24 bg-slate-800">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Projects</h2>
      <div className="w-24 h-1 bg-cyan-500 mx-auto mb-14 rounded-full"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((p) => (
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

export default Projects;
