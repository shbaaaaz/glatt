// importing libraries
import { useEffect, useState } from 'react'

// importing local files
import { ShimmerCardContainer } from '../Shimmer/Shimmer'
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
      {restaurantList.length > 0 ? (
        <div className={styles['restaurant-container']}>
          {restaurantList.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          ))}
        </div>
      ) : (
        <ShimmerCardContainer />
      )}
    </>
  )
}
