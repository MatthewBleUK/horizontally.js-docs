function Useage() {
    return (
        <>
            <h2 className="title" id="usage">
                Usage
            </h2>

            <p>
                To use the library, simply set up the required HTML structure
                and initialize the project.
            </p>

            <h3>1. Setting up HTML structure</h3>
            <pre className="code">
                <span>&lt;div id="horizontally"&gt;</span>
                <span className="indent">
                    &lt;div class="section"&gt;&lt;/div&gt;
                </span>
                <span className="indent">
                    &lt;div class="section"&gt;&lt;/div&gt;
                </span>
                <span className="indent">
                    &lt;div class="section"&gt;&lt;/div&gt;
                </span>
                <span>&lt;/div&gt;</span>
            </pre>

            <h3>2. Initialize the project</h3>
            <pre className="code">
                <span>new horizontally(&#123;</span>
                <span className="indent">wrapper: '#horizontally',</span>
                <span className="indent">speed: 1000,</span>
                <span className="indent">arrowButtons: true,</span>
                <span className="indent">pageSelector: true,</span>
                <span>&#125;);</span>
            </pre>

            <h3>3. Add CSS styles</h3>
            <p>
                If this is your first time using Horizontally.js, you may want
                to add CSS styles to the sections to visually represent them.
                This can be seen in our{" "}
                <a
                    href="https://codepen.io/matthew98/pen/poQeapN"
                    target="_blank"
                    className="link"
                >
                    CodePen demo
                </a>
                .
            </p>
            <pre className="code">
                <span>.section:nth-child(1) &#123;</span>
                <span className="indent">background: #2196F3;</span>
                <span>&#125;</span>

                <span>.section:nth-child(2) &#123;</span>
                <span className="indent">background: #4caf50;</span>
                <span>&#125;</span>

                <span>.section:nth-child(3) &#123;</span>
                <span className="indent">background: #FFC107;</span>
                <span>&#125;</span>
            </pre>
        </>
    );
}

export default Useage;
