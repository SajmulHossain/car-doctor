"use client";

import { Lightbulb, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

const DarkToogle = () => {
    const [isDark, setIsDark] = useState(true);
    useEffect(() => {        
        document.querySelector("html")?.setAttribute("data-theme", isDark ? 'dark' : 'light');
    }, [isDark])
    return (
        <button className="cursor-pointer" onClick={() => setIsDark(!isDark)}>
            {
                isDark ? <Lightbulb /> : <MoonIcon />
            }
        </button>
    );
};

export default DarkToogle;