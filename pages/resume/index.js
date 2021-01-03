import { useRouter } from 'next/router';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Container, Content, TextWrapper, MyPhoto, SpecialBtn, Right } from './styles';

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

      <Right>
        <MyPhoto src="/perfil.jpg" alt="photo"/>
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
  );
}

export default Resume;