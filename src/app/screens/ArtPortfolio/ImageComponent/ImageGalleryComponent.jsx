import "./ImageGalleryComponent.scss"
import { useEffect, useState } from "react";

const ImageGalleryComponent = ({ imageSource, onSelect }) => {
    const [imageSrc, setImageSrc] = useState(imageSource?.blurDataURL);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = imageSource?.src;
        img.onload = () => {
            setImageSrc(imageSource?.src);
            setIsLoading(false);
        };
    }, [imageSource?.src]);

    return (
        <div className="img-content-container" style={{ width: imageSource?.width }} onClick={() => { onSelect(imageSource) }}>
            {
                isLoading &&
                <div className="img-content-loading">Loading...</div>
            }
            <img className="img-content-image" src={imageSrc} />
        </div>
    )
}

export default ImageGalleryComponent;