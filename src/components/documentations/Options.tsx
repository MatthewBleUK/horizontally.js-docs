function Options() {
    return (
        <>
            <h2 className="title" id="options">
                Options
            </h2>

            <p>Horizontally.js can be used with four options.</p>

            <p>
                The wrapper option changes the HTML ID name of the wrapper. The
                default option is #horizontally.
            </p>

            <pre className="code">
                <span>wrapper: '#horizontally'</span>
            </pre>

            <p>
                The speed option changes the scroll milliseconds duration. To
                prevent users from accidentally scrolling twice, a speed above
                300ms is a good choice. The default scroll speed is set to
                1000ms.
            </p>

            <pre className="code">
                <span>speed: 1000</span>
            </pre>

            <p>
                The arrowButtons option enables or disables the DOM onscreen
                arrow buttons.
            </p>

            <pre className="code">
                <span>arrowButtons: true</span>
            </pre>

            <p>
                The pageSelector options enables or disables the DOM circle page
                selector / navigation buttons.
            </p>

            <pre className="code">
                <span>pageSelector: true</span>
            </pre>
        </>
    );
}

export default Options;
