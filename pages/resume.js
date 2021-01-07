import { useRouter } from 'next/router';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Container, Content, TextWrapper, MyPhoto, SpecialBtn, Right } from '../styles/resume';

const easing = [0.6, -0.05, 0.01, 0.99];
const slide = {
  initial: {
    y: 100,
    opacity: 0,
  },
  slidein: {
    y: 0,
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

const Resume = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/');
  }

  const handleNavigateToProjects = () => {
    router.push('/projects');
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
        <Container>
          <Content>
          <motion.button
            style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowCircleLeft onClick={handleNavigate} color='#fff' size={50} />
          </motion.button>

            <TextWrapper>
              <motion.div
                style={{ overflow: 'hidden' }}
                initial={{ opacity: 0 }} 
                animate={{
                  opacity: 1,
                  transition: { y: { stiffness: 1000, velocity: -100}, staggerChildren: 5 },
                }}
              >
              <div>
                <h3>Resume</h3>
                <p>
                  FullStack developer passionate about technologies, 
                  proactive, always looking for new challenges that 
                  make me evolve as a professional. And as far as possible, 
                  sharing the knowledge acquired with others around me and 
                  in communities
                </p>
              </div>

              <div>
                <h3>Objective</h3>
                <p>
                  Develop tools that impact people's lives, learn and apply new
                  technologies every day, be in constant growth, make a difference
                  environment around me, meeting people and working on amazing projects.
                </p>
              </div>
              </motion.div>
            </TextWrapper>
          </Content>

          <Right>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <MyPhoto src="/perfil.jpg" alt="photo"/>
            </motion.div>
            <SpecialBtn onClick={handleNavigateToProjects} >
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stop-color="#00C0FF"/>
                    <stop offset="50%" stop-color="#FFCF00"/>
                    <stop offset="100%" stop-color="#FC4F4F" />
                  </linearGradient>
                </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
              </svg>
              <span>Some projects</span>
            </SpecialBtn>
          </Right>
        </Container>
      </motion.div>
    </motion.div>
  );
}

export default Resume;