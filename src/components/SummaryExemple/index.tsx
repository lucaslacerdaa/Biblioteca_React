import { Container } from './styles'

interface Product {
    title: string;
    autor: string;
    url: string;
    photo: string;
}

export function SummaryExemple(props: Product){
    return(
        <Container>
            <div>

                <header>
                    <p className='title'> 
                        <strong> Livro: </strong>
                        {props.title}
                    </p>
                    <p className='autor'>
                        <strong> Autor: </strong>
                        {props.autor}
                    </p>
                    <p className='url'>
                        <strong> Url: </strong>
                        {props.url}
                    </p>
                </header>

                <div className='imgcontainer'>
                    <img src={props.photo} alt="Foto do livro:"/>
                </div>
                
            </div>
        </Container>
    );
}