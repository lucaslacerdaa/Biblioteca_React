import { url } from 'inspector';
import { Container } from './styles'

export function FindBook(){
    function findBook() {
        // Essa função vai pegar a string no input "Pesquise aqui"
        // Depois compara com uma a lista JSON que a API retorna a ele
        // Então exibe somente o livro solitado.
    }

    return(
    <Container>
        <div>
            <header>
                <input type="text" placeholder='Pesquise aqui' />
                <button
                    type='button'
                    onClick= {findBook}
                > Buscar</button>
            </header>
        </div>
    </Container>
    );
}