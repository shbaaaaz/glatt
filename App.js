import React from 'react'
import ReactDOM from 'react-dom'
import styles from './App.module.css'

const App = () => (
  <div>
    <h1 className={styles.title}>Order food smoothly with Glatt</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
