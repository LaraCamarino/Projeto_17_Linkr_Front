import styled from "styled-components";

export const Container = styled.div`
    width: 563px;
    background-color: #E7E7E7;
    border-radius: 8px;
    display: table;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    @media (max-width: 840px) {
        width: 60%;
    }
`

export const SearchBarBox = styled.div`
    border-radius: 8px;

    input {
        width: 100%;
        height: 52px;        
        border-radius: 8px;
        background-color: #FFFFFF;
        border: 0;
        padding: 9px 14px;
        font-size: 19px;
        color: #C6C6C6;
        font-family: 'Lato', sans-serif;
        display: flex;
        justify-content: space-between;
        align-items: center;

        :focus {
            outline: none;
        }
    }

    svg {
        width: 21px;
        height: 21px;
        color: #C6C6C6;
        position: absolute;
        top: 12px;
        right: 12px;
    }
`

export const Result = styled.div`
    width: 100%;
    padding: 8px 18px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    img {
        width: 39px;
        height: 39px;
        border-radius: 304px;
        margin-right: 12px;
    }

    h2 {
        font-size: 19px;
        font-weight: 400;
        color: #515151;
        font-family: 'Lato', sans-serif;   

    }
`