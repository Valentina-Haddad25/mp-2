import styled from "styled-components"; // Importing styled-components to enable styled divs and CSS in JS
import { Book } from "../interfaces/book.ts"; // Importing the 'Book' interface from the specified path

// Defining a styled component for the main container that will hold all book elements
const AllCharsDiv = styled.div`
    display: flex; /* Enables flexbox layout */
    flex-flow: row wrap; /* Allows rows to wrap and be responsive */
    justify-content: space-evenly; /* Spaces items evenly with equal margins */
    background-color: white; /* Sets the background color of the container */
    font: italic small-caps bold calc(4px + 1vw) fantsay, fantasy; /* Sets the font properties for the container */
`;

// Defining a styled component for each individual book element within the main container
const SingleCharDiv = styled.div`
    display: flex; /* Enables flexbox layout */
    flex-direction: column; /* Arranges children elements in a vertical column */
    justify-content: center; /* Centers items along the main axis */
    max-width: 30%; /* Limits the maximum width of each book element */
    padding: 2%; /* Adds padding inside the element */
    margin: 1%; /* Adds margin outside the element */
    background-color: midnightblue; /* Sets the background color of the book element */
    color: white; /* Sets the text color */
    border: 3px darkblue solid; /* Adds a solid border with dark blue color */
    font: italic small-caps bold calc(4px + 1vw) fantsay, fantasy; /* Sets the font properties for the book element */
    text-align: center; /* Centers text inside each book element */
`;

// Function component to render a list of books
export default function Fantasybooks(props: { data: Book[] }) {
    return (
        <AllCharsDiv>
            {/* Iterates over the book data array and creates a 'SingleCharDiv' for each book */}
            {props.data.map((book: Book) => (
                <SingleCharDiv key={book.id}> {/* Uses book ID as a unique key for each element */}
                    <h1>{book.title}</h1> {/* Displays the book title */}
                    <h2>Cover ID: {book.cover_id}</h2> {/* Displays the book cover ID */}
                    <h2>Authors:</h2> {/* Displays a header for the authors section */}
                    {/* Iterates over the authors array for each book and displays each author's name */}
                    {book.authors.map((author, index) => (
                        <h3 key={index}>{author.name}</h3> /* Uses index as a key for each author name */
                        ))}
                </SingleCharDiv>
            ))}
        </AllCharsDiv>
    );
}
