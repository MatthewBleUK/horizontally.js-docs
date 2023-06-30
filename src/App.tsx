import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

import Introduction from "./components/documentations/Introduction";
import Installation from "./components/documentations/Installation";
import Usage from "./components/documentations/Usage";
import Options from "./components/documentations/Options";
import Contributors from "./components/documentations/Contributors";

import Footer from "./components/Footer";

function App() {
    const menuItems = [
        "Introduction",
        "Installation",
        "Usage",
        "Options",
        "Contributors",
    ];

    return (
        <>
            <Header />
            <main>
                <Sidenav menuItems={menuItems} />
                <article>
                    <Introduction />
                    <Installation />
                    <Usage />
                    <Options />
                    <Contributors />
                </article>
            </main>
            <Footer />
        </>
    );
}

export default App;
