import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../common/SectionWrapper';

const skillCategories = [
  {
    title: 'Frontend',
    emoji: '🎨',
    color: 'from-primary-500 to-purple-500',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    color: 'from-accent-500 to-teal-400',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 75 },
      { name: 'REST APIs', level: 80 },
      { name: 'MongoDB', level: 72 },
    ],
  },
  {
    title: 'Tools & Others',
    emoji: '🛠️',
    color: 'from-yellow-400 to-orange-500',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 80 },
      { name: 'Figma (Basics)', level: 60 },
    ],
  },
];

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '🚀' },
  { name: 'JavaScript', icon: '🟡' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Git', icon: '📦' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Postman', icon: '📮' },
  { name: 'VS Code', icon: '💻' },
];

const SkillBar = ({ name, level }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-500 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : '0%',
            background: 'linear-gradient(90deg, #6366f1, #10b981)',
            transitionDelay: '200ms',
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => (
  <SectionWrapper id="skills">
    <div className="text-center mb-16">
      <p className="section-subheading">What I Know</p>
      <h2 className="section-heading">
        My <span className="gradient-text">Skills</span>
      </h2>
      <p className="text-slate-400 max-w-xl mx-auto">
        A curated set of technologies I work with to build modern, full-stack web applications.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {skillCategories.map((cat) => (
        <div key={cat.title} className="card-glass p-6">
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl`}
              style={{ opacity: 0.9 }}
            >
              {cat.emoji}
            </div>
            <h3 className="text-white font-bold text-lg">{cat.title}</h3>
          </div>
          {cat.skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      ))}
    </div>

    {/* Tech Stack Logos */}
    <div className="text-center">
      <p className="text-slate-500 text-sm uppercase tracking-widest mb-8">Tech Stack</p>
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 px-4 py-2.5 card-glass text-sm font-medium text-slate-300 hover:text-white hover:border-primary-500/40 cursor-default transition-all duration-200"
          >
            <span>{tech.icon}</span>
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Skills;
