import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
    border: 5px solid gray;
    padding: 1rem;
    border-radius: 15px;
    text-align: center;

    h2 {
        margin: 0 0 1rem 0;
        font-size: 3rem;
        
    }

    .image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 75%;
    }

    p {
        margin: 2rem 0 2rem 0;
        
    }

    .description {
       &::first-line {
            font-size: 1.5rem;
        } 
    }

    .caption {
        font-size: 1rem;
        font-style: italic;
    }
`

export default function TextGenerator({title, ImgURL, date, text}) {

    return (
        <StyledDiv className="card">
            <h2>{title}</h2>
            <img className="image" src={ImgURL} ></img>
            <p className="caption">{date}</p>
            <p className="description">{text}</p>
        </StyledDiv>
    )

}