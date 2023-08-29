const OPEN_CURLY = "{";
const CLOSE_CURLY = "}";

let projects = [
    {
        "title": "UniPlan",
        "github": "https://github.com/NicholasLe04/calendar-app",
        "when": "August 2023 - Present",
        "description": "A calendar web application built on the MERN stack",
        "technologies": [ "MongoDB", "ExpressJS", "NodeJS", "ReactJS", "Vercel" ],
        "contributions": "Personal Project/Full Stack"
    },
    {
        "title": "Blockfish",
        "github": "https://github.com/NicholasLe04/blockfish",
        "when": "July 2023 - Present",
        "description": "A chess engine that uses minimax to suggest moves",
        "technologies": [ "Python", "ReactJS", "ExpressJS", "NodeJS" ],
        "contributions": "Personal Project/Full Stack"
    },
    {
        "title": "Valorant League Discord Bot",
        "github": "",
        "when": "September 2022 - Novemeber 2022",
        "description": "A Discord bot that scrapes and displays esports data",
        "technologies": [ "Python", "AWS EC2", "Discord.py", "MySQL" ],
        "contributions": "Led three student developers, focused on backend"
    },
]

function Projects() {
    return (
        <div className="info-page projects">
             <span className="Keyword">def</span> <span className="Method-Class">get_projects</span>():
            <div className="definition">
                <br/>
                projects <span className="Keyword-2">=</span> {OPEN_CURLY} <br/>
                    <div className="definition">
                        {
                            projects.map(({ title, github, when, description, technologies, contributions }, i) => {
                                return (
                                    <>
                                        <a href={github} className="Keyword">"{title}"</a>: {OPEN_CURLY} <br/>
                                            <div className="definition">
                                                <span className="Keyword-2">"when"</span>: <span className="String">'{when}'</span>, <br/>
                                                <span className="Keyword-2">"description"</span>&emsp;: <span className="String">'{description}'</span>, <br/>
                                                <span className="Keyword-2">"technologies"</span>: [
                                                    {
                                                        technologies.map((technology, i) => {
                                                            return (
                                                                <>
                                                                    <span className="String">'{technology}'</span>
                                                                    {(i !== technologies.length-1 ) && <>,</>}
                                                                </>
                                                            );
                                                        })
                                                    }
                                                ], <br/>
                                                <span className="Keyword-2">"contribution"</span>: <span className="String">'{contributions}'</span>
                                            </div>
                                        {CLOSE_CURLY}
                                        {i !== projects.length-1 && <>,</>}
                                        <br/>
                                    </>
                                );
                            })
                        }
                    </div>
                {CLOSE_CURLY}
                <br/>
                <br/>
                <span className="Values">return</span> projects
            </div>
        </div>
    );
}

export default Projects;