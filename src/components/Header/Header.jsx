// import third party packages
import { IoLocationSharp, IoBagHandle } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'
import { SearchBar } from '../SearchBar/SearchBar'
// import local files
import { DEFAULT_ADDRESS } from '../../utils/constants'
import styles from './Header.module.css'
import logo from '../../images/logo.png'

const Header = ({ handleSearch }) => {
  const location = DEFAULT_ADDRESS.name
  const itemsInCart = 0
  return (
    <nav className={styles['nav']}>
      <div className={styles['brand-container']}>
        <img className={styles['brand']} src={logo} />
        <div className={styles['location']}>
          <span>
            <IoLocationSharp />
          </span>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles['menu']}>
        <div className={styles['search']}>
          <SearchBar handleSearch={handleSearch} />
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
