import { SearchBar } from '../SearchBar/SearchBar'
import styles from './Header.module.css'
import { IoLocationSharp, IoBagHandle } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'

const Header = () => {
  const location = 'Cologne'
  return (
    <nav className={styles['nav']}>
      <div className={styles['brand-container']}>
        <a className={styles['brand']}>Glattessen</a>
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
          <div>
            <IoBagHandle role='button' className={styles['icon-button']} />
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
