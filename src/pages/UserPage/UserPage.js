import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Loading from "../../components/Loading/Loading";

import { Page, Title, Text } from "./styles";

export default function UserPage() {
    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState();
    const [userPosts, setUserPosts] = useState([]);

    function getPostsByUserId() {
        const URL = `https://project-17-linkr-db.herokuapp.com/posts/${id}`;

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
                    userPosts.map((post, index) => <Post key={index} postId={post.postId} username={post.username} userPicture={post.userPicture} text={post.text} link={post.link} linkTitle={post.linkTitle} linkDescription={post.linkDescription} linkImage={post.linkImage}
                    authorId={post.userId} getAllPosts={getPostsByUserId} />)
                }
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