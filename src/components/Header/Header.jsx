import { SearchBar } from '../SearchBar/SearchBar'
import styles from './Header.module.css'
import { IoLocationSharp, IoBagHandle } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'

const Header = () => {
  const location = 'Alambagh, Lko'
  const itemsInCart = 0
  return (
    <nav className={styles['nav']}>
      <div className={styles['brand-container']}>
        <a className={styles['brand']}>GlattEssen</a>
        <div className={styles['location']}>
          <span>
            <IoLocationSharp />
          </span>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles['menu']}>
        <div className={styles['search']}>
          <SearchBar />
        </div>
        <div className={styles['nav-cta-group']}>
          <div className={styles['cart']}>
            <IoBagHandle role='button' className={styles['icon-button']} />
            <span className={styles['cart-counter']}>{itemsInCart}</span>
          </div>
          <div>
            <FaUserCircle role='button' className={styles['icon-button']} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
