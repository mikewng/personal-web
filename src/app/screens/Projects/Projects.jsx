import ProjectItem from "./ProjectItem/ProjectItem";
import { projectItemMetadata } from "../../utils/projectLib"
import "./Projects.scss"

const Projects = ({ }) => {
    return (
        <div className="projects-container">
            <div className="projects-header-text-container">
                <div className="header-selected-category-text">All</div>
                <div className="header-projects-text">Projects</div>
            </div>
            <div className="projects-items-body-container">
                {
                    projectItemMetadata.map((project, i) => {
                        return <ProjectItem projectMetadata={project} key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default Projects;