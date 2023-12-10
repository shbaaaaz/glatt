import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './App.module.css'
import Header from './components/Header/Header'
import { Body } from './components/Body/Body'

const App = () => (
  <div className={styles['app']}>
    <Header />
    <Body />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
