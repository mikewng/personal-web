import "./ProjectItem.scss"

const ProjectItem = ({ projectMetadata }) => {
    return (
        <div className="project-item-container">
            <div className="project-item-name">{projectMetadata?.Name}</div>
            <div className="project-item-data">{projectMetadata?.Date}</div>
            <img className="project-item-img" src={projectMetadata?.Image?.src} />
            <div className="project-item-desc">{projectMetadata?.Description}</div>
        </div>
    )
}

export default ProjectItem;