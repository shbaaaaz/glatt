import { IoSearchOutline } from 'react-icons/io5'
import styles from './SearchBar.module.css'

export const SearchBar = () => {
  return (
    <form className={styles['form']}>
      <IoSearchOutline className={styles['search-icon']} />
      <input
        type='text'
        placeholder='What would you prefer?'
        className={styles['search-input']}
      />
    </form>
  )
}
