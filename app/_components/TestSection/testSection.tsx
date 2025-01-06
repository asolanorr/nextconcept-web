'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import styles from './testSection.module.css';

const TestSection = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-70%']);

  return (
    <section ref={targetRef} className={styles.horizontalScrollCarousel}>
      <div className={styles.horizontalScrollCarouselContainer}>
        <motion.div
          style={{ x }}
          className={styles.horizontalScrollCarouselInner}
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div key={card.id} className={`${styles.cardContainer} ${styles.group}`}>
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={styles.cardImage}
      ></div>
      <div className={styles.cardTextContainer}>
        <p className={styles.cardText}>{card.title}</p>
      </div>
    </div>
  );
};

export default TestSection;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
    title: 'Title 1',
    id: 1,
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
    title: 'Title 2',
    id: 2,
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
    title: 'Title 3',
    id: 3,
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
    title: 'Title 4',
    id: 4,
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
    title: 'Title 5',
    id: 5,
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
    title: 'Title 6',
    id: 6,
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
    title: 'Title 7',
    id: 7,
  },
];
