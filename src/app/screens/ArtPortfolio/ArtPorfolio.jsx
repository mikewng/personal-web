'use client'

import { useEffect, useState, lazy, Suspense } from "react";

// import ImageGalleryComponent from "./ImageComponent/ImageGalleryComponent";
import "./ArtPortfolio.scss"
import "./ImageComponent/ImageGalleryComponent.scss"

import { imgTestArray } from "../../utils/imageLib";
import ImageViewer from "./ImageViewer/ImageViewer";

const ImageGalleryComponent = lazy(() => import("./ImageComponent/ImageGalleryComponent"))


const ArtPortfolio = () => {

    const [isLoadingPictures, setIsLoadingPictures] = useState(true)
    const [displayedImage, setDisplayedImage] = useState(null)


    // Add isPinned field to Pictures

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoadingPictures(false)
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    const handleOnImgSelect = (image) => {
        setDisplayedImage(image)
    }


    return (
        <div className="art-gallery-container">
            {
                !isLoadingPictures ? imgTestArray.map((img, i) => {
                    return (
                        <ImageGalleryComponent imageSource={img} key={i} onSelect={handleOnImgSelect} />
                    )
                }) :
                    <div className="art-gallery-loading-container">
                        <div className="art-gallery-loading-content">Loading...</div>
                    </div>
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