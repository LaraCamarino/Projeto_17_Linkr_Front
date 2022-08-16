import styled from "styled-components";

export const PostContainer = styled.div`
    width: 611px;
    height: 276px;
    padding: 18px;
    border-radius: 16px;
    background-color: #171717;
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

export const ProfileImageBox = styled.div`
    margin-bottom: 20px;
`

export const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
`

export const LikesBox = styled.div`
    color: #FFFFFF;
    font-size: 25px;
    color: ${(props) => props.postWasLiked ? "#AC0000" : "#FFFFFF"};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LikesCount = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 3px;
`
export const RightSide = styled.div`

`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`
export const Name = styled.h1`
    color: #FFFFFF;
    font-size: 19px;
    font-weight: 400;
`

export const Icons = styled.div`
    width: 40px;
    display: flex;
    justify-content: space-between;
    
    svg {
        width: 20px;
        height: 15px;
        color: #FFFFFF;
    }
`

export const Middle = styled.h2`
    height: 52px;
    color: #B7B7B7;
    font-size: 17px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Hashtags = styled.p`
    font-size: 17px;
    font-weight: 700;
    display: inline;
    color: #FFFFFF;
`

export const Bottom = styled.div`
    width: 503px;
    height: 155px;
    border-radius: 11px;
    border: 1px solid #FFFFFF;
    display: flex;
    justify-content: space-between;
`

export const LinkBox = styled.div`
    padding: 20px;
`

export const LinkTittle = styled.h1`
    font-size: 16px;
    font-weight: 400;
    color: #CECECE;
`

export const LinkDescription = styled.p`
    font-size: 11px;
    font-weight: 400;
    color: #9B9595;
`

export const Link = styled.a`
    font-size: 11px;
    font-weight: 400;
    color: #CECECE;
`

export const LinkImage = styled.img`
    width: 35%;
    border-radius: 0px 10px 10px 0px;
`
