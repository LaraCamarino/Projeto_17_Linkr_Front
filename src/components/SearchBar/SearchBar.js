import { HiSearch } from "react-icons/hi";

import { SearchBarContainer } from "./styles"


export default function SearchBar() {
    return (
        <>
            <SearchBarContainer>
                <h1>Search for people</h1>
                <HiSearch />
            </SearchBarContainer>
        </>
    )
}