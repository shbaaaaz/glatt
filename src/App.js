import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
// importing local files
import styles from './App.module.css'
import Header from './components/Header/Header'
import { Body } from './components/Body/Body'

const App = () => {
  const [searchString, setSearchString] = useState('')

  const handleSearch = (text) => {
    setSearchString(text)
  }

  return (
    <div className={styles['app']}>
      <Header handleSearch={handleSearch} />
      <Body searchString={searchString} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
