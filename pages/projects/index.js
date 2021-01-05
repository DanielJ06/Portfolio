import { useRouter } from 'next/router';
import { FaArrowCircleLeft, FaArchive } from 'react-icons/fa';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";
import * as S from './styles';
import { useEffect, useState } from 'react';

const easing = [0.6, -0.05, 0.01, 0.99];
const slide = {
  initial: {
    x: 100,
    opacity: 0,
  },
  slidein: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing,
    },
  },
  slideout: {
    y: 100,
    opacity: 0,
  },
};

const Repositories = ({ repos }) => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  const router = useRouter();

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

  const handleNavigate = () => {
    router.push('/resume');
  }
  
  const handleNext = () => {
    router.push('/contact');
  }

  return (
    <motion.div
      style={{ overflow: 'hidden' }}
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1,
        transition: { staggerChildren: 5 },
      }}
    >
      <motion.div
        variants={slide}
        initial="initial"
        animate="slidein"
        transition="transition"
        exit="slideout"
      >
        <S.Container>
          <motion.button
            style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowCircleLeft onClick={handleNavigate} color='#fff' size={50} />
          </motion.button>
          
          <S.ReposContainer>
            {repos.map(repo => (
              <motion.button
                style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href={repo.html_url}>
                  <S.Repo>
                    <FaArchive size={25} />
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'flex-start',
                        marginLeft: 25
                      }} 
                    >
                      <h3>{repo.full_name}</h3>
                      <p>Language: {repo.language ? repo.language : 'Markdown'}</p>
                    </div>
                  </S.Repo>
                </a>
              </motion.button>
            ))}
          </S.ReposContainer>
        </S.Container>
      </motion.div>

      <svg style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '120px',
        height: '120px',
      }} viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1 // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>
      {isComplete ? (
        <S.Redirect
          onClick={handleNext}
          style={{
            position: 'fixed',
            top: '140px',
            right: '55px',
          }}
        >
          Contact
        </S.Redirect>
      ) : <></>}
    </motion.div>
  )
}

export async function getServerSideProps(ctx) {
  const res = await fetch('https://api.github.com/users/DanielJ06/repos?sort=updated')
  const repos = await res.json();
  return {
    props: {repos}
  }
}

export default Repositories;