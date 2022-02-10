import { Container } from './styles'
import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { SummaryBooks } from '../CardLivros';

interface Product{
    id: number;
    name: string;
    quantityInPackage: number;
    unitOfMeasurement: string;
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
                    id = {product.id}
                    name={ product.name }
                    quantityInPackage = {product.quantityInPackage}
                    unitOfMeasurement = {product.unitOfMeasurement}
                    category = {product.category}
                /> ))}
            
        </Container>
    );
}