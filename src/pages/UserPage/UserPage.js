import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

import { Page, Title, Text, LoadingBox } from "./styles";

export default function UserPage() {
    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();
    const [userPosts, setUserPosts] = useState([]);
    const [error, setError] = useState(false);

    function getPostsByUserId() {
        const URL = `http://localhost:5000/posts/${id}`;

        const promise = axios.get(URL);
        setLoading(true);

        promise.then(res => {
            setUser(res.data.username);
            setUserPosts(res.data.posts);
            setLoading(false);
        });
        promise.catch(err => {
            setLoading(false);
            setError(err.response.data);
        });
    }

    useEffect(() => getPostsByUserId(), []);

    function assembleUserPosts() {
        if (error) {
            return (
                <>
                    <Text>{error}</Text>
                </>
            )
        }

        if (userPosts.length === 0) {
            return (
                <>
                    <Title>{user}'s posts</Title>
                    <Text>There are no posts yet.</Text>
                </>
            )
        }

        return (
            <>
                <Title>{user}'s posts</Title>
                {
                    userPosts.map((post, index) => <Post key={index} id={post.postId} username={post.username} userPicture={post.userPicture} text={post.text} likesCount={post.likesCount} link={post.link} getAllPosts={getPostsByUserId} />)
                }
            </>
        )
    }

    function Loading() {
        return (
            <>
                <LoadingBox>
                    <ThreeDots width="50" height="50" color="#b2b2b2"></ThreeDots>
                </LoadingBox>
            </>
        )
    }

    return (
        <>
            <Header />
            <Page>
                {
                    loading ? <Loading />
                        :
                        <>
                            {assembleUserPosts()}
                        </>
                }
            </Page>
        </>
    )
}