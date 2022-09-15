import React from 'react'

function Header({switchTheme, theme}) {
  return (
    <div className='headerContainer'>
      <div className='wrap'>
        <div className='header'>
          <h1>Where in the world?</h1>
          <button onClick={switchTheme} className='modeToggle'>{theme === 'light' ? 'light' : 'dark'} mode</button>
        </div>
      </div>
    </div>
  )
}

export default Header