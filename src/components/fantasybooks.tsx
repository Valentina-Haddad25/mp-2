import styled from "styled-components";
import {Book} from "../interfaces/book.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: white;
    font: italic small-caps bold calc(4px + 1vw) fantsay, fantasy;
    
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: midnightblue;
    color: white;
    border: 3px darkblue solid;
    font: italic small-caps bold calc(4px + 1vw) fantsay, fantasy;
    text-align: center;
`;

export default function Fantasybooks(props: { data: Book[] }) {
    return (
        <AllCharsDiv>
            {props.data.map((book: Book) => (
                <SingleCharDiv key={book.id}>
                    <h1>{book.title}</h1>
                    <h2>Cover ID: {book.cover_id}</h2>
                    <h2>Authors:</h2>
                    {book.authors.map((author, index) => (
                        <h3 key={index}>{author.name}</h3>
                    ))}
                </SingleCharDiv>
            ))}
        </AllCharsDiv>
    );
}
