import styles from './MenuCategory.module.css'
import MenuItemCard from '../MenuItemCard/MenuItemCard'
import { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const MenuCategory = ({ category, index, isOpen, setOpenCategoryIndex }) => {
  const { title, cards } = category

  const cardClickHandler = () => {
    setOpenCategoryIndex()
  }

  return (
    <div className={styles['category-container']}>
      <div className={styles['category-card']} onClick={cardClickHandler}>
        <h3 id={title}>
          {title} ({cards.length})
        </h3>
        {isOpen ? (
          <IoIosArrowUp aria-expanded='true' />
        ) : (
          <IoIosArrowDown aria-expanded='false' />
        )}
      </div>
      {isOpen && (
        <div className={styles['menu-items']}>
          {cards &&
            cards.map((menuCard) => (
              <div
                key={menuCard.id}
                aria-labelledby={title}
                className={styles['menu-item-card']}
              >
                <MenuItemCard menuItem={menuCard} />
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default MenuCategory
