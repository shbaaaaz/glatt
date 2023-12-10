// import third party packages
import { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
// import local files
import styles from './SearchBar.module.css'

export const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    handleSearch(searchText.trim())
  }, [searchText])

  return (
    <form className={styles['form']}>
      <IoSearchOutline className={styles['search-icon']} />
      <input
        type='text'
        placeholder='What would you prefer?'
        className={styles['search-input']}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
      />
    </form>
  )
}
