import { url } from 'inspector';
import { Container } from './styles'


export function SummaryBooks(){
    return(
        <Container>
            <div>
                <header>
                    <p className='title'> 
                        <strong> Livro: </strong>  
                        Harry Potter e o Prisioneiro de Azkaban
                    </p>
                    <p className='autor'>
                        <strong> Autor: </strong> 
                        J. K. Rowling
                    </p>
                    <p className='url'>
                        <strong> Url: </strong>                       
                        https://www.amazon.com.br/Harry-Potter-Prisioneiro-Azkaban-Rowling/dp/853253080X
                    </p>
                </header>
            </div>
        </Container>
    );
}