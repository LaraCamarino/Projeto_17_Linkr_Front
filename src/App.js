import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import UserContext from "./contexts/UserContext";

import SignInPage from "./pages/SignIn/SignInPage.js";
import SignUpPage from "./pages/SignUp/SignUpPage.js";
import Timeline from "./pages/Timeline/Timeline.js";
import UserPage from "./pages/UserPage/UserPage.js";

export default function App() {

    const pictureLocalStorage = JSON.parse(localStorage.getItem("picture") || "[]");
    const [userPicture, setUserPicture] = useState(pictureLocalStorage);

	useEffect(() => {
		localStorage.setItem("picture", JSON.stringify(userPicture));
	}, [userPicture]);

    return (
        <UserContext.Provider value={{ userPicture, setUserPicture }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/user/:id" element={<UserPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}
