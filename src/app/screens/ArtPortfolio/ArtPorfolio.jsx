'use client'

import { useEffect, useState, lazy, Suspense } from "react";

import "./ArtPortfolio.scss"
import "./ImageComponent/ImageGalleryComponent.scss"

import { imgTestArray } from "../../utils/imageLib";
import ImageViewer from "./ImageViewer/ImageViewer";

const ImageGalleryComponent = lazy(() => import("./ImageComponent/ImageGalleryComponent"))


const ArtPortfolio = () => {
    const [displayedImage, setDisplayedImage] = useState(null)

    const handleOnImgSelect = (image) => {
        setDisplayedImage(image)
    }

    return (
        <div className="art-gallery-container">
            {
                imgTestArray.map((img, i) => {
                    return (
                        <ImageGalleryComponent imageSource={img} key={i} onSelect={handleOnImgSelect} />
                    )
                })
            }
            <ImageViewer
                isDisplaying={displayedImage}
                image={displayedImage}
                onClose={() => { setDisplayedImage(null) }}
            />
        </div>
    )
}

export default ArtPortfolio;