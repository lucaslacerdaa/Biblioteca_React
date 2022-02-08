import { Container } from './styles'
import { Summary } from '../Summary';
// import { TransactionsTable } from '../TransactionsTable';
import { SummaryBooks } from '../CardLivros';
export function Dashboard(){
    return(
        <Container>
            <SummaryBooks/>
            <SummaryBooks/>
            <SummaryBooks/>
            <SummaryBooks/>
        </Container>
    );
}