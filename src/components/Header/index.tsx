import logoImg from '../../assets/LOGO.png'
import { Container, Content } from './styles'
import { FindBook } from '../FindBook';

export function Header() {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Biblioteca Lacerda" />
                <FindBook /> 
            </Content>
        </Container>
    )
}