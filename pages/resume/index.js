import { useRouter } from 'next/router';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Container, Content, TextWrapper, MyPhoto, SpecialBtn, Right } from './styles';

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
                  Desenvolvedor Full Stack, apaixonado por tecnologia, e buscando sempre melhorar a
                  qualidade dos meus códigos e projetos, sempre visando a resolução de problemas
                  reais que façam a diferença no dia a dia das pessoas.
                </p>
              </div>

              <div>
                <h3>Objective</h3>
                <p>
                  Desenvolver ferramentas que impacte a vida das pessoas, aprender e aplicar novas
                  tecnologias todos os dias, estar em constante crescimento, fazer a diferença no
                  ambiente ao meu redor, conhecer pessoas, e trabalhar em projetos incríveis.
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
            <SpecialBtn>
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