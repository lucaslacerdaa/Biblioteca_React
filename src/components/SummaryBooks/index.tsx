import { url } from 'inspector';
import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { Container } from './styles'

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

export function SummaryBooks(props:Product){
    return(
        <Container>
            <div>
                <header>
                    <p className='title'> 
                        <strong> Livro: </strong>  
                        { props.name }
                   </p>
                   <p className='autor'>
                        <strong> Autor: </strong> 
                        { props.category.name }
                    </p>
                    <p className='url'>
                        <strong> Url: </strong>
                        { props.url }
                    </p>
                </header>
            </div>
        </Container>
    );
}