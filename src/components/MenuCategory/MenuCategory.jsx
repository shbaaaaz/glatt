import styles from './MenuCategory.module.css'
import MenuItemCard from '../MenuItemCard/MenuItemCard'
import { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const MenuCategory = ({ category, index }) => {
  const { title, cards } = category
  const [isOpen, setIsOpen] = useState(false)

  const cardClickHandler = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  useEffect(() => {
    if (index === 0) setIsOpen(true)
  }, [])

  return (
    <div className={styles['category-container']}>
      <div className={styles['category-card']} onClick={cardClickHandler}>
        <h3>
          {title} ({cards.length})
        </h3>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOpen && (
        <div className={styles['menu-items']}>
          {cards &&
            cards.map((menuCard) => (
              <div key={menuCard.id}>
                <MenuItemCard menuItem={menuCard} />
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default MenuCategory
