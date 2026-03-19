import React from 'react';
import { Mail, Linkedin, ExternalLink, Send } from 'lucide-react';

const Contact = ({ data }) => (
  <section id="contact" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Get In Touch</h2>
      <div className="w-24 h-1 bg-cyan-500 mx-auto mb-14 rounded-full"></div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12">
          <p className="text-gray-300 text-center text-lg mb-8">
            I'm currently seeking opportunities as a Cybersecurity Analyst or Technical Consultant.
            Let's connect and discuss how I can help secure your organization's digital assets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

export default Contact;
