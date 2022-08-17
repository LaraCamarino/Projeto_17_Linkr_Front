import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import PublishPost from "../../components/PublishPost/PublishPost.js";
import Post from "../../components/Post/Post";
import Loading from "../../components/Loading/Loading";

import { Page, Title, Text } from "./styles.js";

export default function Timeline() {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
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
        setLoading(true);

        promise.then((res) => {
            setPosts(res.data);
            setLoading(false);
        });
        promise.catch((err) => {
            setLoading(false);
            setError(err.response.data);
        });
    }

    useEffect(() => getAllPosts(), []);

    function assemblePosts() {
        if (error) {
            return (
                <>
                    <Text>An error occured while trying to fetch the posts, please refresh the page.</Text>
                </>
            )
        }

        if (posts.length === 0) {
            return (
                <Text>There are no posts yet.</Text>
            )
        }

        if (posts) {
            return (
                <>
                    {
                        posts.map((post, index) => <Post key={index} id={post.postId} username={post.username} userPicture={post.userPicture} text={post.text} likesCount={post.likesCount} link={post.link} authorId={post.userId} getAllPosts={getAllPosts} />)
                    }
                </>
            )
        }

    }

    return (
        <>
            <Header/>
            <Page>
                <Title>timeline</Title>
                <PublishPost getAllPosts={getAllPosts} />
                {
                    loading ? <Loading />
                        :
                        <>
                            {assemblePosts()}
                        </>
                }
            </Page>
        </>
    )
}