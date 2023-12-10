// importing libraries
import { useState } from 'react'

// importing local files
import { RestaurantCard } from '../RestaurantCard/RestaurantCard'
import styles from './RestaurantContainer.module.css'
import { mockData } from '../../utils/mockData'

export const RestaurantContainer = () => {
  const [restaurantList, setRestaurantList] = useState(mockData)

  const filterTopRatedRestaurants = () => {
    const filteredData = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    )
    setRestaurantList(filteredData)
  }

  return (
    <>
      <div>
        <button
          className={styles['btn-top-rated']}
          onClick={filterTopRatedRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className={styles['restaurant-container']}>
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </>
  )
}
