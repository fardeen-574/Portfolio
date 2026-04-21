import SectionWrapper from '../common/SectionWrapper';
import { GraduationCap, MapPin, Coffee, Rocket } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'Education', value: 'Master of Computer Applications', color: 'text-primary-400' },
  { icon: MapPin, label: 'Location', value: 'Hyderabad, India', color: 'text-accent-400' },
  { icon: Coffee, label: 'Coffee / Day', value: '1-2 Cups ☕', color: 'text-yellow-400' },
  { icon: Rocket, label: 'Goal', value: 'Full Stack Mastery', color: 'text-pink-400' },
];

const About = () => (
  <SectionWrapper id="about">
    {/* Divider */}
    <div className="flex items-center gap-4 mb-16">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>

    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Left: Visual */}
      <div className="relative flex justify-center">
        <div className="relative">
          {/* Main card */}
          <div className="card-glass p-8 w-72 text-center">
            <div
              className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl"
              style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(16,185,129,0.2))', border: '1px solid rgba(99,102,241,0.3)' }}
            >
              👨‍💻
            </div>
            <h3 className="text-white font-bold text-xl mb-1">Fardeen Shaik</h3>
            <p className="text-primary-400 text-sm mb-4">Full Stack Developer</p>
            <div className="flex justify-center gap-2 mb-6">
              {['React', 'Node', 'MongoDB','Express'].map((t) => (
                <span key={t} className="px-2 py-1 rounded-lg bg-primary-600/10 border border-primary-500/20 text-primary-400 text-xs">{t}</span>
              ))}
            </div>
            <div className="h-px bg-white/5 mb-4" />
            <p className="text-slate-500 text-xs">Open to work 🟢</p>
          </div>

          {/* Floating accent cards */}
          <div className="absolute -top-6 -right-6 card-glass px-4 py-3 text-center min-w-[100px]" style={{ animation: 'float 5s ease-in-out infinite' }}>
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-xs text-slate-500">Projects Built</div>
          </div>
          <div className="absolute -bottom-6 -left-6 card-glass px-4 py-3 text-center min-w-[110px]" style={{ animation: 'float 7s ease-in-out infinite 1s' }}>
            <div className="text-2xl font-bold text-accent-400">100%</div>
            <div className="text-xs text-slate-500">Dedication</div>
          </div>
        </div>
      </div>

      {/* Right: Text */}
      <div>
        <p className="section-subheading">Who I Am</p>
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          I'm a <span className="text-white font-semibold">passionate Full Stack Developer</span> and
          fresher who loves building clean, fast, and user-friendly web applications. I specialize in the{' '}
          <span className="text-primary-400 font-semibold">MERN stack</span> and am always eager to learn
          new technologies.
        </p>
        <p className="text-slate-400 leading-relaxed mb-8">
          When I'm not coding, I'm exploring new frameworks, contributing to Freelancing projects, or reading about
          system design. I believe in writing clean code that scales and telling stories through great UI/UX.
        </p>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {highlights.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="card-glass p-4 flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center ${color}`}>
                <Icon size={16} />
              </div>
              <div>
                <p className="text-slate-500 text-xs">{label}</p>
                <p className="text-white text-sm font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className="btn-primary inline-flex items-center gap-2">
          Let's Talk
          <span>→</span>
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default About;
