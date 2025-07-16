const ResumeSkill = ({ skillMetadata }) => {
    return (
        <div className={"resume-skill-container"} style={{ fontSize: `${(skillMetadata?.Value + 1) * 1}rem` }}>
            {skillMetadata?.SkillName}
        </div>
    )
}

export default ResumeSkill;