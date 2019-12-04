import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

function ToggleTheme() {
  const state = useContext(ThemeContext)

  return (
  <div>
    <button 
        onClick={() => {
            state.setTheme('theme1')
          }}
    >
        Theme 1 set from toggle theme
    </button>
    <button 
        onClick={() => {
            state.setTheme('theme2')
          }}
    >
        Theme 2 set from toggle theme
    </button>
  </div>
  )
}

export default ToggleTheme