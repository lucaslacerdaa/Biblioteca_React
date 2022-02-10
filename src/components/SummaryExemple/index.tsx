import { Container } from './styles'

interface Product {
    title: string;
    autor: string;
    url: string;
}

export function SummaryExemple(props: Product){
    return(
        <Container>
            <div>
                <header>
                    <p className='title'> 
                        <strong> Livro: </strong>
                        {props.title}
                        {/* Harry Potter e a pedra filosofal */}
                   </p>
                   <p className='autor'>
                        <strong> Autor: </strong>
                        {props.autor}
                        {/* J. K. Rowling */}
                    </p>
                    <p className='url'>
                        <strong> Url: </strong>
                        {props.url}
                        {/* https://www.harrypotter.com.br */}
                    </p>
                </header>
            </div>
        </Container>
    );
}