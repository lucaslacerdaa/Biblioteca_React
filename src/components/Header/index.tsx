
import logoImg from '../../assets/LOGO.png'
import { Container, Content } from './styles'
import { ButtonBuscar } from '../ButtonBuscar';

export function Header() {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <ButtonBuscar/> 
            </Content>
        </Container>
    )
}