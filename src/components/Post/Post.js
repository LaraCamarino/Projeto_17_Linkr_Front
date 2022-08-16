import axios from "axios";
import { useState } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { TiPencil } from "react-icons/ti/index.js";
import { TbTrash } from "react-icons/tb/index.js";

import { PostContainer, LeftSide, ProfileImageBox, ProfileImage, LikesBox, LikesCount, RightSide, Top, Name, Icons, Middle, Hashtags, Bottom, LinkBox, LinkTittle, LinkDescription, Link, LinkImage, EditBox } from "./styles.js";

export default function Post() {
    const profile = "https://i.pinimg.com/474x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg";

    const [postWasLiked, setPostWasLiked] = useState(true);
    const [openEditBox, setOpenEditBox] = useState(false);
    const [loading, setLoading] = useState(false);

    let originalDescription = "Testing...";
    const [newDescription, setNewDescription] = useState(originalDescription);


    function focusOnTextareaEnd(event) {
        let text = event.target.value;
        event.target.value = '';
        event.target.value = text;
    }

    return (
        <>
            <PostContainer>
                <LeftSide>
                    <ProfileImageBox>
                        <ProfileImage src={profile} />
                    </ProfileImageBox>
                    <LikesBox postWasLiked={postWasLiked}>
                        {
                            !postWasLiked ?
                                <IoHeartOutline />
                                :
                                <IoHeart />
                        }
                        <LikesCount>5 likes</LikesCount>
                    </LikesBox>
                </LeftSide>
                <RightSide>
                    <Top>
                        <Name>username</Name>
                        <Icons>
                            <TiPencil onClick={() => setOpenEditBox(!openEditBox)} />
                            <TbTrash />
                        </Icons>
                    </Top>
                    <Middle>
                        {
                            !openEditBox ?
                                originalDescription
                                :
                                <EditBox type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} autoFocus onFocus={focusOnTextareaEnd} disabled={loading}></EditBox>
                        }
                        <Hashtags> #react #material</Hashtags>
                    </Middle>
                    <Bottom>
                        <LinkBox>
                            <LinkTittle>linkTitle</LinkTittle>
                            <LinkDescription>linkDescription</LinkDescription>
                            <Link>link</Link>
                        </LinkBox>
                        <LinkImage src={profile} />
                    </Bottom>
                </RightSide>
            </PostContainer>
        </>
    )
}