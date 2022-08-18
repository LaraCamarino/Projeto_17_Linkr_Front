import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 72px;
    background-color: #151515;
    padding: 10px 25px;
    display:flex;
    justify-content: space-between;
`

export const Logo = styled.h1`
    font-family: 'Passion One', cursive;
    font-size: 45px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
`

export const Box = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;

    img, svg {
        pointer-events: none;
    }
`

export const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-left: 15px;
`

export const LogoutBox = styled.section`
    display:${(props) => !props.open ? "none" : "flex"};
    justify-content: flex-end;
`

export const Logout = styled.div`
    width: 150px;
    height: 50px;
    background-color: #151515;
    border-radius: 0px 0px 0px 20px;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
`