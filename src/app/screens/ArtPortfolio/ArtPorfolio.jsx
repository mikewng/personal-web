'use client'

import { useEffect, useState, lazy, Suspense } from "react";

// import ImageGalleryComponent from "./ImageComponent/ImageGalleryComponent";
import "./ArtPortfolio.scss"
import "./ImageComponent/ImageGalleryComponent.scss"

import { imgTestArray } from "../../utils/imageLib";

const ImageGalleryComponent = lazy(() => import("./ImageComponent/ImageGalleryComponent"))


const ArtPortfolio = () => {

    const [isLoadingPictures, setIsLoadingPictures] = useState(true)
    

    // Add isPinned field to Pictures

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoadingPictures(false)
        }, 700);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="art-gallery-container">
            {
                !isLoadingPictures ? imgTestArray.map((img, i) => {
                    return (
                        <ImageGalleryComponent imageSource={img} key={i} />
                    )
                }) :
                    <div className="art-gallery-loading-container">
                        <div className="art-gallery-loading-content">Loading...</div>
                    </div>
            }
            
            {/* {
                imgTestArray.map((img, i) => {
                    return (
                        <Suspense 
                            fallback={
                                <div 
                                    className="img-content-container loading" 
                                >
                                    Loading...
                                </div>
                            } 
                            key={i}
                        >
                            <ImageGalleryComponent imageSource={img}  />
                        </Suspense>
                    )
                })
            } */}
        </div>
    )
}

export default ArtPortfolio;