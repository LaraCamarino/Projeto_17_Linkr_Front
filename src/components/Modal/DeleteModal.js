import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";

import Loading from "../Loading/Loading.js";

import { ModalOverlay, ModalContainer, Buttons, NoButton, YesButton } from "./styles.js";

export default function DeleteModal({ modalIsOpen, setModalIsOpen, postId, getAllPosts }) {

    Modal.setAppElement(document.querySelector(".root"));

    const [loading, setLoading] = useState(false);


    function deletePost() {
        setLoading(true);

        const URL = `http://localhost:5000/posts/delete/${postId}`;
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const promise = axios.delete(URL, config);
        promise.then(() => {
            getAllPosts();
            setModalIsOpen(false);
            setLoading(false);
        });
        promise.catch((err) => {
            alert(err.response.data);
            setModalIsOpen(false);
            setLoading(false);
        });
    }



    return (

        <ModalContainer loading={loading} isOpen={modalIsOpen} overlayElement={(props, contentElement) => (
            <ModalOverlay {...props}>{contentElement}</ModalOverlay>)}>
            {
                loading ? <Loading />
                    :
                    <>
                        <h1>Are you sure you want to delete this post?</h1>
                        <Buttons>
                            <NoButton onClick={() => setModalIsOpen(false)}>No, go back</NoButton>
                            <YesButton onClick={() => deletePost()}>Yes, delete it</YesButton>
                        </Buttons>
                    </>
            }
        </ModalContainer>
    )
}

