import { useState, useEffect } from "react";
import "./ProjectItem.scss"

const ProjectItem = ({ projectMetadata }) => {

    const [imageSrc, setImageSrc] = useState(projectMetadata?.Image?.blurDataURL);
    const [isLoading, setIsLoading] = useState(true)

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const img = new Image();
        img.src = projectMetadata?.Image?.blurDataURL;
        img.onload = () => {
            setImageSrc(projectMetadata?.Image?.blurDataURL);
            setIsLoading(false);
        };
    }, [projectMetadata?.Image?.blurDataURL]);


    return (
        <div className="project-item-container">
            <div className="project-item-img-backdrop" style={{ backgroundImage: `url(${projectMetadata?.Image?.src})` }}>
                <div className="project-item-content-container">
                    <div className="project-item-header-container">
                        <div className="project-item-text name">{projectMetadata?.Name}</div>
                        <div className="project-item-text date">{projectMetadata?.Date}</div>
                    </div>
                    <div className="project-item-body-container">
                        <div className="project-item-text desc">{projectMetadata?.Description}</div>
                        <div className="project-item-text longdesc">{projectMetadata?.LongDescription}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;