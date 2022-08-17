import styled from "styled-components";
import Modal from "react-modal";

export const ModalOverlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`


export const ModalContainer = styled(Modal)`
    width: 597px;
    height: 262px;   
    background-color: ${(props) => props.loading ? "rgba(255, 255, 255, 0)" : "#333333"};
    border-radius: 50px;
    outline: none;
    padding: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;   
    position: fixed;
        
    h1 {
        font-size: 34px;
        font-weight: 700;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 50px;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
`

export const NoButton = styled.button`
    width: 134px;
    height: 37px;
    border-radius: 5px;
    border: 0;
    background-color: #FFFFFF;
    font-size: 18px;
    font-weight: 700;
    color: #1877F2;
    margin-right: 25px;
`

export const YesButton = styled.button`
    width: 134px;
    height: 37px;
    border-radius: 5px;
    border: 0;
    background-color: #1877F2;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
`