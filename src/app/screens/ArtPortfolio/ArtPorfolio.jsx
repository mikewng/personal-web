import ImageGalleryComponent from "./ImageComponent/ImageGalleryComponent";
import "./ArtPortfolio.scss"

import img from "../../assets/gallery-imgs/a_1_23_25.png"
import img2 from "../../assets/gallery-imgs/a_7_1_22_1.png"
import img3 from "../../assets/gallery-imgs/a_10_17_24_1.png"

const ArtPortfolio = () => {
    return (
        <div className="art-gallery-container">
            <ImageGalleryComponent imageSource={img}/>
            <ImageGalleryComponent imageSource={img2}/>
            <ImageGalleryComponent imageSource={img3}/>
            <ImageGalleryComponent imageSource={img3}/>
            <ImageGalleryComponent imageSource={img3}/>
            <ImageGalleryComponent imageSource={img3}/>
            <ImageGalleryComponent imageSource={img2}/>
            <ImageGalleryComponent imageSource={img2}/>
            <ImageGalleryComponent imageSource={img}/>
            <ImageGalleryComponent />
            <ImageGalleryComponent />
            <ImageGalleryComponent />
            <ImageGalleryComponent />
        </div>
    )
}

export default ArtPortfolio;