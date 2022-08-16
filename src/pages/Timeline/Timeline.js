import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

import { Page } from "./styles.js";

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
        if(posts) {
            return (
                <>{
                    posts.map((post, index) => <Post key={index} id={post.postId} username={post.username} text={post.userText}/>)
                }</>
            )
        }
        
    }

    return (
        <>
            <Header />
            <Page>
                Timeline
                {assemblePosts()}
            </Page>
        </>
    )
}