import styled from "styled-components";

export const Container = styled.div`
    display: block;
    /* wight: 100px; */
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
        }
        h2{
            font-size: 20px;
        }
        p{
            margin-top: 1.5rem;
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
        strong{
            display: inline;
            color: #505050;
            /* margin-top: 1rem; */
            /* font-size: 18px; */
            font-weight: 600;
            /* line-height: 3rem; */
        }
    }
`