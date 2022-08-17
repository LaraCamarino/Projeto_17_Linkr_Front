import styled from "styled-components";

export const PublishPostContainer = styled.div`
    width: 611px;
    height: 209px;
    padding: 18px;
    border-radius: 16px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    font-family: 'Lato', sans-serif;
    margin-bottom: 30px;

    @media(max-width: 600px){
        width: 100%;
        border-radius: 0px;
    }
`

export const LeftSide = styled.div`
    margin-right: 25px;
`

export const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
`

export const RightSide = styled.div`
    width: 503px;
`

export const Top = styled.div`
    display: flex;
    justify-content: center;
    
    @media(min-width: 600px){
        justify-content: flex-start;
    }
`

export const Tittle = styled.h1`
    height: 30px;
    font-size: 20px;
    font-weight: 300;
    color: #707070;
    font-family: 'Lato', sans-serif;
`

export const Form = styled.form`
    width: 100%;
`

export const Input = styled.input`
    width: 100%;
    background-color: #EFEFEF;
    border-radius: 5px;
    border: 1px solid #EFEFEF;
    padding: 6px 0px 8px 5px;
    margin-bottom: 5px;
    font-family: 'Lato', sans-serif;   

    ::placeholder {
        font-size: 15px;
        font-weight: 300;
        color: #949494;
    }
`

export const Textarea = styled.textarea`
    width: 100%;
    height: 70px;
    background-color: #EFEFEF;
    border-radius: 5px;
    border: 1px solid #EFEFEF;
    padding: 10px 0px 21px 5px;
    margin-bottom:6px;   
    font-family: 'Lato', sans-serif;
    resize: none;
    
    ::placeholder {
        font-weight: 300;
        font-size: 15px;
        color: #949494;
    }
`

export const ButtonBox = styled.div`
    display:flex;
    justify-content: flex-end;
`


export const Button = styled.button`
    width: 112px;
    height: 31px;
    border-radius: 5px;
    background-color: ${(props) => !props.disabled ? "#1877F2" : "#D3D3D3" };
    border: 1px solid ${(props) => !props.disabled ? "#1877F2" : "#D3D3D3" };
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => !props.disabled ? "#FFFFFF" : "#949494"};
`
