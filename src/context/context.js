import React, {useState} from 'react';
import {languageContext} from "./index";

const Context = ({children}) => {
    const [language,setLanguage] = useState('en-US')

    const [dark,setDark] = useState( )

    return (
        <languageContext.Provider value={{language,setLanguage}}>
            {children}
        </languageContext.Provider>
    );
};

export default Context;