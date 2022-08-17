import axios from "axios";
import { useState, useContext } from "react";

import UserContext from "../../contexts/UserContext.js";

import { PublishPostContainer, LeftSide, ProfileImage, RightSide, Top, Tittle, Form, Input, Textarea, ButtonBox, Button } from "./styles.js";

export default function PublishPost({ getAllPosts }) {
    const { userPicture } = useContext(UserContext);

    const [loading, setLoading] = useState(false);
    const [newPost, setNewPost] = useState({
        link: "",
        text: ""
    });

    function sendNewPost(event) {
        event.preventDefault();
        setLoading(true);

        const URL = "http://localhost:5000/publish";
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const promise = axios.post(URL, newPost, config);

        promise.then(res => {
            setLoading(false);
            setNewPost({
                link: "",
                text: ""
            });
            getAllPosts();
        });
        promise.catch(err => {
            alert("Something went wrong when trying to post your link.");
            setLoading(false);
            setNewPost({
                link: "",
                text: ""
            });
        });
    }

    return (
        <>
            <PublishPostContainer>
                <LeftSide>
                    <ProfileImage src={userPicture} />
                </LeftSide>
                <RightSide>
                    <Top>
                        <Tittle>What are you going to share today?</Tittle>
                    </Top>
                    <Form onSubmit={sendNewPost}>
                        <Input required disabled={loading} type="url" placeholder="http://..." value={newPost.link} onChange={(e) => setNewPost({ ...newPost, link: e.target.value })} ></Input>
                        <Textarea disabled={loading} type="text" placeholder="Awesome article about #javascript" value={newPost.text} onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}></Textarea>
                        <ButtonBox>
                            <Button disabled={loading} type="submit"> {!loading ? "Publish" : "Publishing..."} </Button>
                        </ButtonBox>
                    </Form>
                </RightSide>
            </PublishPostContainer>
        </>
    )
}