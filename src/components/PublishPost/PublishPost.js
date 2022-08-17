import { useState } from "react";
import { PublishPostContainer, LeftSide, ProfileImage, RightSide, Top, Tittle, Form, Input, Textarea, ButtonBox, Button } from "./styles.js";


export default function PublishPost() {
    const userPicture = "https://www.youtube.com/watch?v=BmskWq6nRSc";

    const [loading, setLoading] = useState(false);
   
    return (
        <>
            <PublishPostContainer>
                <LeftSide>
                    <ProfileImage src={userPicture} />
                </LeftSide>
                <RightSide>
                    <Top>
                        <Tittle>What are you going to share today?</Tittle>
                    </Top>
                    <Form>
                        <Input required disabled={loading} type="url" placeholder="http://..."></Input>
                        <Textarea disabled={loading} type="text" placeholder="Awesome article about #javascript"></Textarea>
                        <ButtonBox>
                            <Button disabled={loading} type="submit"> {!loading ? "Publish" : "Publishing..."} </Button>
                        </ButtonBox>
                    </Form>
                </RightSide>
            </PublishPostContainer>
        </>
    )
}