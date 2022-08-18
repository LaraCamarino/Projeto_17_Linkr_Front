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
    cursor: pointer;
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
    cursor: pointer;
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
    width: 350px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

export const LinkTittle = styled.h1`
    max-height: 50px;
    font-size: 16px;
    font-weight: 400;
    color: #CECECE;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const LinkDescription = styled.p`
    height: 40px;
    font-size: 11px;
    font-weight: 400;
    color: #9B9595;
    margin-top: 5px;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Link = styled.p`
    max-height: 20px;
    font-size: 11px;
    font-weight: 400;
    color: #CECECE;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const LinkImage = styled.img`
    width: 30%;
    border-radius: 0px 10px 10px 0px;
`

export const EditBox = styled.textarea`
    width: 100%;
    background-color: #EFEFEF;
    border-radius: 5px;
    border: 1px solid #EFEFEF;
    color: #4C4C4C;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Lato', sans-serif;
    padding: 5px 10px;
    resize: none;
`