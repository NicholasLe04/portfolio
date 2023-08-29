const OPEN_CURLY = "{";
const CLOSE_CURLY = "}";

const languages = [ "Python", "Java", "HTML", "CSS", "JavaScript", "SQL", "Bash" ];
const toolsAndFrameworks = [ "Docker", "Git", "Linux", "React.js", "Express.js", "Node.js" ];
const interests = [ "Video Games/Esports", "Basketball", "Badminton", "Comedy" ];

function SkillsAndInterests() {
    return (
        <div className="info-page skills-and-interests">
            <span className="Keyword">def</span> <span className="Method-Class">get_skills_and_interests</span>(): <br/>
            <br/>
            <div className="definition">
                skills_and_interests <span className="Keyword-2">=</span> {OPEN_CURLY}<br/>
                <div className="definition">
                    <span className="Keyword">"languages"</span>: [<br/>
                        <div className="definition">
                            {
                                languages.map((language, i) => {
                                    return (
                                        <>
                                            <span className="String">'{language}'</span>
                                            {(i !== languages.length-1 ) && <>,</>}
                                        </>
                                    );
                                })
                            }
                        </div>
                    ],
                    <br/>
                    <span className="Keyword">"tools_and_frameworks"</span>: [<br/>
                        <div className="definition">
                            {
                                toolsAndFrameworks.map((tool, i) => {
                                    return (
                                        <>
                                            <span className="String">'{tool}'</span>
                                            {(i !== toolsAndFrameworks.length-1 ) && <>,</>}
                                        </>
                                    );
                                })
                            }
                        </div>
                    ],
                    <br/>
                    <span className="Keyword">"interests"</span>: [<br/>
                        <div className="definition">
                            {
                                interests.map((interest, i) => {
                                    return (
                                        <>
                                            <span className="String">'{interest}'</span>
                                            {(i !== interests.length-1 ) && <>,</>}
                                        </>
                                    );
                                })
                            }
                        </div>
                    ]
                    <br/>
                </div>
                {CLOSE_CURLY}
                <br/>
                <br/>
                <span className="Values">return</span> skills_and_interests
            </div>
        </div>
    );
}

export default SkillsAndInterests;