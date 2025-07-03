import ProjectItem from "./ProjectItem/ProjectItem";
import "./Projects.scss"

const Projects = ({ }) => {
    return (
        <div className="projects-container">
            <div className="projects-header-text-container">
                <div className="header-selected-category-text">All</div>
                <div className="header-projects-text">Projects</div>
            </div>
            <ProjectItem />
        </div>
    )
}

export default Projects;