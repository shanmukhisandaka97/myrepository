import React from 'react';
import { Shield, Lock, Database, Activity } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data, stats }) => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwwfHx8fDE3NzM0MTA5Mjh8MA&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
      </div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-8 animate-float">
            <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 backdrop-blur-sm">
              <Lock className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
              <Database className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 backdrop-blur-sm">
              <Activity className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">{data.name}</h1>
          <p className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-4 animate-fade-in-delay-1">{data.title}</p>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">{data.tagline}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-3">
            <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">
              View My Work
            </Button>
            <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg">
              Contact Me
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-delay-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
