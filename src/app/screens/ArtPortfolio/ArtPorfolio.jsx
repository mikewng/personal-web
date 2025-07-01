'use client'

import { useEffect, useRef, useState } from "react";

import ImageGalleryComponent from "./ImageComponent/ImageGalleryComponent";
import "./ArtPortfolio.scss"

import { imgTestArray } from "../../utils/imageLib";


const ArtPortfolio = () => {
    const loaderRef = useRef();

    console.log("what is imgtest", imgTestArray)

    useEffect(() => {

    }, [])

    return (
        <div className="art-gallery-container">
            {
                imgTestArray.map((img, i) => {
                    return (
                        <ImageGalleryComponent imageSource={img} key={i}/>
                    )
                })
            }
        </div>
    )
}

export default ArtPortfolio;