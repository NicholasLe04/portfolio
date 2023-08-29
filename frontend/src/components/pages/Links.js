const OPEN_CURLY = "{";
const CLOSE_CURLY = "}";

function Links() {
    return (
        <div className="info-page links">
            <span className="Keyword">def</span> <span className="Method-Class">get_links</span>(): <br/>
            <br/>
            <div className="definition">
                links <span className="Keyword-2">=</span> {OPEN_CURLY} 
                <div className="definition">
                    <span className="Keyword">"LinkedIn"</span>: <a className="String" href="https://www.linkedin.com/in/nicholasle04/">'linkedin.com/in/nicholasle04'</a>, <br/>
                    <span className="Keyword">"GitHub"</span>&emsp;&emsp;: <a className="String" href="https://www.github.com/nicholasle04/">'github.com/nicholasle04'</a>
                </div>
                {CLOSE_CURLY}
                <br/>
                <br/>
                <span className="Values">return</span> links
            </div>
        </div>
    );
}

export default Links;