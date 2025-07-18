import "./ImageViewer.scss"

const ImageViewer = ({ image, isDisplaying, onClose }) => {
    return (
        <div className={"img-viewer-container" + (isDisplaying ? " displaying" : "")}>
            <div className="img-viewer-modal-container">
                <img className="img-viewer-img" src={image?.src} />
            </div>
            <div className="img-viewer-close" onClick={() => onClose(true)}></div>
        </div>
    )
}

export default ImageViewer;