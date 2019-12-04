import React, { useState } from 'react'
import { theme1 } from './themes/theme1';
import { theme2 } from './themes/theme2';

export const ThemeContext = React.createContext({
  theme: theme1,
  setTheme: () => {}
})

export const ThemeContextProvider = props => {
  const theme = {
    theme1: 
      theme1
    ,
    theme2:
      theme2
    ,
  }

  const setTheme = type => {
    
    if(type == 'theme1') {
      console.log(theme.theme1);
      setState({ ...state, theme: theme.theme1 })
    }

    if(type == 'theme2') {
      console.log(theme.theme2);
      setState({ ...state, theme: theme.theme2 })
    }

    //setState({ ...state, theme: type === 'theme1' ? theme.theme2 : theme.theme1 })
  }

  const initState = {
    theme: theme.theme1,
    setTheme: setTheme
  }

  const [state, setState] = useState(initState)

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  )
}