import styled from "styled-components";

export const Container = styled.div`
    header{
        display: inline;
        
        input{
           width: 400px;
           padding: 0 1.5rem;
           height: 3rem;
           border-radius: 0.25rem;
           margin-right: 1rem;
   
           border: 1px solid #d7d7d7;
           background: filter(brightness(0.9)) ;
   
           font-weight: 400;
           font-size: 1rem;
   
           &::placeholder{
               color: var(--text-body);
           }
       }

       button{
          font-size: 1rem;
          color: #fff;
          background: var(--blue-light);
           border-radius: 0.25rem;
          
          transition: filter 0.2s;
          
          &:hover{
              filter: brightness(0.9);
          }
      }
    }
`