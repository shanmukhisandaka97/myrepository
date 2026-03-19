import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <Header activeSection={activeSection} />
      <main>
        <Hero data={portfolioData.personal} stats={portfolioData.stats} />
        <About data={portfolioData.personal} />
        <Skills data={portfolioData.skills} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Certifications data={portfolioData.certifications} credly={portfolioData.personal.credly} />
        <Education data={portfolioData.education} />
        <Contact data={portfolioData.personal} />
      </main>
      <Footer data={portfolioData.personal} />
    </div>
  );
};

export default Portfolio;
