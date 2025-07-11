import "./ImageGalleryComponent.scss"

const ImageGalleryComponent = ({imageSource, onSelect}) => {
    return (
        <div className="img-content-container" onClick={() => {onSelect(imageSource)}}>
            <img className="img-content-image" src={imageSource?.src} />
        </div>
    )
}

export default ImageGalleryComponent;