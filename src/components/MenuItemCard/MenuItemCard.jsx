import { RESTAURANT_IMG_BASE_URL, NOT_FOUND_IMAGE } from '../../utils/constants'
import styles from './MenuItemCard.module.css'

const MenuItemCard = ({ menuItem }) => {
  const { name, description, price, defaultPrice, imageId } = menuItem

  return (
    <div className={styles['container']}>
      <div>
        <h3>{name}</h3>
        <p>{(price || defaultPrice) / 100} Rs.</p>
        <p>{description}</p>
      </div>
      <div className={styles['image-container']}>
        <img
          src={imageId ? RESTAURANT_IMG_BASE_URL + imageId : NOT_FOUND_IMAGE}
          alt={name}
          className={styles['image']}
        />
        <button className={styles['cta']}>ADD+</button>
      </div>
    </div>
  )
}

export default MenuItemCard
