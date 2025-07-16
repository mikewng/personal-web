import "./Resume.scss"
import { resumeSkillsData } from "../../utils/resumeSkillsLib";
import ResumeSkill from "./components/ResumeSkill";

const Resume = () => {
    return (
        <div className="resume-container">
            <div className="resume-download-link-section">
                View Resume
            </div>
            <div className="resume-skills-section">
                {
                    resumeSkillsData.map((skill, i) => {
                        return <ResumeSkill skillMetadata={skill} key={i}/>
                    })
                }
            </div>
        </div>
    )
}

export default Resume;