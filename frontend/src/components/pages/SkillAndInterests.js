const OPEN_CURLY = "{";
const CLOSE_CURLY = "}";

const languages = [ "Python", "Java", "HTML", "CSS", "JavaScript", "SQL", "Bash" ];
const frameworksAndTools = [ "Docker", "Git", "Linux", "React.js", "Express.js", "Node.js" ];
const interests = [ "Video Games/Esports", "Basketball", "Badminton", "Comedy" ];

function SkillsAndInterests() {
    return (
        <div className="skills-and-interests">
            <span className="Keyword">public</span> <span className="Keyword-2">String</span>[] <span className="Method-Class">getSkillAndInterests</span>() {OPEN_CURLY}<br/>
            <br/>
            <div className="method-definition">
                <span className="Keyword">public</span> <span className="Keyword-2">String</span>[] languages <span className="Keyword">=</span> {OPEN_CURLY} <br/>
                    <div className="array-elements">
                        {
                            languages.map((language, i) => {
                                return (
                                    <>
                                        <span className="String">"{language}"</span>
                                        {(i != languages.length-1 ) && <>,</>}
                                    </>
                                );
                            })
                        }
                    </div>
                {CLOSE_CURLY}; 
                <br/>
                <span className="Keyword">public</span> <span className="Keyword-2">String</span>[] frameworksAndTools <span className="Keyword">=</span> {OPEN_CURLY} <br/>
                    <div className="array-elements">
                        {
                            frameworksAndTools.map((framework, i) => {
                                return (
                                    <>
                                        <span className="String">"{framework}"</span>
                                        {(i != frameworksAndTools.length-1 ) && <>,</>}
                                    </>
                                );
                            })
                        }
                    </div>
                {CLOSE_CURLY};
                <br/>
                <span className="Keyword">public</span> <span className="Keyword-2">String</span>[] interests <span className="Keyword">=</span> {OPEN_CURLY} <br/>
                    <div className="array-elements">
                        {
                            interests.map((interest, i) => {
                                return (
                                    <>
                                        <span className="String">"{interest}"</span>
                                        {(i != interests.length-1 ) && <>,</>}
                                    </>
                                );
                            })
                        }
                    </div>
                {CLOSE_CURLY};
                <br/>
            </div>
            
        </div>
    );
}

export default SkillsAndInterests;