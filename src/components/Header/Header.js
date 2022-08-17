import axios from "axios";
import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

import UserContext from "../../contexts/UserContext.js";

import { HeaderContainer, Logo, Box, Image, LogoutBox, Logout, Text } from "./styles.js";

export default function Header() {
    const navigate = useNavigate();
    const { userPicture } = useContext(UserContext);

    const [openBox, setOpenBox] = useState(false);

    function logoutUser() {
        const token = localStorage.getItem("token");

        const URL = "http://localhost:5000/sign-out";
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const promise = axios.delete(URL, config);

        promise.then(res => {
            localStorage.removeItem("token");
            localStorage.removeItem("picture");
            localStorage.removeItem("userId");
            alert("User logged out successfully.");
            navigate("/");
        });
        promise.catch(err => {
            navigate("/");
        });
    }

    const boxRef = useRef();
    
    useEffect(() => {
        function closeDropDown(event) {
            if (event.path[0] !== boxRef.current) {
                setOpenBox(false);
            }
        }
        document.body.addEventListener("click", closeDropDown);

        return () => { document.body.removeEventListener("click", closeDropDown) }
    }, []);


    return (
        <>
            <HeaderContainer>
                <Logo> linkr </Logo>
                <Box ref={boxRef} onClick={() => setOpenBox(!openBox)}>
                    {
                        !openBox ? <IoChevronDownOutline/> : <IoChevronUpOutline />
                    }
                    <Image src={userPicture} />
                </Box>
            </HeaderContainer>
            <LogoutBox open={openBox}>
                <Logout> <Text onClick={() => logoutUser()}>Logout</Text> </Logout>
            </LogoutBox>
        </>
    )
}