import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

// const AuthProvider = (props) => {
    // const { children } = props;

const AuthProvider = ({children}) => {
    const allContexts = useFirebase();
    return (
        // <AuthContext.Provider value={useFirebase}>
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;