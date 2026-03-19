import React from 'react';
import { Card } from './ui/card';

const About = ({ data }) => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">About Me</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12 rounded-full"></div>
          <Card className="bg-slate-800 border-slate-700 p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">{data.bio}</p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Skilled in{' '}
              <span className="text-cyan-400 font-semibold">threat hunting</span>,{' '}
              <span className="text-cyan-400 font-semibold">EDR/XDR platforms</span>, and{' '}
              <span className="text-cyan-400 font-semibold">automating security workflows with Python</span>.
              My experience spans enterprise SIEM management across{' '}
              <span className="text-cyan-400 font-semibold">Microsoft Sentinel</span>,{' '}
              <span className="text-cyan-400 font-semibold">IBM QRadar</span>, and{' '}
              <span className="text-cyan-400 font-semibold">Splunk</span> — with hands-on expertise in
              IoMT vulnerability management, forensic analysis, and cloud security operations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Graduate of{' '}
              <span className="text-cyan-400 font-semibold">Florida Atlantic University</span> with a
              Master of Science in Information Technology (Specialisation in Cybersecurity), achieving a{' '}
              <span className="text-cyan-400 font-semibold">4.0 GPA</span>. I am seeking to leverage my
              background as a{' '}
              <span className="text-cyan-400 font-semibold">Cybersecurity Analyst</span> or{' '}
              <span className="text-cyan-400 font-semibold">Security Operations Engineer</span> to strengthen
              organizational security posture and drive proactive risk mitigation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
