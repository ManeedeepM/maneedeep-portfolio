import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { portfolioData } from './data/portfolioData';
import { 
  Github, Linkedin, Mail, ExternalLink, Code2, Copy, Check,
  Terminal, ShieldCheck, Award, Briefcase, GraduationCap, Send, 
  Menu, X, Sparkles, Layers, Cpu, Database, CheckCircle2, Lock
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Full-Stack & AI', 'QA & Automation', 'Machine Learning & Web'];

  const filteredProjects = portfolioData.projects.filter(p => {
    const matchesTab = activeTab === 'All' || p.category === activeTab;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.stack.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.85 }
    });
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-mono text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            &lt;Maneedeep /&gt;
          </a>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition">Education</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition shadow-md shadow-cyan-500/20">
              Get in Touch
            </a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3 text-sm">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300">Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300">Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300">Projects</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300">Education</a>
          </div>
        )}
      </nav>

      {/* Hero Header */}
      <header className="pt-24 pb-10 max-w-6xl mx-auto px-4 relative z-10">
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
          <div className="h-44 sm:h-64 w-full bg-slate-800 overflow-hidden relative">
            <img src="/banner.png" alt="Cover Banner" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>

          <div className="px-6 pb-8 pt-0 relative flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5 -mt-16 sm:-mt-20">
              <div className="relative group">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full ring-4 ring-slate-950 overflow-hidden bg-slate-800 shadow-xl flex-shrink-0">
                  <img src="/profile.jpg" alt={portfolioData.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950" title="Open to opportunities"></span>
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
                  {portfolioData.name}
                  <Sparkles className="text-cyan-400" size={20} />
                </h1>
                <p className="text-cyan-400 font-mono text-sm max-w-2xl">{portfolioData.headline}</p>
                <p className="text-xs text-slate-400">{portfolioData.location}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-500 text-xs text-slate-300 transition"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>
              <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-white transition">
                <Github size={16} />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-white transition">
                <Linkedin size={16} />
              </a>
              <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition shadow-lg shadow-cyan-500/10">
                <Mail size={15} /> Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 space-y-16 pb-20 relative z-10">
        
        {/* Professional Summary */}
        <section id="about" className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <Terminal className="text-cyan-400" size={20} /> Professional Summary
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            {portfolioData.summary}
          </p>
        </section>

        {/* Technical Arsenal */}
        <section id="skills" className="space-y-6">
          <div className="flex items-center gap-2">
            <Code2 className="text-cyan-400" size={22} />
            <h2 className="text-2xl font-bold text-white">Technical Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4 hover:border-slate-700 transition">
              <div className="flex items-center gap-2 text-cyan-400">
                <Layers size={18} />
                <h3 className="font-semibold text-sm tracking-wider uppercase">Frontend Engineering</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.frontend.map(s => (
                  <span key={s} className="px-3 py-1 text-xs rounded-md bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:border-cyan-500 transition cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4 hover:border-slate-700 transition">
              <div className="flex items-center gap-2 text-blue-400">
                <Database size={18} />
                <h3 className="font-semibold text-sm tracking-wider uppercase">Backend & Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...portfolioData.skills.backend, ...portfolioData.skills.databases].map(s => (
                  <span key={s} className="px-3 py-1 text-xs rounded-md bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:border-blue-500 transition cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4 hover:border-slate-700 transition">
              <div className="flex items-center gap-2 text-emerald-400">
                <Cpu size={18} />
                <h3 className="font-semibold text-sm tracking-wider uppercase">QA, Cloud & AI</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...portfolioData.skills.testingQA, ...portfolioData.skills.toolsPractices].map(s => (
                  <span key={s} className="px-3 py-1 text-xs rounded-md bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:border-emerald-500 transition cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="space-y-6">
          <div className="flex items-center gap-2">
            <Briefcase className="text-cyan-400" size={22} />
            <h2 className="text-2xl font-bold text-white">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-xl bg-slate-900 border border-slate-800 space-y-4 hover:border-slate-700 transition relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 text-sm font-medium">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{exp.duration}</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="text-cyan-400" size={22} />
              <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                placeholder="Filter by skill or keyword..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500"
              />
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      activeTab === cat ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((p) => (
              <div 
                key={p.id} 
                onClick={() => setSelectedProject(p)}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/60 flex flex-col justify-between transition cursor-pointer group shadow-lg hover:shadow-cyan-500/5 relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wide">{p.category}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-emerald-500/20">{p.metrics}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition flex items-center justify-between">
                    {p.title}
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-5 mt-4 border-t border-slate-800/80">
                  {p.stack.map(st => (
                    <span key={st} className="px-2.5 py-0.5 rounded text-xs bg-slate-950 text-slate-300 font-mono border border-slate-800">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="text-cyan-400" size={20} /> Education
            </h2>
            <div className="space-y-3">
              {portfolioData.education.map((edu, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <h3 className="font-semibold text-white text-sm">{edu.institution}</h3>
                  <p className="text-xs text-slate-400">{edu.degree}</p>
                  <p className="text-xs font-mono text-cyan-400 pt-1">{edu.duration}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="text-cyan-400" size={20} /> Certifications
            </h2>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3.5">
              {portfolioData.certifications.map((cert, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <ShieldCheck size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 max-w-2xl mx-auto shadow-2xl relative">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
            <p className="text-sm text-slate-400">Send an inquiry directly or reach out via LinkedIn/Email.</p>
          </div>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
              <input required type="text" className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition" placeholder="Recruiter / Engineer Name" />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
              <input required type="email" className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition" placeholder="name@company.com" />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
              <textarea required rows="4" className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition" placeholder="Discussing full-stack, QA or technical roles..."></textarea>
            </div>
            <button type="submit" className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-cyan-500/20">
              <Send size={16} /> Send Message
            </button>
            {contactSubmitted && (
              <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-mono mt-3">
                <CheckCircle2 size={16} /> Message sent successfully! I'll be in touch soon.
              </div>
            )}
          </form>
        </section>

      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase">{selectedProject.category}</span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-white p-1">
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.description}</p>
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400">Tech Stack:</span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map(st => (
                  <span key={st} className="px-2.5 py-0.5 rounded text-xs bg-slate-950 text-slate-300 font-mono border border-slate-800">
                    {st}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800">
              {selectedProject.github ? (
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-center text-white transition flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Github size={14} /> View GitHub Repository
                </a>
              ) : (
                <div className="w-full py-2.5 rounded-lg bg-slate-950 text-xs font-mono text-slate-400 text-center flex items-center justify-center gap-2 border border-slate-800">
                  <Lock size={14} className="text-cyan-400" /> Internal / Proprietary Repository
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500 font-mono">
        © 2026 Maneedeep Mangapoti • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}