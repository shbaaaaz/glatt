import { useRestaurantMenu } from '../../hooks/useRestaurantMenu'
import MenuItemCard from '../MenuItemCard/MenuItemCard'
import styles from './RestaurantMenu.module.css'
import { FaStar } from 'react-icons/fa'

const RestaurantMenu = () => {
  const { restaurantInfo, menu, loading, error } = useRestaurantMenu(691057)
  console.log(menu)

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
                <FaStar />
              </span>
              <span>{restaurantInfo.rating}</span>
            </p>
            <hr />
            <p>{restaurantInfo.totalRatings}</p>
          </div>
        </div>
        <h2>Menu</h2>
        {menu &&
          menu.map((item) => (
            <div key={item.card.info.id}>
              <MenuItemCard menuItem={item.card.info} />
            </div>
          ))}
      </div>
    )
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default RestaurantMenu
