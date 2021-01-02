import { useRouter } from 'next/router';

import { Container, TextWrapper, NavigationBtn } from '../styles/home';

const Index = (props) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/resume');
  }

  return (
    <Container>
      <TextWrapper>
        <span>HI, I'M</span>
        <span>DANIEL!</span>
        <span>FULLSTACK</span>
        <span>DEVELOPER</span>
      </TextWrapper>

      <NavigationBtn onClick={handleNavigate} >
        Know me
      </NavigationBtn>
    </Container>
  )
}

export default Index;
