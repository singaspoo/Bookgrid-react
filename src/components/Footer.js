import React from "react";
import '../styles.css';

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className="footer">
            <p>A better world till {year}!!</p>
        </footer>
    )
}