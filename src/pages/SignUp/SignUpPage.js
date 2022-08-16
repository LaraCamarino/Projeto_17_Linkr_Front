import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Page, LeftSide, RightSide, Input, Button, SignInLink } from "./styles.js";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        pictureUrl: ""
    });


    function assembleForm() {
        if (!loading) {
            return (
                <form onSubmit={signUp}>
                    <Input required type="email" placeholder="e-mail" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} ></Input>
                    <Input required type="password" placeholder="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} minLength={8}></Input>
                    <Input required type="text" placeholder="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} minLength={2} maxLength={25}></Input>
                    <Input required type="text" placeholder="picture url" value={user.pictureUrl} onChange={(e) => setUser({ ...user, pictureUrl: e.target.value })}></Input>
                    <Button type="submit">Sign Up</Button>
                </form>
            )
        }
        else {
            return (
                <form onSubmit={signUp}>
                    <Input disabled={true} required type="email" placeholder="e-mail" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} ></Input>
                    <Input disabled={true} required type="password" placeholder="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} minLength={8}></Input>
                    <Input disabled={true} required type="text" placeholder="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} minLength={2} maxLength={25}></Input>
                    <Input disabled={true} required type="text" placeholder="picture url" value={user.pictureUrl} onChange={(e) => setUser({ ...user, pictureUrl: e.target.value })}></Input>
                    <Button disabled={true} type="submit"><ThreeDots width={51} height={13} color="#FFFFFF" /></Button>
                </form>
            )
        }
    }

    function signUp(event) {
        event.preventDefault();

        const URL = "http://localhost:5000/sign-up";

        setLoading(true);
        const promise = axios.post(URL, user);

        promise.then(res => {
            navigate("/");
        });
        promise.catch(err => {
            alert(err.response.data);
            setUser({
                email: "",
                password: "",
                username: "",
                pictureUrl: ""
            });
            setLoading(false);
        });
    }

    return (
        <Page>
            <LeftSide>
                <h1>
                    linkr
                </h1>
                <h2>
                    save, share and discover
                    the best links on the web
                </h2>
            </LeftSide>

            <RightSide>
                {assembleForm()}
                <SignInLink to="/">
                    Switch back to log in
                </SignInLink>
            </RightSide>
        </Page>
    )
}