import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Twitter, ArrowDown, Sparkles } from 'lucide-react';

const ROLES = [
  'Full Stack Web Developer',
  'Frontend Developer',
  'React Developer',
  'Node.js Developer',
  'UI/UX Enthusiast',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stagger = (i) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center pt-20">
        {/* Left: Text */}
        <div>
          {/* Badge */}
          <div style={stagger(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
            <span className="glow-dot" />
            Available for opportunities
          </div>

          {/* Greeting */}
          <p style={stagger(1)} className="text-slate-400 text-lg font-medium mb-2">
            Hi there 👋, I'm
          </p>

          {/* Name */}
          <h1
            style={stagger(2)}
            className="text-5xl md:text-7xl font-extrabold text-white leading-none mb-4 tracking-tight"
          >
            Fardeen{' '}
            <span className="gradient-text">Shaik</span>
          </h1>

          {/* Typewriter role */}
          <div style={stagger(3)} className="flex items-center gap-2 mb-6 h-10">
            <span className="text-xl md:text-2xl font-mono text-accent-400">&lt;</span>
            <span className="text-xl md:text-2xl font-semibold text-slate-200">
              {displayed}
            </span>
            <span className="w-0.5 h-7 bg-accent-400 cursor-blink" />
            <span className="text-xl md:text-2xl font-mono text-accent-400">/&gt;</span>
          </div>

          {/* Description */}
          <p style={stagger(4)} className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
            A passionate Freelancer building{' '}
            <span className="text-primary-400 font-semibold">scalable web applications</span>{' '}
            with the MERN stack. I turn ideas into elegant digital experiences.
          </p>

          {/* CTAs */}
          <div style={stagger(5)} className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              <Sparkles size={18} />
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Hire Me
            </a>
          </div>

          {/* Social Links */}
          <div style={stagger(6)} className="flex items-center gap-4">
            <span className="text-slate-500 text-sm">Connect:</span>
            {[
              { Icon: Github, href: 'https://github.com/fardeen-574', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/fardeen-sami-shaik/', label: 'Twitter' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-600/10 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: 3D Avatar / Visual */}
        <div style={stagger(3)} className="flex justify-center items-center relative">
          <div className="relative">
            {/* Rotating rings */}
            <div
              className="absolute inset-0 rounded-full border border-primary-500/20"
              style={{ animation: 'orbit-ring 8s linear infinite', width: '340px', height: '340px', top: '-40px', left: '-40px' }}
            />

            {/* Avatar container */}
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full p-1" style={{ background: 'linear-gradient(135deg, #6366f1, #10b981)' }}>
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                  {/* Avatar placeholder - replace with your photo */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-600/30 to-accent-500/20 flex flex-col items-center justify-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -top-4 -right-8 px-3 py-1.5 bg-dark-700 border border-white/10 rounded-xl text-xs font-medium text-primary-400 shadow-xl"
                style={{ animation: 'float 5s ease-in-out infinite 1s' }}
              >
                ⚛️ React
              </div>
              <div
                className="absolute -bottom-4 -left-8 px-3 py-1.5 bg-dark-700 border border-white/10 rounded-xl text-xs font-medium text-accent-400 shadow-xl"
                style={{ animation: 'float 7s ease-in-out infinite 0.5s' }}
              >
                🟢 Node.js
              </div>
              <div
                className="absolute -bottom1/4 -left-8 px-3 py-1.5 bg-dark-700 border border-white/10 rounded-xl text-xs font-medium text-accent-400 shadow-xl"
                style={{ animation: 'float 7s ease-in-out infinite 0.5s' }}
              >
                ⚛ Express.js
              </div>
              <div
                className="absolute top-1/2 -right-16 px-3 py-1.5 bg-dark-700 border border-white/10 rounded-xl text-xs font-medium text-yellow-400 shadow-xl"
                style={{ animation: 'float 6s ease-in-out infinite 2s' }}
              >
                🍃 MongoDB
              </div>
            </div>

            {/* Stats floating cards */}
            <div
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4"
            >
              {[
                { val: '5+', label: 'Projects' },
                { val: '1+', label: 'Year Learning' },
                { val: '∞', label: 'Passion' },
              ].map(({ val, label }) => (
                <div key={label} className="card-glass px-4 py-2 text-center min-w-[70px]">
                  <div className="text-lg font-bold text-white">{val}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-500/50 to-transparent" />
        <ArrowDown size={14} className="text-primary-500 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
