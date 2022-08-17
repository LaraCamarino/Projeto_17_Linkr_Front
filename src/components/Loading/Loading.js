import { ThreeDots } from "react-loader-spinner";

import { LoadingBox } from "./styles";

export default function Loading() {
    return (
        <>
            <LoadingBox>
                <ThreeDots width="50" height="50" color="#b2b2b2"></ThreeDots>
            </LoadingBox>
        </>
    )
}
