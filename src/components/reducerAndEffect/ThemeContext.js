import React, { createContext, useState } from 'react';

const Context = createContext(); // sử dụng cho các component khác

function ThemeContext({ children }) {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const value = {
        theme, toggleTheme
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export {
    ThemeContext, Context
};