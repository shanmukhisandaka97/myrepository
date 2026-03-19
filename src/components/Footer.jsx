import React from 'react';
import { Shield, Mail, Linkedin, ExternalLink } from 'lucide-react';

const Footer = ({ data }) => (
  <footer className="bg-slate-950 border-t border-slate-800">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">SSP Sandaka</span>
          </div>
          <p className="text-gray-400 text-sm">Cybersecurity professional specializing in cloud security, SIEM solutions, and threat detection.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            {['about', 'projects', 'experience', 'contact'].map(id => (
              <a key={id} href={`#${id}`}
                className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm capitalize">{id}</a>
            ))}
          </div>
        </div>
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
      <div className="border-t border-slate-800 pt-8 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} {data.name}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
