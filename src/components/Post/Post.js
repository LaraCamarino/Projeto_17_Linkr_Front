import axios from "axios";
import { useState, useEffect } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { TiPencil } from "react-icons/ti/index.js";
import { TbTrash } from "react-icons/tb/index.js";

import { PostContainer, LeftSide, ProfileImageBox, ProfileImage, LikesBox, LikesCount, RightSide, Top, Name, Icons, Middle, Hashtags, Bottom, LinkBox, LinkTittle, LinkDescription, Link, LinkImage, EditBox } from "./styles.js";

export default function Post({ id, username, text }) {
    const profile = "https://i.pinimg.com/474x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg";
    
    const [loading, setLoading] = useState(false);
    const [postWasLiked, setPostWasLiked] = useState(false);
    const [openEditBox, setOpenEditBox] = useState(false);
    const [newText, setNewText] = useState(text);

    function focusOnTextareaEnd(event) {
        let text = event.target.value;
        event.target.value = '';
        event.target.value = text;
    }

    function editPost(event) {
        if (event.key === "Escape") {
            setOpenEditBox(false);
            setNewText(text);
        }
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            setLoading(true);

            const URL = `http://localhost:5000/posts/edit/${id}`;
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const body = {
                text: newText
            }

            const promise = axios.put(URL, body, config);

            promise.then(res => {
                setLoading(false);
                setOpenEditBox(false);
            });
            promise.catch(err => {
                alert(err.response.data);
                setLoading(false);
                setOpenEditBox(false);
                setNewText(text);
            });

        }
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
                        <Name>{username}</Name>
                        <Icons>
                            <TiPencil onClick={() => setOpenEditBox(!openEditBox)} />
                            <TbTrash />
                        </Icons>
                    </Top>
                    <Middle>
                        {
                            !openEditBox ?
                                <>{text}</>
                                :
                                <EditBox type="text" disabled={loading} value={newText} onChange={(e) => setNewText(e.target.value)} autoFocus onFocus={focusOnTextareaEnd} onKeyDown={editPost} ></EditBox>
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