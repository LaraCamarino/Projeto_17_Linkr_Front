import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import PublishPost from "../../components/PublishPost/PublishPost.js";
import Post from "../../components/Post/Post";

import { Page, Title } from "./styles.js";

export default function Timeline() {
    const [posts, setPosts] = useState([]);

    function getAllPosts() {
        const URL = "http://localhost:5000/posts";
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const promise = axios.get(URL, config);

        promise.then((res) => {
            setPosts(res.data);
            console.log(res.data)
        });
        promise.catch((err) => console.log(err.response.data));
    }

    useEffect(() => getAllPosts(), []);

    function assemblePosts() {
        if (posts.length === 0) {
            return (
                <>No posts yet.</>
            )
        }
        if (posts) {
            return (
                <>{
                    posts.map((post, index) => <Post key={index} id={post.postId} username={post.username} userPicture={post.userPicture} text={post.text} likesCount={post.likesCount} link={post.link} getAllPosts={getAllPosts} />)
                }</>
            )
        }

    }

    return (
        <>
            <Header/>
            <Page>
                <Title>timeline</Title>
                <PublishPost getAllPosts={getAllPosts} />
                {assemblePosts()}
            </Page>
        </>
    )
}