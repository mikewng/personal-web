import "./ImageGalleryComponent.scss"

const ImageGalleryComponent = ({imageSource}) => {
    return (
        <div className="img-content-container">
            <img className="img-content-image" src={imageSource?.src} />
        </div>
    )
}

export default ImageGalleryComponent;