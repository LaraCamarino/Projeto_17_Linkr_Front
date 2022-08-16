import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

import { HeaderContainer, Logo, Box, Image, LogoutBox, Logout, Text } from "./styles.js";

export default function Header() {
    const navigate = useNavigate();

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
            alert("User logged out successfully.");
            navigate("/");
        });
        promise.catch(err => {
            navigate("/");
        });
    }

    return (
        <>
            <HeaderContainer>
                <Logo> linkr </Logo>
                <Box onClick={() => setOpenBox(!openBox)}>
                    {
                        !openBox ? <IoChevronDownOutline/> : <IoChevronUpOutline />
                    }
                    <Image src="https://i.pinimg.com/474x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg" />
                </Box>
            </HeaderContainer>
            <LogoutBox open={openBox}>
                <Logout> <Text onClick={() => logoutUser()}>Logout</Text> </Logout>
            </LogoutBox>
        </>
    )
}