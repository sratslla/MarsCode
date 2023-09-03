import React from 'react'
import Navbar from './Navbar/Navbar';
import Slider from "./Switch/Slider";
import Paragraph from './Paragraph/Paragraph';
import Footer from './Footer/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Slider />
            <Paragraph />
            <Footer />
        </>
    )
}