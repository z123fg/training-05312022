import React from "react";
import "./BookInfo.css";

const BookInfo = ({ bookInfo }) => {
    const {
        volumeInfo: {
            title = "N/A",
            authors = ["N/A"],
            description = "N/A",
            imageLinks: { thumbnail = "" } = {},
            publisher = "N/A",
        } = {},
    } = bookInfo;

    return (
        <div className="book-info__container">
            <div className="thumbnail__container">
                <img alt={title} src={thumbnail} />
            </div>
            <div className="info__container">
                <div className="info__row">
                    <b>Title: </b><span>{title}</span>
                </div>
                <div className="info__row">
                    <b>Authors: </b>
                    <span>{authors.map((author) => `${author}`).join(", ")}</span>
                </div>
                <div className="info__row">
                    <b>Publisher: </b><span>{publisher}</span>
                </div>
                <div className="info__row">
                    <b>Description: </b><span>{description}</span>
                </div>
            </div>
        </div>
    );
};

export default BookInfo;
