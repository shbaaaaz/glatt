import { useState, useEffect } from 'react'
import { fetchRestaurantList } from '../lib/restaurantData'

export const useRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('')
        setIsLoading(true)
        const restaurants = await fetchRestaurantList()
        if (restaurants) {
          setRestaurantList(restaurants)
          setIsLoading(false)
        } else {
          throw new Error('Something went wrong!')
        }
      } catch (error) {
        setIsLoading(false)
        setError(error.message)
      }
    }
    fetchData()
  }, [])

  return { restaurantList, isLoading, error }
}
