import { useEffect, useState, useReducer } from 'react'
import { fetchRestaurantMenu } from '../lib/restaurantData'
import { MENU_CATEGORY_TYPE } from '../utils/constants'

export const useRestaurantMenu = (resId) => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [restaurantInfo, dispatchRestaurant] = useReducer(
    restaurantInfoReducer,
    null
  )
  const [menu, setMenu] = useState(null)

  useEffect(() => {
    const fetchMenu = async () => {
      setError('')
      setLoading(true)
      try {
        const result = await fetchRestaurantMenu(resId)

        // Getting the restaurant details card
        const restaurantDetails = result?.data?.cards?.filter(
          (cardItem) =>
            cardItem?.card?.card?.['@type'].toLowerCase() ===
            MENU_CATEGORY_TYPE.RESTAURANT_DETAILS_CATEGORY.toLocaleLowerCase()
        )[0]?.card?.card?.info

        // Getting the groupedCard that holds menu details
        const groupedCards = result?.data?.cards?.filter(
          (card) => card?.groupedCard
        )[0]?.groupedCard

        // Getting the cards with different categories of menu
        const menuData = groupedCards?.cardGroupMap?.REGULAR?.cards.filter(
          (menuCard) =>
            menuCard.card?.card?.['@type'] ===
              MENU_CATEGORY_TYPE.ITEM_CATEGORY ||
            menuCard.card?.card?.['@type'] ===
              MENU_CATEGORY_TYPE.NESTED_ITEM_CATEGORY
        )

        // Transforming the data menu data to create an array of menu with the category name and the menu items
        const finalMenu = transformMenu(menuData)

        dispatchRestaurant({
          type: 'SET',
          payload: restaurantDetails,
        })
        setMenu(finalMenu)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error.message)
      }
    }
    fetchMenu()
  }, [resId])

  return { restaurantInfo, menu, loading, error }
}

// Reducer function to set the restaurant details correctly
function restaurantInfoReducer(state, action) {
  if (action.type === 'SET') {
    return {
      ...state,
      name: action.payload.name,
      cuisines: action.payload.cuisines,
      constForTwo: action.payload.costForTwoMessage,
      areaName: action.payload.areaName,
      rating: action.payload.avgRating,
      totalRatings: action.payload.totalRatingsString,
      deliveryTime: action.payload.sla.slaString,
      distance: action.payload.sla.lastMileTravelString,
    }
  } else return state
}

// Helper function to transform the menu
function transformMenu(menuData) {
  return menuData.map((category) => {
    const obj = {
      title: category?.card?.card?.title,
      cards: [],
    }

    const itemCards =
      category?.card?.card?.['@type'] === MENU_CATEGORY_TYPE.ITEM_CATEGORY
        ? category.card.card.itemCards
        : category.card.card.categories.flatMap(
            (category) => category.itemCards
          )

    obj.cards = itemCards.map((itemCard) => itemCard.card.info)
    return obj
  })
}
