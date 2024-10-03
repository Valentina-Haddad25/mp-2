import Fantasybooks from "./components/fantasybooks.tsx"; // Importing the Fantasybooks component from the specified path
import styled from "styled-components"; // Importing styled-components to enable styled divs and CSS in JS

// Importing other necessary libraries and types (commented out because they are not currently used in this code)
// import {useEffect, useState} from "react";
// import {Book} from "./interfaces/book.ts";

import useSWR from "swr"; // Importing the useSWR hook for data fetching, caching, and revalidation

// Defining a styled component for the main container of the App component
const ParentDiv = styled.div`
    width: 100vw; /* Sets the width of the container to the full viewport width */
    margin: auto; /* Centers the container */
    border: 5px silver solid; /* Adds a silver border around the container */
`;

export default function App() {
    // useState Hook to store Data (commented out as not used in this code)

    // useEffect Hook for error handling and re-rendering (commented out as not used in this code)

    // Using the useSWR hook to fetch data from the given URL. The second parameter is a function that fetches the data and converts it to JSON.
    const { data, error } = useSWR("https://openlibrary.org/subjects/fantasy.json", (url) => fetch(url).then(res => res.json()));

    // If there's an error during data fetching, display an error message
    if (error) return <h1>This {error} happened</h1>;

    // If the data hasn't loaded yet, display a loading message
    if (!data) return <h1>Loading</h1>;

    // Once data is successfully fetched and loaded, render the ParentDiv component with the Fantasybooks component inside it
    return (
        <ParentDiv>
            {/* Passing the fetched data to the Fantasybooks component as a prop. The 'works' property is assumed to be part of the fetched data structure. */}
            <Fantasybooks data={data.works} />
        </ParentDiv>
    );
}
