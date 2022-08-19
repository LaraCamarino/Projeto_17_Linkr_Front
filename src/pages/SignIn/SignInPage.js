import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import UserContext from "./../../contexts/UserContext.js";

import { Page, LeftSide, RightSide, Input, Button, SignUpLink } from "./styles.js";
import { ThreeDots } from "react-loader-spinner";

export default function SignInPage() {
    const navigate = useNavigate();
    const { setUserPicture } = useContext(UserContext);

    const [loading, setLoading] = useState(false);
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    function assembleForm() {
        if (!loading) {
            return (
                <form onSubmit={signIn}>
                    <Input required type="email" placeholder="e-mail" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} ></Input>
                    <Input required type="password" placeholder="password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} minLength={8}></Input>
                    <Button type="submit">Log In</Button>
                </form>
            )
        }
        else {
            return (
                <form onSubmit={signIn}>
                    <Input disabled={true} required type="email" placeholder="e-mail" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} ></Input>
                    <Input disabled={true} required type="password" placeholder="password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} minLength={8}></Input>
                    <Button disabled={true} type="submit"><ThreeDots width={51} height={13} color="#FFFFFF" /></Button>
                </form>
            )
        }
    }

    function signIn(event) {
        event.preventDefault();

        const URL = "https://project-17-linkr-db.herokuapp.com/sign-in";

        setLoading(true);
        const promise = axios.post(URL, login);

        promise.then(res => {
            localStorage.setItem("token", (res.data.token));
            localStorage.setItem("userId", (res.data.userId));
            setUserPicture(res.data.userPicture);
            navigate("/timeline");
        });
        promise.catch(err => {
            alert(err.response.data);
            setLogin({
                email: "",
                password: ""
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
                <SignUpLink to="/sign-up">
                    First time? Create an account!
                </SignUpLink>
            </RightSide>
        </Page>
    )
}
