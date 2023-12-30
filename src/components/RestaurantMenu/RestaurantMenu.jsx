import { useEffect } from 'react'
import { useRestaurantMenu } from '../../hooks/useRestaurantMenu'
import MenuItemCard from '../MenuItemCard/MenuItemCard'
import styles from './RestaurantMenu.module.css'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import { ShimmerMenu } from '../Shimmer/Shimmer'
import { ErrorContainer } from '../ErrorContainer/ErrorContainer'

const RestaurantMenu = () => {
  const searchString = useOutletContext()
  const { id } = useParams()
  const { restaurantInfo, menu, loading, error } = useRestaurantMenu(id)
  const [filteredMenu, setFilteredMenu] = useState([])

  // Create a copy of menu to filtered menu when menu changes
  useEffect(() => {
    setFilteredMenu(menu)
  }, [menu])

  useEffect(() => {
    searchString
      ? setFilteredMenu(
          filteredMenu.filter((menuItem) =>
            menuItem.card.info.name.toLowerCase().includes(searchString)
          )
        )
      : setFilteredMenu(menu)
  }, [searchString])

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
            <p>{restaurantInfo.totalRatings}</p>
          </div>
        </div>
        <h2>Menu</h2>
        {/* {filteredMenu &&
          filteredMenu.map((item) => (
            <div key={item.card.info.id}>
              <MenuItemCard menuItem={item.card.info} />
            </div>
          ))} */}
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
