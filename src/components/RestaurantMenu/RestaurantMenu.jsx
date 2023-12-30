import { useEffect } from 'react'
import { useRestaurantMenu } from '../../hooks/useRestaurantMenu'
import styles from './RestaurantMenu.module.css'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import { ShimmerMenu } from '../Shimmer/Shimmer'
import { ErrorContainer } from '../ErrorContainer/ErrorContainer'
import MenuCategory from '../MenuCategory/MenuCategory'

const RestaurantMenu = () => {
  const searchString = useOutletContext()
  const { id } = useParams()
  const { restaurantInfo, menu, loading, error } = useRestaurantMenu(id)
  const [filteredMenu, setFilteredMenu] = useState([])

  // Create a copy of menu to filtered menu when menu changes
  useEffect(() => {
    setFilteredMenu(menu)
  }, [menu])

  if (!loading && !error && restaurantInfo) {
    return (
      <div className={styles['restaurant-menu-container']}>
        <div className={styles['restaurant-info']}>
          <div>
            <h2>{restaurantInfo.name}</h2>
            <p>{restaurantInfo.cuisines?.join(', ')}</p>
            <p>
              <span>{restaurantInfo.areaName}</span>,{' '}
              <span>{restaurantInfo.distance}</span>
            </p>
          </div>
          <div className={styles['rating-box']}>
            <p className={styles['rating']}>
              <span>
                <FaStar arria-label='rating icon' />
              </span>
              <span>{restaurantInfo.rating}</span>
            </p>
            <hr />
            <p className={styles['total-ratings']}>
              {restaurantInfo.totalRatings}
            </p>
          </div>
        </div>
        <h2>Menu</h2>
        {filteredMenu &&
          filteredMenu.map((category, index) => (
            <MenuCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
      </div>
    )
  }

  return (
    <div>
      {loading && <ShimmerMenu />}
      {error && <ErrorContainer error={error} />}
    </div>
  )
}

export default RestaurantMenu
