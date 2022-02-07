import { url } from 'inspector';
import { Container } from './styles'

export function ButtonBuscar(){
    function verificarLivro() {
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
                    onClick= {verificarLivro}
                > Buscar</button>
            </header>
        </div>
    </Container>
    );
}