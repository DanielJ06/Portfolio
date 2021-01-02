import { useRouter } from 'next/router';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Container, Content, TextWrapper } from './styles';

const Resume = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/');
  }
  
  return (
    <Container>
      <Content>
        <FaArrowCircleLeft onClick={handleNavigate} color='#fff' size={50} />

        <TextWrapper>
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
        </TextWrapper>
      </Content>
    </Container>
  );
}

export default Resume;