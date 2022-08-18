import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { TiPencil } from "react-icons/ti/index.js";
import { TbTrash } from "react-icons/tb/index.js";

import { PostContainer, LeftSide, ProfileImageBox, ProfileImage, LikesBox, LikesCount, RightSide, Top, Name, Icons, Middle, Hashtags, Bottom, LinkBox, LinkTittle, LinkDescription, Link, LinkImage, EditBox } from "./styles.js";
import DeleteModal from "../Modal/DeleteModal.js";

export default function Post({ id, username, userPicture, text, likesCount, link, linkTitle, linkDescription, linkImage, authorId, getAllPosts }) {
    
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [postWasLiked, setPostWasLiked] = useState(false);
    const [openEditBox, setOpenEditBox] = useState(false);
    const [newText, setNewText] = useState(text);

    const [modalIsOpen, setModalIsOpen] = useState(false);


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
                getAllPosts();
            });
            promise.catch(err => {
                alert(err.response.data);
                setLoading(false);
                setOpenEditBox(false);
                setNewText(text);
            });

        }
    }

    function likePost(id) {
        setPostWasLiked(!postWasLiked);
    }

    function showIcons() {
        const userId = parseInt(localStorage.getItem("userId"));
        if (authorId === userId) {
            return (
                <>
                    <TiPencil onClick={() => setOpenEditBox(!openEditBox)} />
                    <TbTrash onClick={() => setModalIsOpen(true)} /></>
            )
        }
        else {
            <></>
        }
    }

    return (
        <>
            <PostContainer>
                <LeftSide>
                    <ProfileImageBox>
                        <ProfileImage src={userPicture} onClick={() => navigate(`/user/${authorId}`)} />
                    </ProfileImageBox>
                    <LikesBox postWasLiked={postWasLiked}>
                        {
                            !postWasLiked ?
                                <IoHeartOutline onClick={() => likePost(id)} />
                                :
                                <IoHeart onClick={() => likePost(id)} />
                        }
                        {
                            likesCount ? <LikesCount>{likesCount} likes</LikesCount> : <></>
                        }
                    </LikesBox>
                </LeftSide>
                <RightSide>
                    <Top>
                        <Name onClick={() => navigate(`/user/${authorId}`)}>{username}</Name>
                        <Icons>
                            {showIcons()}
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
                    <Bottom onClick={() => window.open(link)}>
                        <LinkBox>
                            <LinkTittle>{linkTitle}</LinkTittle>
                            <LinkDescription>{linkDescription}</LinkDescription>
                            <Link>{link}</Link>
                        </LinkBox>
                        <LinkImage src={linkImage} />
                    </Bottom>
                </RightSide>
            </PostContainer>
            {
                modalIsOpen ? <DeleteModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} postId={id} getAllPosts={getAllPosts} /> : <></>
            }
        </>
    )
}