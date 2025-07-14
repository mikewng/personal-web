const ResumeSkill = ({ skillMetadata }) => {
    return (
        <div className="resume-skill-container">
            {skillMetadata?.SkillName}
        </div>
    )
}

export default ResumeSkill;