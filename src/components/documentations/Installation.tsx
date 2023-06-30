function Installation() {
    return (
        <>
            <h2 className="title" id="installation">
                Installation
            </h2>
            <p>
                Installing Horizontally.js is quick and easy. Include the CSS
                and JS file locally or by using our CDN. NPM is also available.
            </p>

            <h3>Including CSS and Javascript files</h3>

            <pre className="code">
                <span>
                    &lt;link rel="stylesheet" type="text/css"
                    href="horizontally.css"&gt;
                </span>
                <span>
                    &lt;script type="text/javascript"
                    src="horizontally.js"&gt;&lt;/script&gt;
                </span>
            </pre>

            <h3>CDN</h3>

            <p>
                Alternatively, instead of downloading the files locally it is
                possible to use our CDN.
            </p>

            <pre className="code">
                <span>
                    https://cdn.jsdelivr.net/gh/MatthewBleUK/horizontally.js@latest/src/css/horizontally.css
                </span>
                <span>
                    https://cdn.jsdelivr.net/gh/MatthewBleUK/horizontally.js@latest/src/js/horizontally.js
                </span>
            </pre>

            <h3>NPM Usage</h3>

            <p>
                Horizontally.js is also available on NPM and can be installed
                via the command line.
            </p>

            <pre className="code">
                <span>npm install horizontally.js</span>
            </pre>
        </>
    );
}

export default Installation;
