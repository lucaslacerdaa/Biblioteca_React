import { Container } from './styles'
import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { SummaryBooks } from '../SummaryBooks';
import { SummaryExemple } from '../SummaryExemple';

interface Product{
    id: number;
    name: string;
    quantityInPackage: number;
    unitOfMeasurement: string;
    url: string;
    category: {
        id: number, 
        name: string
    };    
}

export function Dashboard(){
    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        api.get('product')
            .then(response => setProduct(response.data.product));
            console.log(product);
    }, []);

    return(
        <Container>
            {product.map(product=>( 
                <SummaryBooks 
                    id = { product.id }
                    name={ product.name }
                    quantityInPackage = { product.quantityInPackage }
                    unitOfMeasurement = { product.unitOfMeasurement }
                    url = { product.url }
                    category = { product.category }
                /> ))}
            
            <SummaryExemple 
                title= "Harry Potter e o Prisioneiro de Azkaban" 
                autor= 'J. K. Rowling'
                url= 'https://www.google.com/'
            />
            
            <SummaryExemple 
                title='Breves respostas para grandes questões' 
                autor='Stephen Hawking'
                url='https://www.google.com/'
            />

            <SummaryExemple 
                title='Uma Breve História do Tempo' 
                autor='Stephen Hawking'
                url='https://www.google.com/'
            />

                        
        </Container>
    );
}