import React from 'react'
import ReactDOM from 'react-dom'
import styles from './App.module.css'
import Header from './components/Header/Header'

const App = () => (
  <div class={styles['app']}>
    <Header />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
