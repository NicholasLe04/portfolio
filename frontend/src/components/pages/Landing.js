import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="info-page Landing"> 
            <span className="Keyword">class</span> <span className="Method-Class">NicholasLe</span>: <br/>
            <div className="definition">
                <span className="Comment"># View skills and interests</span><br/>
                <span className="Keyword">def</span> <span className="Method-Class" onClick={() => navigate("/skills-and-interests")}>get_skills_and_interests</span>() -&gt; <span className="Keyword-2">Dict</span><br/>
                <span className="Comment"># View projects</span><br/>
                <span className="Keyword">def</span> <span className="Method-Class" onClick={() => navigate("/projects")}>get_projects</span>() -&gt; <span className="Keyword-2">Dict</span><br/>
                <span className="Comment"># View links</span><br/>
                <span className="Keyword">def</span> <span className="Method-Class" onClick={() => navigate("/links")}>get_links</span>() -&gt; <span className="Keyword-2">Dict</span><br/>
                <span className="Comment"># Download resume</span><br/>
                <span className="Keyword">def</span> <a href="/Nicholas_Le_Resume.pdf" download="Nicholas_Le_Resume.pdf" target="_blank" rel="noopener noreferrer" className="Method-Class">get_resume</a>() -&gt; <span className="Keyword-2">File</span><br/>
                <span className="Comment"># Random Fun Stuff</span><br/>
                <span className="Keyword">def</span> <span className="Method-Class" onClick={() => navigate("/fun")}>get_fun_stuff</span>() -&gt; <span className="Keyword-2">?</span><br/>
            </div>
        </div>
    );
}

export default Landing;