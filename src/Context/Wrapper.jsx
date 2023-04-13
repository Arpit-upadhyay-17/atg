import {useState } from 'react';
import { loginContext } from './Context';

const Wrapper = ({ children }) => {
    const [ tryLogin , setTryLogin ] = useState(false);
    const [ isLoggedIn , setIsLoggedIn ] = useState(false);

    return (
        <loginContext.Provider value={{ tryLogin , setTryLogin , isLoggedIn , setIsLoggedIn  }} >
            { children }
        </loginContext.Provider>
    )
}

export default Wrapper