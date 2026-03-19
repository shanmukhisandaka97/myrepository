import React from 'react';
import { ChevronRight } from 'lucide-react';

const Experience = ({ data }) => (
  <section id="experience" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Experience</h2>
      <div className="w-24 h-1 bg-cyan-500 mx-auto mb-14 rounded-full"></div>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cyan-500/20" />
        <div className="space-y-10">
          {data.map((exp) => (
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
                      <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {r}
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

export default Experience;
