import { RestaurantCard } from '../RestaurantCard/RestaurantCard'
import styles from './RestaurantContainer.module.css'

export const RestaurantContainer = () => {
  return (
    <div className={styles['restaurant-container']}>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  )
}
