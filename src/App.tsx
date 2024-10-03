import Fantasybooks from "./components/fantasybooks.tsx";
import styled from "styled-components";
//import {useEffect, useState} from "react";
//import {Book} from "./interfaces/book.ts";

import useSWR from "swr";

const ParentDiv=styled.div`
    width: 100vw;
    margin: auto;
    border: 5px silver solid;
`;

export default function App(){

    // useState Hook to store Data.

    // useEffect Hook for error handling and re-rendering.
    const{data, error}=useSWR("https://openlibrary.org/subjects/fantasy.json", (url) => fetch(url).then(res => res.json()));


    if(error) return <h1>This {error} happened</h1>
    if(!data) return <h1> Loading </h1>


    return(
        <ParentDiv>
            <Fantasybooks data={data.works}/>
        </ParentDiv>
    )
}