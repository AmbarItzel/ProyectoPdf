import React, { createContext, useState } from 'react'


const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [darkMode, setDarkModel] = useState(false);

  const changeTheme = ()=> setDarkModel(!darkMode);

  const valoresGlobales = {
    darkMode,
    changeTheme
  };
  return (
<ThemeContext.Provider value={valoresGlobales}>
  {children}
</ThemeContext.Provider>
  )
}
