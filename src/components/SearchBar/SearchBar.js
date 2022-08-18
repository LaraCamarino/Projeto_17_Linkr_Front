import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { DebounceInput } from "react-debounce-input";


import { Container, SearchBarBox, Result } from "./styles"


export default function SearchBar() {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState();

    function searchDatabase() {
        const URL = `http://localhost:5000/search/${search}`;
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        setError();

        if (search.length >= 3) {
            const promise = axios.get(URL, config);

            promise.then(res => {
                setSearchResults(res.data);
            });
            promise.catch(err => {
                setError(err.response.data);
            });
        }
        else {
            setSearchResults([]);
        }
    }

    useEffect(() => searchDatabase(), [search]);

    function UserResult({ picture, username, userId }) {
        return (
            <Result onClick={() => navigate(`/user/${userId}`)}>
                <img src={picture}></img>
                <h2>{username}</h2>
            </Result>
        )
    }

    function showSearchResults() {
        if (error) {
            return (
                <Result>
                    <h2>{error}</h2>
                </Result>
            )
        }

        if (searchResults.length > 0) {
            return (
                <>
                    {
                        searchResults.map((result, index) => <UserResult key={index} userId={result.userId} picture={result.pictureUrl} username={result.username} />)
                    }

                </>
            )
        }

    }

    return (
        <Container>
            <SearchBarBox>
                <DebounceInput type="text" placeholder="Search for people" value={search} onChange={(e) => setSearch(e.target.value)} minLength={3} debounceTimeout={300} />
                <HiSearch />
            </SearchBarBox>
            {showSearchResults()}
        </Container>
    )
}