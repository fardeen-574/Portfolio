import { Code2, Heart, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-white/5 bg-dark-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary-600 flex items-center justify-center">
              <Code2 size={15} className="text-white" />
            </div>
            <span className="font-bold text-white">
              Your<span className="text-primary-400">Name</span>
            </span>
          </div>

          {/* Made with */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Made with <Heart size={13} className="text-red-400 fill-red-400" /> using MERN Stack
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, href: 'https://github.com/fardeen-574' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/fardeen-sami-shaik' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500/40 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}

            {/* Back to top */}
            <button
              onClick={scrollTop}
              className="w-8 h-8 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-400 hover:bg-primary-600/40 transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} YourName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
