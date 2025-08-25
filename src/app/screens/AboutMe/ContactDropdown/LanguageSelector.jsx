import "./LanguageSelector.scss"

const LanguageSelector = ({ lang }) => {
    return (
        <div className="language-selector-container">
            <div className="lang en">{"I can speak "}<span>English</span>{"!"}</div>
            <div className="lang jp"><span>日本語</span>{"を喋られます！"}</div>
            <div className="lang ch">{"我会说"}<span>中文</span>{"！"}</div>
        </div>
    )
}

export default LanguageSelector