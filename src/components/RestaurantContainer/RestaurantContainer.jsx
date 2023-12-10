// importing local files
import { RestaurantCard } from '../RestaurantCard/RestaurantCard'
import styles from './RestaurantContainer.module.css'
import { mockData } from '../../utils/mockData'

export const RestaurantContainer = () => {
  return (
    <div className={styles['restaurant-container']}>
      {mockData.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
      ))}
    </div>
  )
}
