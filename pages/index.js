import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Container, TextWrapper, NavigationBtn } from '../styles/home';

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
    x: 100,
    opacity: 0,
  },
};

const Index = (props) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/resume');
  }

  return (
    <motion.div
      style={{ overflow: 'hidden' }}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 1 }}
    >
      <motion.div
        variants={slide}
        initial="initial"
        animate="slidein"
        exit="slideout"
        key="technology"
        className="mb-8 w-full"
      >
        <Container>
          <TextWrapper>
            <span>HI, I'M</span>
            <span>DANIEL!</span>
            <span>FULLSTACK</span>
            <span>DEVELOPER</span>
          </TextWrapper>

          <motion.button
            style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavigationBtn onClick={handleNavigate} >
              Know me
            </NavigationBtn>
          </motion.button>
        </Container>
      </motion.div>
    </motion.div>
  )
}

export default Index;
