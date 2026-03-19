import React from 'react';
import { GraduationCap, Calendar, Star, BookOpen } from 'lucide-react';

const Education = ({ data }) => (
  <section id="education" className="py-24 bg-slate-950">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Education</h2>
      <div className="w-24 h-1 bg-cyan-500 mx-auto mb-14 rounded-full"></div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((edu, i) => (
          <div key={i} className="bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-2xl p-6 transition-all group">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="flex-1">
                <span className="inline-block mb-2 text-xs font-semibold px-3 py-1 rounded-full border bg-green-500/20 text-green-400 border-green-500/30">
                  {edu.status}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
                <p className="text-cyan-400 font-semibold text-sm mt-1">{edu.field}</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300 font-medium">{edu.institution}</p>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{edu.period}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Star className="w-4 h-4 flex-shrink-0 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">GPA: {edu.gpa}</span>
              </div>
              {edu.coursework && (
                <div className="flex items-start gap-2 text-gray-400 mt-2">
                  <BookOpen className="w-4 h-4 flex-shrink-0 mt-0.5 text-cyan-500" />
                  <p className="text-xs text-gray-400 leading-relaxed">{edu.coursework}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
