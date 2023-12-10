// importing libraries
import { useEffect, useState } from 'react'

// importing local files
import { RestaurantCard } from '../RestaurantCard/RestaurantCard'
import styles from './RestaurantContainer.module.css'
import { fetchRestaurantList } from '../../lib/restaurantData'

export const RestaurantContainer = ({ searchString }) => {
  const [restaurantList, setRestaurantList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const restaurants = await fetchRestaurantList()
      setRestaurantList(restaurants)
    } catch (error) {
      console.log(error.message)
    }
  }

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
        {restaurantList.length > 0 &&
          restaurantList.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          ))}
      </div>
    </>
  )
}
