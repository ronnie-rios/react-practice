import { useState, createContext } from "react";

const PracticeContext = createContext({
    loggedIn: false,
    onLogin: () => {},
    onLogout: () => {},
});

export const PracticeProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const loginHandler = () => {
        setLoggedIn(true)
    }
    const logoutHandler = () => {
        setLoggedIn(false)
    }
    return <PracticeContext.Provider value = 
        {{
            loggedIn: loggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}
    >
        {children}
    </PracticeContext.Provider>
}

export default PracticeContext;