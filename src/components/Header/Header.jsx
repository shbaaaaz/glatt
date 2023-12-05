import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles['nav']}>
      <a>Glatt</a>
      <span>Cologne</span>
      <div>Search</div>
      <div className={styles['nav-cta-group']}>
        <div>Cart</div>
        <div>User</div>
      </div>
    </nav>
  )
}

export default Header
