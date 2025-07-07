import React from 'react'
import ThemeProvider from './hooks/ThemeProvider'
import ButtonTheme from './components/ButtonTheme'
import Title from './components/Title'

const App = () => {
  return (
    <ThemeProvider>
      <div className='container'>
        <Title/>
        <ButtonTheme/>
      </div>
    </ThemeProvider>
  )
}

export default App