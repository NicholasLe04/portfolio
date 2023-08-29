import { useNavigate } from "react-router-dom";

const OPEN_CURLY = "{";
const CLOSE_CURLY = "}";

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="Landing"> 
            <span className="Keyword">public class</span> <span className="Method-Class">NicholasLe()</span> {OPEN_CURLY} <br/>
            &emsp;&emsp;&emsp;&emsp;<span className="Comment">// View skills and interests</span><br/>
            &emsp;&emsp;&emsp;&emsp;<span className="Keyword">public</span> <span className="Keyword-2">String</span>[] <span className="Method-Class" onClick={() => navigate("/skills-and-interests")}>getSkillAndInterests</span>()<br/>
            &emsp;&emsp;&emsp;&emsp;<span className="Comment">// View projects</span><br/>
            &emsp;&emsp;&emsp;&emsp;<span className="Keyword">public</span> <span className="Keyword-2">String</span>[] <span className="Method-Class" onClick={() => navigate("/projects")}>getProjects</span>()<br/>
            &emsp;&emsp;&emsp;&emsp;<span className="Comment">// View links</span><br/>
            &emsp;&emsp;&emsp;&emsp;<span className="Keyword">public</span> <span className="Keyword-2">String</span>[] <span className="Method-Class" onClick={() => navigate("/links")}>getLinks</span>()<br/>
            &emsp;&emsp;&emsp;&emsp;<span className="Comment">// View resume</span><br/>
            &emsp;&emsp;&emsp;&emsp;<span className="Keyword">public</span> <span className="Keyword-2">File</span>     <a href="/Nicholas_Le_Resume.pdf" download="Nicholas_Le_Resume.pdf" target="_blank" rel="noopener noreferrer" className="Method-Class">getResume</a>()<br/>
            {CLOSE_CURLY}
        </div>
    );
}

export default Landing;