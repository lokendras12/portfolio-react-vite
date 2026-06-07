import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import heroPortrait from '../../../assets/hero-portrait-cutout.png';
import { fadeUp, staggerContainer } from '../../utils/motion';
import { useIntroReady } from '../../contexts/IntroContext';
import Marquee from './Marquee';

const IntroSection = () => {
  const sectionRef = useRef(null);
  const portraitRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const introReady = useIntroReady();
  const shouldAnimate = introReady && isInView;
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);

  const handleMouseMove = (e) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLightPos({ x, y });
  };

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="intro" className="story-section story-intro" ref={sectionRef}>
      <div className="story-section-inner">
        <motion.div
          className="story-intro-grid"
          variants={staggerContainer(0.14, 0.2)}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
        >
          <motion.div className="story-intro-copy" style={{ opacity: copyOpacity, y: copyY }}>
            <motion.p className="story-kicker" variants={fadeUp}>
              <span className="story-kicker-dot" />
              Senior Mobile Engineer
            </motion.p>

            <motion.h1 className="story-headline" variants={fadeUp}>
              <span className="story-headline-line">I build calm,</span>
              <span className="story-headline-line story-headline-accent">
                high-performing mobile experiences
              </span>
              <span className="story-headline-line">that scale.</span>
            </motion.h1>

            <motion.p className="story-lede" variants={fadeUp}>
              Hi, I&apos;m <strong>Lokendra Singh</strong> — I help teams ship secure,
              reliable React Native apps. Optimizing performance, simplifying architecture,
              and weaving AI-powered workflows into everyday engineering.
            </motion.p>

            <motion.div className="story-intro-meta" variants={fadeUp}>
              <div>
                <span className="story-meta-label">Based in</span>
                <span className="story-meta-value">Bengaluru, India</span>
              </div>
              <div>
                <span className="story-meta-label">Focus</span>
                <span className="story-meta-value">React Native · Enterprise</span>
              </div>
              <div>
                <span className="story-meta-label">Contact</span>
                <a href="mailto:lokendras12@gmail.com" className="story-meta-link">
                  lokendras12@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.aside
            className="story-portrait-wrap"
            variants={fadeUp}
            style={{ y: portraitY }}
          >
            <div
              className="story-portrait-frame"
              ref={portraitRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setLightPos({ x: 50, y: 50 })}
            >
              <img
                src={heroPortrait}
                alt="Lokendra Singh"
                className="story-portrait"
              />
              <div
                className="story-portrait-glow"
                style={{
                  background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, rgba(196, 181, 160, 0.12) 0%, transparent 55%)`,
                }}
              />
            </div>
          </motion.aside>
        </motion.div>

        <Marquee />

        <motion.button
          type="button"
          className="story-scroll-hint"
          onClick={scrollToSkills}
          initial={{ opacity: 0, y: 16 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span>Scroll to explore</span>
          <motion.span
            className="story-scroll-arrow"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
};

export default IntroSection;
