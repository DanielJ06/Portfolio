import { useRouter } from 'next/router';
import * as S from './styles';
import { motion } from "framer-motion";
import { 
  FaArrowCircleLeft, 
  FaGithub, 
  FaLinkedin, 
  FaInbox 
} from 'react-icons/fa';

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


const Contact = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/projects')
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
        </S.Container>
      </motion.div>
    </motion.div>
  )
}

export default Contact;