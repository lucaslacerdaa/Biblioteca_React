
import logoImg from '../../assets/LOGO.png'
import Modal from  'react-modal'
import { Container, Content } from './styles'
import { ButtonBuscar } from '../ButtonBuscar';

interface HeaderProps{
    onOpenNewTransactionModal: () => void;

}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <ButtonBuscar/> 
            </Content>
        </Container>
    )
}