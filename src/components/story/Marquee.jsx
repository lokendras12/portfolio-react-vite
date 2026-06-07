import { motion } from 'framer-motion';
import { marqueeItems } from '../../data/storyData';

const Marquee = () => {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="story-marquee" aria-hidden="true">
      <motion.div
        className="story-marquee-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: { repeat: Infinity, repeatType: 'loop', duration: 32, ease: 'linear' },
        }}
      >
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="story-marquee-item">
            {item}
            <span className="story-marquee-dot" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
