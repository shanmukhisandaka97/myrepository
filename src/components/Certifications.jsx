import React from 'react';
import { Award, Star } from 'lucide-react';

const Certifications = ({ data, credly }) => (
  <section id="certifications" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Certifications</h2>
      <div className="w-24 h-1 bg-cyan-500 mx-auto mb-14 rounded-full"></div>
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
            <span className="text-cyan-400 text-sm font-bold bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full flex-shrink-0">
              {cert.year}
            </span>
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

export default Certifications;
