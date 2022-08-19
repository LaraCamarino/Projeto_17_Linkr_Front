import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { TiPencil } from "react-icons/ti/index.js";
import { TbTrash } from "react-icons/tb/index.js";
import ReactTooltip from "react-tooltip";

import { PostContainer, LeftSide, ProfileImageBox, ProfileImage, LikesBox, LikesCount, RightSide, Top, Name, Icons, Middle, Hashtags, Bottom, LinkBox, LinkTittle, LinkDescription, Link, LinkImage, EditBox } from "./styles.js";
import DeleteModal from "../Modal/DeleteModal.js";

export default function Post({ postId, username, userPicture, text, link, linkTitle, linkDescription, linkImage, authorId, getAllPosts }) {

    const navigate = useNavigate();

    const userId = parseInt(localStorage.getItem("userId"));

    const [loading, setLoading] = useState(false);
    const [postWasLiked, setPostWasLiked] = useState(false);
    const [openEditBox, setOpenEditBox] = useState(false);
    const [newText, setNewText] = useState(text);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [likesData, setLikesData] = useState([]);
    const [tooltip, setTooltip] = useState("");

    let likesCount = likesData.length;

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

            const URL = `https://project-17-linkr-db.herokuapp.com/posts/edit/${postId}`;
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

    function getLikesByPostId() {
        const URL = `https://project-17-linkr-db.herokuapp.com/likes/${postId}`;
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const promise = axios.get(URL, config);

        promise.then(res => {
            if (res.data.filter((item) => item.userId === userId).length) {
                setPostWasLiked(true);
            }
            else {
                setPostWasLiked(false);
            }
            setLikesData(res.data);
            createLikeTooltip(res.data);
        });
        promise.catch(err => {
            alert(err.response.data);
        })
    }

    useEffect(() => getLikesByPostId(), [postWasLiked]);

    function likePost(postId) {
        const URL = "https://project-17-linkr-db.herokuapp.com/likes";
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        const body = {
            postId,
            userId
        }

        const promise = axios.post(URL, body, config);

        promise.then(res => {
            getLikesByPostId();
        });
        promise.catch(err => {
            alert(err.response.data);
        });
    }

    function dislikePost(postId) {
        const URL = `https://project-17-linkr-db.herokuapp.com/likes/${postId}`;
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const promise = axios.delete(URL, config);

        promise.then(res => {
            getLikesByPostId();
        });
        promise.catch(err => {
            alert(err.response.data);
        })
    }

    function showIcons() {
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

    function createLikeTooltip(data) {
        let text = "";
        let likes = data.filter((item) => item.userId !== userId);

        if (data.length === 0) {
            text = "Nobody liked this post yet";
        }
        if (!postWasLiked) {
            if (likes.length === 1) {
                text = `${likes[0].username} liked this post`;
            }
            if (likes.length === 2) {
                text = `${likes[0].username} and ${likes[1].username} liked this post`;
            }
            if (likes.length === 3) {
                text = `${likes[0].username}, ${likes[1].username} and 1 other person`;
            }
            if (likes.length > 3) {
                text = `${likes[0].username}, ${likes[1].username} and ${likes.length - 2} other people`;
            }
        }
        if (postWasLiked) {
            if (likes.length === 0) {
                text = "You liked this post";
            }
            if (likes.length === 1) {
                text = `You and ${likes[0].username} liked this post`
            }
            if (likes.length === 2) {
                text = `You, ${likes[0].username} and 1 other person`
            }
            if (likes.length > 2) {
                text = `You, ${likes[0].username} and ${likes.length - 1} other people`
            }
        }

        setTooltip(text);
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
                                <IoHeartOutline onClick={() => likePost(postId)} />
                                :
                                <IoHeart onClick={() => dislikePost(postId)} />
                        }
                        {
                            likesCount > 0 ?
                                <>
                                    <LikesCount data-for="like" data-tip={tooltip}>{likesCount} likes</LikesCount>
                                    <ReactTooltip id="like" place="bottom" type="light" effect="solid" delayHide={500}></ReactTooltip>
                                </>
                                :
                                <></>
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
                        <Hashtags></Hashtags>
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
                modalIsOpen ? <DeleteModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} postId={postId} getAllPosts={getAllPosts} /> : <></>
            }
        </>
    )
}