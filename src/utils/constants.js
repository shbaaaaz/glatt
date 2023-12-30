export const RESTAURANT_IMG_BASE_URL =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/'

export const NOT_FOUND_IMAGE =
  'https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'

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

export const GITHUB_API = 'https://api.github.com/users/shbaaaaz'

export const DUMMY_AVATAR_URL =
  'https://cdn-icons-png.flaticon.com/512/5556/5556468.png'

export const MENU_CATEGORY_TYPE = {
  RESTAURANT_DETAILS_CATEGORY:
    'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
  ITEM_CATEGORY: 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
  NESTED_ITEM_CATEGORY:
    'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory',
}
