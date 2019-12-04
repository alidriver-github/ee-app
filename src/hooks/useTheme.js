import { useEffect, useState } from "react";
import { theme1 } from '../themes/theme1';
import { theme2 } from '../themes/theme2';
import { theme3 } from '../themes/theme3';
export default () => {
    const [theme, setTheme] = useState(theme1);
    /*
	const toggleTheme = () => {
		if (theme !== "dark") {
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		} else {
			localStorage.setItem("theme", "light");
			setTheme("light");
		}
	};
    */
   
	useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        let localThemeObject = JSON.parse(localTheme);
		if (localTheme) {
			setTheme(localThemeObject);
		}
	}, {});
    

    const switchTheme = (theme) => {
        setTheme(theme)
    };

    const switchThemeWithString = (themeString) => {

        //alert(themeString);
        if(themeString == 'theme1') {
            setTheme(theme1);
            localStorage.setItem("theme", JSON.stringify(theme1));
        }

        if(themeString == 'theme2') {
            setTheme(theme2);
            localStorage.setItem("theme", JSON.stringify(theme2));
        }

        if(themeString == 'theme3') {
            setTheme(theme3);
            localStorage.setItem("theme", JSON.stringify(theme3));
        }
    };

	return {
		theme,
        switchTheme,
        switchThemeWithString
	};
};
