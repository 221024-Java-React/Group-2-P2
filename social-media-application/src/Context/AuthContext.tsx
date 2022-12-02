import React, { useState } from 'react'

const context = {
    loggedIn:false,
    login: (cookie : string) => {},
    logout: () => {}
}

const AuthContext = React.createContext(context);

const AuthContextProvider = (children : any) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const loginHandler = (cookie : string) => {
        setLoggedIn(true);
    };

    const logoutHandler = () => {
        setLoggedIn(false);
    };

    const contextValue = {
        loggedIn: false,
        cookie: "",
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;