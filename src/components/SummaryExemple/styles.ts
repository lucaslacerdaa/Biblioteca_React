import styled from "styled-components";

export const Container = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
      width:850px;
      margin-left: auto;
      margin-right: auto;

    margin-top: 1.5rem;
    div{
        wight:150px;
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.55rem;
        color: var(--text-title);
        
        header{
            display: inline;
        }
        h2{
            font-size: 20px;
        }
        p{
            margin-top: 1.5rem;
        }
        strong{
            color: #505050;
            font-weight: 600;
        }
        .title{
            font-size: 22px;
            margin-bottom: -0.7rem;
            margin-top: 0.05rem;
        }
        .url{
            font-size: 13px;
            color: var(--blue);
            cursor: pointer;
            margin-top: 2rem;
        }
    }
    .imgcontainer{
        display: flex;
        align-itens: center;
        justify-content: center;

        border: 1px solid;
        
        width: 180px;
        height: 180px;

        margin-right: -10rem;
        padding: 0;
        img{
            margin: 0;
            object-fit: cover;
            height: -webkit-fill-available;               
        }
    }
`