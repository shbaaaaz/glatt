export const RESTAURANT_IMG_BASE_URL =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/'

export const DEFAULT_ADDRESS = {
  lat: '26.8127442',
  long: '80.9012798',
  name: 'Alambagh, Lucknow',
}

export const CORS_PROXY = 'https://corsproxy.io/?'

export const RESTAURANT_LIST_API_URL_MOBILE =
  CORS_PROXY + 'https://www.swiggy.com/mapi/homepage/getCards'
export const RESTAURANT_LIST_API_URL_DESKTOP =
  CORS_PROXY + 'https://www.swiggy.com/dapi/restaurants/list/v5'

export const RESTAURANT_LIST_API_CARD_TITLE_FOR_MOBILE =
  'All Restaurants Nearby'
export const RESTAURANT_LIST_API_CARD_ID_FOR_DESKTOP = 'restaurant_grid_listing'

export const RESTAURANTS_MENU_API =
  CORS_PROXY +
  'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId='
