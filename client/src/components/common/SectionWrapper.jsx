import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children, id, className = '' }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative z-10 py-24 px-4 md:px-8 max-w-7xl mx-auto ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
