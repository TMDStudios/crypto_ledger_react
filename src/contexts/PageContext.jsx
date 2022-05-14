import React, { useState, createContext } from 'react';

const PageContext = createContext();

export function PageProvider({children}){
    const [username, setUsername] = useState("User");
    return (
        <PageContext.Provider value={{username, setUsername}}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext;