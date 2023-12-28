import { RESTAURANT_IMG_BASE_URL } from '../../utils/constants'
import styles from './MenuItemCard.module.css'

const MenuItemCard = ({ menuItem }) => {
  const { name, description, category, price, defaultPrice, imageId } = menuItem

  console.log(imageId)
  return (
    <div className={styles['container']}>
      <div>
        <h3>{name}</h3>
        <p>{(price || defaultPrice) / 100} Rs.</p>
        <p>{description}</p>
      </div>
      <div className={styles['image-container']}>
        <img
          src={RESTAURANT_IMG_BASE_URL + imageId}
          alt={name}
          className={styles['image']}
        />
        <button className={styles['cta']}>ADD+</button>
      </div>
    </div>
  )
}

export default MenuItemCard
