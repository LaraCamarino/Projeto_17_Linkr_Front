import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.div`
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const LeftSide = styled.div`
    width: 1005px;
    height: 100vh;
    background-color: #151515;
    color: #FFFFFF;
    padding-left: 144px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-size: 106px;
        font-weight: 700;
        font-family: 'Passion One', cursive;
        margin: 0;
    }
    h2 {
        width: 442px;
        font-size: 43px;
        font-weight: 700;
        font-family: 'Oswald', sans-serif;
    }
    @media (max-width: 1090px) {
        padding-left: 50px;
    }
    @media (max-width: 700px) {
        width: 100vw;
        height: 175px;
        padding: 15px;
        align-items: center;
        h1 {
            font-size: 76px;
        }
        h2 {
            width: 280px;
            font-size: 23px;
            text-align: center;
            margin: 0;
        }
    }
`

export const RightSide = styled.div`
    width: 635px;
    height: 100vh;
    background-color: #333333;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 700px) {
        width: 100vw;
        padding-top: 40px;
        justify-content: initial;
    }
`

export const Input = styled.input`
	width: 429px;
    height: 65px;
    background-color: #FFFFFF;
	border-radius: 6px;
    border: 0px;
    padding: 15px;
    margin-bottom: 13px;
	transition: .2s;
    outline-color: black;

    ::placeholder {
        color: #9F9F9F;
        font-size: 27px;
        font-family: 'Oswald', sans-serif;
    }
	:valid {
        border: 2px solid #03AC00;
    }
    @media (max-width: 700px) {
        width: 330px;
        height: 55px;
        ::placeholder {
            font-size: 22px;
        }
    }
	
`

export const Button = styled.button`
	width: 429px;
    height: 65px;
    background-color: #1877F2;
    font-size: 27px;
	font-weight: 700;
    font-family: 'Oswald', sans-serif;
	color: #FFFF;
	border-radius: 6px;
	border: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
    transition: .2s;
    @media (max-width: 700px) {
        width: 330px;
        height: 55px;
        font-size: 22px;
    }
`

export const SignInLink = styled(Link)`
    margin-top: 14px;
	font-size: 20px;
    font-weight: 400;
    font-family: 'Lato', sans-serif;
    color: #FFFFFF;
    @media (max-width: 700px) {
        font-size: 17px;
    }
`