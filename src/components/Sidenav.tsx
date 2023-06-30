import { useState, useEffect } from "react";

interface Props {
    menuItems: string[];
}

function Sidenav({ menuItems }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    /* Using this solution due to inconsistencies with ScrollSpy due to length of sections.
       This should be updated in the future. Works fine for now. */
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;

            if (currentPosition < 471) {
                setSelectedIndex(0);
            } else if (currentPosition < 1190) {
                setSelectedIndex(1);
            } else if (currentPosition < 2160) {
                setSelectedIndex(2);
            } else if (currentPosition < 2211) {
                setSelectedIndex(3);
            } else if (currentPosition < 2337) {
                setSelectedIndex(4);
            }
        };

        // Attach the event listener
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="navigation">
            <ul>
                {menuItems.map((item, index) => (
                    <li
                        className={selectedIndex === index ? "active" : ""}
                        key={item}
                    >
                        {/* toLowerCase to fix css smooth scroll */}
                        <a href={"#" + item.toLowerCase()}>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidenav;
