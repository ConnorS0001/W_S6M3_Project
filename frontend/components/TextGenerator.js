import React from "react"

export default function TextGenerator({title, ImgURL, date, text}) {

    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={ImgURL}></img>
            <p>{date}</p>
            <p>{text}</p>
        </div>
    )

}